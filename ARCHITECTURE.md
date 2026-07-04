# Architecture Reference

Quick reference for future sessions. Reduces need to grep the codebase for
common lookups. Line numbers are approximate — search for function names if
they've drifted.

---

## Stack

- **Vanilla JS + localStorage**, no build step, no framework
- **GitHub Pages** hosting at `jessemurphy.github.io/boardgameachievements`
- `index.html` — engine (3800+ lines): state, rendering, conditions, import
- `games/*.js` — one file per game, each pushes to `window.GAME_DEFINITIONS`
- `games/meta.js` — pushes to `window.META_DEFINITIONS`
- `generator/` — game config generator tool (partially backported)
- `BGSTATS_GUIDE.md` — BGStats field formatting reference

---

## Global State (all in-memory, persisted to localStorage)

```
localStorage key: 'solo_tracker_pub_v4'
Shape: { state, unlocked, unlockedDates, hiddenGames, campaigns }
```

| Variable | Type | Description |
|---|---|---|
| `appState` | `{ [gameId]: { plays: Play[] } }` | All play history per game |
| `unlocked` | `{ [achievementId]: true }` | Unlocked achievement IDs |
| `unlockedDates` | `{ [achievementId]: 'YYYY-MM-DD' }` | Date each achievement unlocked |
| `hiddenGames` | `Set<string>` | Games hidden from the home list |
| `campaigns` | `{ [gameId]: Campaign[] }` | Campaign state per game |
| `newlyUnlocked` | `Set<string>` | Transient — achievements unlocked this session |
| `currentNav` | string | Current tab: `'home'|'meta'|'stats'|'history'|'settings'` |
| `currentGameId` | string\|null | Currently open game detail page |
| `logGameId` | string\|null | Game the log/edit modal is open for |
| `editPlayIndex` | number | Index into plays array; -1 for new play |
| `modalToggles` | `{ [fieldId]: boolean }` | Current toggle states in open modal |

### Play object shape
```js
{
  date: 'YYYY-MM-DD',   // play date string
  ts: number,            // Unix ms timestamp
  win: boolean,
  score: number,         // 0 if not applicable
  // ...game-specific fields (see each game's logFields)
}
```

### Campaign object shape
```js
{
  id: string,           // uuid
  name: string,
  status: 'active' | 'complete',
  scenarios: { [num]: { available: boolean, complete: boolean } }
}
```

---

## Key Functions

### Condition Evaluation
| Function | Line | Signature | Description |
|---|---|---|---|
| `evalCondition` | ~467 | `(check, gameState, allState, unlockedMap, calcPts) → bool` | Evaluates a single achievement condition |
| `getProgress` | ~1213 | `(check, gameState, allState) → string\|null` | Human-readable progress string for locked achievements |
| `getProgressPct` | ~754 | `(check, gameState, allState) → 0..1` | Numeric progress for near-miss 🔥 threshold (fires at ≥0.8) |
| `findTriggerDate` | ~1444 | `(check, gs, allState, unlockedDates) → 'YYYY-MM-DD'\|null` | Finds historical date when an achievement first became true |
| `checkAll` | ~1533 | `() → newUnlocks[]` | Scans all achievements, sets unlocked/dates, returns newly unlocked |
| `calcTotalPts` | ~1430 | `() → number` | Sum of all unlocked achievement pts (game + meta) |
| `calcGamePts` | ~1436 | `(gid) → { earned, total }` | Points earned vs total for a single game |

### Import / Parsing
| Function | Line | Signature | Description |
|---|---|---|---|
| `parseSinglePlay` | ~2710 | `(play, gameId, playerUuid, games) → Play\|null` | Converts one BGStats play object to tracker play format |
| `parseBoard` | ~2683 | `(boardStr) → { level, adversary, actsCleared, ascension, extras }` | Parses BGStats board field generically |
| `parseFullExport` | ~3387 | `(jsonText) → { results, skipped }` | Parses a full BGStatsExport.json |
| `playFingerprint` | ~3476 | `(gid, play) → string` | Deduplication key: `date\|win\|score` + game-specific fields |
| `normalizeSpirit` | ~2673 | `(s) → string` | Maps BGStats spirit name variants to canonical names |
| `normalizeAdversary` | ~2677 | `(s) → string` | Maps BGStats adversary name variants to canonical names |

**Comment tag helper (inside parseSinglePlay scope):**
```js
tagNum(key)  // reads commentTags[key]; '?' → -1, absent → 0, number → parseInt
commentTags  // { [lowercaseKey]: value } parsed from play.comments '[key=value]' tags
```

**Player identification in parseSinglePlay:**
1. `data.userInfo.meRefId` → look up player uuid
2. Match `playerScores` entry where `metaData.scoreUuid === playerUuid`
3. Fallback: `playerRefId === 1`, then `playerScores[0]`

### Rendering
| Function | Line | Description |
|---|---|---|
| `renderAll` | ~1766 | Dispatches to current screen renderer |
| `renderHome` | ~1812 | Games list with sort/filter |
| `renderGameDetail` | ~1870 | Full game page (hero, buttons, stats, achievements, history) |
| `renderMeta` | ~2195 | Meta achievements page |
| `renderHistory` | ~2119 | History tab with filters and play list |
| `renderStats` | ~3620 | Stats page with overview, monthly bars, by-game list, calendar |
| `renderSettings` | ~2243 | Settings page |
| `renderPersonalBests` | ~1039 | Best scores grouped by context field |
| `renderTopScoresWithTag` | ~1023 | Top-10 list with score + tag field + date |
| `renderCustomStats` | ~1076 | Stats panels (customStats through customStats4) |
| `renderCampaignTrail` | ~1171 | Visual fort/scenario progress trail |
| `renderCampaignList` | ~1600 | Campaign list screen for a game |
| `renderCampaignDetail` | ~1668 | Campaign detail with scenario checklist |
| `playDetailLine` | ~1914 | Single-line play summary for history rows |
| `buildSummary` | ~2299 | Fallback summary for games without custom detail logic |

### Modal / Log
| Function | Line | Description |
|---|---|---|
| `openModal` | ~2325 | Opens log or edit modal for a game |
| `submitPlay` | ~2480 | Saves a new or edited play, runs checkAll, updates UI |
| `updateShowIf` | ~2408 | Shows/hides conditional fields based on toggle/select value |
| `toggleField` | ~2471 | Toggles a toggle field in the modal |

---

## BGG_TO_TRACKER Map (~line 2581)

Maps BGG game IDs to tracker game IDs. When a BGStats import contains a
`bggId` that matches, `parseSinglePlay` is called with the corresponding
tracker game ID. Add entries here when adding new games with BGStats import.

---

## Game Config Schema

Every game file pushes one config object to `window.GAME_DEFINITIONS`:

```js
{
  // Required
  id: string,           // unique, lowercase, no spaces
  name: string,         // display name
  icon: string,         // emoji
  color: string,        // hex accent color
  bgColor: string,      // light tint
  dimColor: string,     // mid tint
  genre: string,        // subtitle
  logFields: LogField[],
  achievements: Achievement[],

  // Optional display
  personalBestField: string,     // field id for personal best tracking
  personalBestContext: string,   // if set, group by this field, score by personalBestField
  personalBestTitle: string,     // override "Best Score" header
  topScoresTagField: string,     // enables top-10 panel tagged with this field
  topScoresTitle: string,        // header for top scores panel
  credit: { text, url },         // attribution shown at bottom of game page

  // Optional stats panels (up to 4)
  customStatsTitle: string,
  customStats: StatDef[],
  customStats2Title: string,
  customStats2: StatDef[],
  customStats3Title: string,
  customStats3: StatDef[],
  customStats4Title: string,
  customStats4: StatDef[],

  // Optional completeness flagging
  completenessFields: string[],

  // Optional: exclude from "all games" meta conditions
  // (all_games_played, all_games_won, all_games_in_week, all_games_in_month)
  excludeFromAllGames: true,  // play flagged incomplete if ALL these fields are at default/unset

  // Optional campaign trail panel
  campaignTrail: {
    title: string,
    leftLabel: string,
    rightLabel: string,
    stops: [{ id: achievementId, label: string }]
  },

  // Optional campaign system
  campaignConfig: {
    scenarios: [{ num: number, title: string }]
  },
}
```

### LogField schema
```js
{
  id: string,
  label: string,
  type: 'toggle' | 'select' | 'number',
  // toggle
  trueLabel: string, falseLabel: string,
  // select
  options: string[],   // first option = default/"unset" (use neutral label like '— Select —')
  // number
  min: number, max: number, default: number,
  // conditional visibility (any type)
  showIf: { field: string, value: any },
}
```

### Achievement schema
```js
{
  id: string,          // unique across all games + meta
  icon: string,
  tier: 'bronze' | 'silver' | 'gold' | 'plat',
  pts: number,
  name: string,
  desc: string,
  check: ConditionCheck,
  official: true,      // optional — shows OFFICIAL badge
  category: string,    // meta only: 'active' | 'completionist' | 'seasonal'
}
```

---

## Condition Types (evalCondition)

### Play-count conditions
| Type | Fields | Meaning |
|---|---|---|
| `min_plays` | `count` | ≥ N total plays |
| `min_wins` | `count` | ≥ N total wins |
| `total_plays_gte` | `count` | ≥ N plays across all games (meta) |
| `total_wins_gte` | `count` | ≥ N wins across all games (meta) |
| `games_played_gte` | `count` | ≥ N different games played (meta) |

### Field-value conditions (single play)
| Type | Fields | Meaning |
|---|---|---|
| `field_gte` | `field, value` | Any play: field ≥ value |
| `field_lte` | `field, value` | Any play: field ≤ value |
| `field_eq` | `field, value` | Any play: field = value |
| `win_field_gte` | `field, value` | Win where field ≥ value |
| `win_field_lte` | `field, value` | Win where field ≤ value |
| `win_field_eq` | `field, value` | Win where field = value |
| `win_with_field` | `field, value` | Win where field = value (string) |
| `win_with_toggle` | `field` | Win where toggle field = true |
| `win_toggle_false` | `field` | Win where toggle field = false |
| `toggle_false` | `field` | Any play where toggle = false |
| `win_two_fields` | `field1, value1, field2, value2` | Win matching both fields |
| `win_two_fields_gte` | `field1, value1, field2, margin` | Win field1=value1 AND field2≥margin |
| `win_with_any_field` | `fields[], value` | Win where any of fields = value |
| `win_field_gte_and_field_eq` | `field, value, condField, condValue` | Win field≥value AND condField=condValue |
| `win_field_lte_and_field_eq` | `field, value, condField, condValue` | Win field≤value AND condField=condValue |
| `win_multifield_value_and_field_eq` | `fields[], value, condField, condValue` | Win any fields[]=value AND condField=condValue |
| `win_with_toggle_and_field_eq` | `field, condField, condValue` | Win toggle=true AND condField=condValue |
| `all_fields_gte` | `fields[], value` | Any play: all listed fields ≥ value |
| `n_fields_gte` | `fields[], value, count` | Any play: at least N fields ≥ value |
| `any_field_max_gte` | `fields[], value` | Any play: max of listed fields ≥ value |
| `win_field_beats_by` | `field, compareField, margin` | Win where field - compareField ≥ margin |

### Uniqueness / variety
| Type | Fields | Meaning |
|---|---|---|
| `unique_values` | `field, count, winsOnly?` | ≥ N distinct values of field |
| `unique_win_values` | `field, count` | ≥ N distinct values in wins |
| `unique_win_values_multifield` | `fields[], count` | ≥ N distinct values across multiple fields |
| `win_all_values` | `field, values[]` | Won at least once for every value in list |
| `win_all_values_multifield` | `fields[], values[]` | Every value appears in at least one win across fields |
| `unique_field_pair_combos` | `gameId, field1, field2` | Won every combination of field1 × field2 options |
| `count_wins_with_field_values` | `field, values[], count` | ≥ N wins where field is in values list |
| `cumulative_field_gte` | `field, value` | Sum of field across all wins ≥ value |

### Cross-game / meta
| Type | Fields | Meaning |
|---|---|---|
| `all_games_played` | — | Every visible game has ≥1 play |
| `all_games_won` | — | Every visible game has ≥1 win |
| `all_games_won_subset` | `games[]` | Every listed game has ≥1 win |
| `all_achievements` | `ids[]` | Every listed achievement is unlocked |
| `all_plat_achievements` | — | Every platinum achievement is unlocked |
| `plat_count_gte` | `count` | ≥ N platinum achievements unlocked |
| `total_pts_gte` | `count` | Total points ≥ N |
| `win_streak` | `count` | Best ever cross-game win streak ≥ N (NOTE: evalCondition currently checks current streak — bug) |
| `win_streak_game` | `count` | Last N plays of THIS game are all wins |
| `n_different_games_in_week` | `count` | ≥ N different games played in any 7-day window |
| `n_different_games_won_same_day` | `count` | ≥ N different games won on the same date |
| `all_games_in_month` | — | Every game played in some calendar month |
| `all_games_in_week` | — | Every game played in the last 7 days |
| `cross_same_day` | `games[]` | All listed games won on the same date |
| `campaign_complete` | `gameId` | At least one campaign for gameId has status='complete' |
| `games_played_gte` | `count` | ≥ N distinct games have been played |

### Calendar
| Type | Fields | Meaning |
|---|---|---|
| `played_every_day_of_month` | — | Every day of some calendar month in one year covered |
| `played_every_day_of_year` | — | All 365 days in one calendar year covered |
| `played_days_containing_digit` | `digit` | Every month-day whose day number contains digit is covered |

---

## Stat Panel Types (evalStat)

Used in `customStats` / `customStats2` / `customStats3` / `customStats4` arrays.

| Type | Fields | Output |
|---|---|---|
| `ratio` | `field, value` | `wins / attempts` where plays[field] = value |
| `ratio_any_field` | `fields[], value` | `wins / attempts` where any fields[i] = value |
| `count_where` | `field, value` | Count of plays where field = value |
| `count_toggle` | `field` | Count of plays where toggle field = true |
| `best_win` | `field` | Best value of field across all wins |
| `avg` | `field` | Average value of field across all plays |
| `unique_values` | `field, winsOnly?` | Count of distinct values |

`best_win` also supports optional `filter: { field, value }` to restrict to plays matching that field value.

---

## UNSET Values (isPlayIncomplete)

A play field is considered "unset/incomplete" if its value is any of:
`''`, `'Unknown'`, `'None'`, `'Any / Unknown'`, `'— Select Airport —'`, `'— Select —'`, `-1` is treated as "intentionally unknown" (complete).

`completenessFields` on a game config lists which fields to check. A play is flagged ⚠️ incomplete only if ALL listed fields are unset.

---

### Log field types (`logFields`)

`toggle`, `number`, `select`, and `cards`. The **`cards`** type renders a tap-to-select chip picker for choosing exactly `count` options from a list with no duplicates (used by Sprawlopolis to pick 3 of 18 scoring cards). It does not store under its own `id`; instead it writes the stripped names (number prefix removed, matching the importer) to the fields named in `targets` (e.g. `['card1','card2','card3']`), so manually-logged and imported plays produce identical fields. Config keys: `count`, `targets`, `options` (numbered strings like `'01 The Outskirts'`), optional `noun` for the validation toast, and optional `sumTo`/`sumDefault` to derive a numeric field from the picked card numbers (Sprawlopolis: `targetScore` = sum of the three card numbers). Derivation is edge-safe: exactly `count` picked -> compute the sum; no cards while editing a play that already has the value -> preserve it (never zeroes an old play's target); otherwise `sumDefault` (mirrors importer's `|| 9`). A live 'Target Score' readout shows the derived value as cards are picked. The manual targetScore field was removed in favor of this. Validation: a play must have 0 or exactly `count` selected. One `cards` field per game (shared `modalCards` state).

## Achievement Tiers

Tiers, low to high: `bronze`, `silver`, `gold`, `plat`, and `diamond` (prestige).

**Diamond** is a prestige tier that sits *outside* the completion economy — for extremely hard, optional feats (e.g. winning every Sprawlopolis scoring-card combination). Design rules:
- Excluded from all completion measures: per-game % and points (`calcGamePts` skips `tier==='diamond'`), the game-card X/Y achievement count, the game's platinum requirement (never listed in a `_plat` achievement's `all_achievements` ids), and the `all_plat_achievements` / `plat_count_gte` metas (those filter `tier==='plat'`).
- **Points still count** toward the global total (`calcTotalPts` includes diamond) and therefore toward point metas (Legend/Immortal). Set `pts: 0` for a pure-prestige, cosmetic-only diamond.
- A game shows 💠 on its card when a diamond is earned (distinct from the platinum 💎).
- Generator offers Diamond in the tier picker.
- Combo-coverage condition type `win_all_combos_multifield` exists (added July 2026): tracks distinct winning combinations of N fields drawn from a `values` pool; denominator is C(pool, fieldCount) via `nCk`. First user: Sprawlopolis `sp_allcombos` ('The Whole Sprawl', diamond) — win all C(18,3)=816 three-card scoring combinations. Progress bar shows 'X / 816'. Cards come from BGStats comment tags (`card1/2/3`), not logFields.

## Known Bugs / Pending Fixes

1. ~~**`win_streak` evalCondition**~~ — FIXED (July 2026): now uses best-ever streak, matching `getProgress`.
2. **Meta achievement unlock dates** — partially fixed: `checkAll` now calls `findTriggerDate` for meta achievements, and meta types (`total_plays_gte`, `total_wins_gte`, `games_played_gte`, `win_streak`, `total_pts_gte`) are handled. Existing wrong dates need the one-time console repair (delete meta entries from `unlockedDates`, run `checkAll()` twice, `saveState()`).
3. ~~**Legend (5000pts) timing**~~ — FIXED (July 2026): `checkAll` now loops to a fixed point, so cascade unlocks (`total_pts_gte`, `all_achievements`, `plat_count_gte`) resolve in one scan.
4. ~~**`findTriggerDate`**~~ — FIXED (July 2026): all condition types now handled except `campaign_complete` (campaigns store no timestamps). Fallback changed from today to `null` — `checkAll` stamps today only for genuinely new unlocks. Settings has a "Recompute Unlock Dates" button (`recomputeUnlockDates()`) that rewrites dates for all unlocked achievements from play history; use after imports, ID changes, or audits.
5. **Backup round-trip** — FIXED (July 2026): `campaigns` was missing from export/import; campaign progress was silently lost on restore. Old backups (without campaigns) import cleanly but restore empty campaigns.
6. ~~**Hardcoded `dorfromantik` exclusion**~~ — FIXED (July 2026): replaced with `excludeFromAllGames: true` config flag (set on dorfromantik). evalCondition, getProgress, and getProgressPct all respect it; `all_games_in_month` evalCondition previously counted excluded games in its denominator and now doesn't.

---

*Keep this file updated when adding new condition types, stat types, or game config fields.*
