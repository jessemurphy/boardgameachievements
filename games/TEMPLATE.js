// ═══════════════════════════════════════════════════════════════
// GAME TEMPLATE — Solo Achievement Tracker
// Copy this file, rename it to yourgameid.js, and fill it in.
// Then add <script src="games/yourgameid.js"></script> to index.html
// and add a case block to the defaults switch statement.
// ═══════════════════════════════════════════════════════════════

window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
{
  // ── Required ────────────────────────────────────────────────
  id:    'mygame',        // Unique ID. Lowercase, no spaces. Used as localStorage key.
  name:  'My Game',       // Display name
  icon:  '🎲',            // Emoji shown on game card
  bggId: 000000,          // BGG game ID (find it in the BGG URL for the game)
  color: '#3a8a4a',       // Accent color for the game card header

  // ── Optional ────────────────────────────────────────────────
  genre: 'Tile Laying · Solo',   // Shown as subtitle on game card
  bgColor:  '#f0faf2',           // Card background tint (light version of color)
  dimColor: '#90c89a',           // Dimmed accent (mid version of color)

  // personalBestField: 'score',
  // Shows "Personal Best: X" on the game card for a numeric field.
  // Set to the field id you want to track the all-time high for.

  // ── Score Titles (optional) ──────────────────────────────────
  // Named tiers displayed as a leaderboard on the game card.
  // Works like Ganz Schön Clever — shows current tier and next target.
  // List from HIGHEST to LOWEST. Requires a 'score' log field.
  //
  // scoreTitles: [
  //   { min: 280, title: "You're So Clever!" },
  //   { min: 260, title: 'What a Genius!' },
  //   { min: 230, title: 'Impressive!' },
  //   { min: 200, title: "Hat's Off To You" },
  //   { min: 180, title: 'Great Result!' },
  //   { min: 160, title: 'Pretty Good' },
  //   { min: 140, title: 'Not Bad...' },
  //   { min:   0, title: 'Try Harder!' },
  // ],

  // ── Log Fields ───────────────────────────────────────────────
  // These appear in the Log Play modal.
  // The 'win' toggle is ALWAYS required and must be first.
  logFields: [
    // REQUIRED — always include this first
    { id: 'win', label: 'Win?', type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },

    // number — numeric input with optional min/max/default
    { id: 'score', label: 'Score', type: 'number', min: 0, max: 150, default: 0 },

    // toggle — yes/no switch
    { id: 'usedBonus', label: 'Used bonus action?', type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },

    // select — dropdown list
    { id: 'difficulty', label: 'Difficulty', type: 'select', options: ['Easy', 'Normal', 'Hard'] },

    // text — free text (rarely needed)
    // { id: 'notes', label: 'Notes', type: 'text' },
  ],

  // ── Achievements ─────────────────────────────────────────────
  // Each achievement needs: id, icon, tier, pts, name, desc, check
  // Tiers: 'bronze' | 'silver' | 'gold' | 'plat'
  // Add official: true for achievements from the official rulebook.
  //
  // ID convention: use a short prefix + underscore + descriptor
  // e.g. for game id 'mygame': 'myg_first_win', 'myg_score50'
  //
  // ── CONDITION TYPE REFERENCE ────────────────────────────────
  //
  // COUNT
  //   { type: 'min_plays', count: 5 }
  //     → Total plays ≥ N
  //   { type: 'min_wins', count: 5 }
  //     → Total wins ≥ N
  //
  // FIELD — any play
  //   { type: 'field_gte', field: 'score', value: 80 }
  //     → Any play where field ≥ value
  //   { type: 'field_lte', field: 'rounds', value: 10 }
  //     → Any play where field ≤ value
  //   { type: 'field_eq', field: 'difficulty', value: 'Hard' }
  //     → Any play where field = value
  //
  // FIELD — wins only
  //   { type: 'win_field_gte', field: 'score', value: 80 }
  //     → Any WIN where field ≥ value
  //   { type: 'win_field_lte', field: 'rounds', value: 10 }
  //     → Any WIN where field ≤ value
  //   { type: 'win_field_eq', field: 'difficulty', value: 2 }
  //     → Any WIN where field = value (numeric)
  //   { type: 'win_with_field', field: 'difficulty', value: 'Hard' }
  //     → Any WIN where field = value (string)
  //
  // TOGGLE
  //   { type: 'win_with_toggle', field: 'usedBonus' }
  //     → Any WIN where toggle is true
  //   { type: 'win_toggle_false', field: 'usedBonus' }
  //     → Any WIN where toggle is false
  //   { type: 'toggle_false', field: 'usedBonus' }
  //     → Any play where toggle is false
  //
  // MULTI-FIELD
  //   { type: 'all_fields_gte', fields: ['scoreA','scoreB','scoreC'], value: 10 }
  //     → Any play where ALL listed fields ≥ value
  //   { type: 'n_fields_gte', fields: ['scoreA','scoreB','scoreC'], value: 10, count: 2 }
  //     → Any play where AT LEAST N of the listed fields ≥ value
  //   { type: 'any_field_max_gte', fields: ['scoreA','scoreB'], value: 20 }
  //     → Any play where ANY of the listed fields ≥ value
  //
  // VALUES LIST
  //   { type: 'win_all_values', field: 'scenario', values: ['London','Paris','Tokyo'] }
  //     → Won at least once with EACH value in the list
  //   { type: 'unique_win_values', field: 'character', count: 5 }
  //     → Won with N distinct values of field
  //
  // CUMULATIVE
  //   { type: 'cumulative_field_gte', field: 'score', value: 500 }
  //     → Sum of field across all wins ≥ value
  //
  // COMPOUND
  //   { type: 'win_field_gte_and_field_eq', field: 'score', value: 80, field2: 'difficulty', value2: 'Hard' }
  //     → Win where field ≥ value AND field2 = value2
  //   { type: 'win_field_lte_and_field_eq', field: 'rounds', value: 5, field2: 'difficulty', value2: 'Hard' }
  //     → Win where field ≤ value AND field2 = value2
  //   { type: 'win_with_toggle_and_field_eq', field: 'usedBonus', field2: 'difficulty', value2: 'Hard' }
  //     → Win where toggle is ON AND field2 = value2
  //   { type: 'win_two_fields', field: 'scoreA', value: 20, field2: 'scoreB', value2: 20 }
  //     → Win where field ≥ value AND field2 ≥ value2
  //
  // META (cross-game — use in meta.js only)
  //   { type: 'all_achievements', ids: ['myg_first_win', 'myg_score50'] }
  //     → All listed achievement IDs are unlocked
  //
  achievements: [
    { id: 'myg_first_win', icon: '🌟', tier: 'bronze', pts: 10,
      name: 'First Victory',
      desc: 'Win your first game',
      check: { type: 'min_wins', count: 1 } },

    { id: 'myg_score50', icon: '🎯', tier: 'silver', pts: 20,
      name: 'Sharp Shooter',
      desc: 'Score 50+ points in a win',
      check: { type: 'win_field_gte', field: 'score', value: 50 } },

    // Platinum — typically unlocks when all other achievements are done
    { id: 'myg_plat', icon: '💎', tier: 'plat', pts: 100,
      name: 'My Game Complete',
      desc: 'Unlock all other achievements',
      check: { type: 'all_achievements', ids: ['myg_first_win', 'myg_score50'] } },
  ]
}
);

// ═══════════════════════════════════════════════════════════════
// DEFAULTS SWITCH CASE — paste this into index.html
// Find the switch statement containing case 'cascadia': etc.
// ═══════════════════════════════════════════════════════════════
//
// case 'mygame': {
//   return { ...base, usedBonus: false, score: 0 };
// }
//
// Rules:
// - toggles default to false
// - numbers default to their 'default' value or 0
// - select and text fields don't need defaults
// ═══════════════════════════════════════════════════════════════
