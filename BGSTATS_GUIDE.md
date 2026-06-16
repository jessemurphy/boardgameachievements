# BGStats Formatting Guide

Reference for how to enter plays in BGStats so they import cleanly into the
achievement tracker. Two fields matter most: the **Board/Scenario** field
(often used for scenario/difficulty/dungeon/scoring cards) and the **Role**
field (often used for character/spirit/ship). A few games also read
`[key=value]` tags out of the **Comments** field.

General rule for comment tags: `[key=value]` records a value, `[key=?]` means
"I tracked this but don't know the value" (counts as complete without a
number), and omitting the tag entirely means "not tracked."

---

## Games A–Z

### Hadrian's Wall
- **Board/Scenario field:** difficulty, optionally with the fort — `Easy`, `Medium`, or `Hard`, optionally followed by `／Fort N: Name`, e.g. `Medium／Fort 3: Condercum`

**Comment tags:**
| Tag | Meaning |
|---|---|
| `[fort=N]` | Fort number, if not already included in the board field |

### Jaws of the Lion
- **Board/Scenario field:** `Scenario N`, where N is 1–25, e.g. `Scenario 7`
- **Role field:** the character(s) played that session, separated by `／` or `/`, e.g. `Hatchet／Red Guard`

### Next Station: London / Paris / Tokyo
- No special board/role formatting needed — just fill in the BGStats scoresheet during play (Line 1–4, Tourist Stamps/Sites, interchange crossings, and for Tokyo, Green Loop) and all the score breakdown panels populate automatically

### One Deck Dungeon
- **Board/Scenario field:** the dungeon name, e.g. `Dragon's Cave`, `Hydra's Reef`, `Yeti's Peak`, `Dragonshard Mines`
- **Role field:** the character(s) played — for a two-character run, separate names with `/`, e.g. `Archer/Mage`

### Planet Unknown
- **Role field:** `Corporation／Planet` or `Planet／Corporation` — order doesn't matter, both get parsed out
- In 2-player games, the "target/opponent score" panel is filled in automatically from the other player's score — no extra tag needed

**Comment tags:**
| Tag | Meaning |
|---|---|
| `[meteorites=0]` | Flags a no-meteorites game |

### Railroad Ink (any edition)
- No special board/role formatting needed — fill in the BGStats scoresheet (Networks, Longest Highway, Longest Railway, Central Spaces, Errors) and the edition is inferred automatically from which BGG game entry you logged the play against
- Deep Blue, Lush Green, Shining Yellow, and Blazing Red are separate BGG entries that all roll up into one tracker game — make sure you pick the correct edition's entry in BGStats when logging so the edition tag comes through right

### Railroad Ink Challenge: Solo Board
- Tracked as its own separate game in the tracker (different scoring and special structures from the base editions above)
- Currently win/score only in the tracker — no scoresheet import yet, so just enter your final score directly

### Search for Planet X
- **Board/Scenario field:** the difficulty mode — `Standard` or `Expert`

### Sky Team
- **Board/Scenario field:** the airport code with its difficulty color, e.g. `YUL (Green)`, `KEF (Black)`
- **Role field:** `Pilot`, `Copilot`, or `Solo`

### Slay the Spire: The Board Game
- **Board/Scenario field:** the act reached, optionally with the boss fought, e.g. `Act I`, `Act II: Hexaghost`, `Act III: The Awakened One`
- **Role field:** the character played — `Ironclad`, `Silent`, `Defect`, or `Watcher`
- Player count is pulled automatically from how many players are listed on the play

**Comment tags:**
| Tag | Meaning |
|---|---|
| `[decksize=N]` | Final deck size |
| `[relics=N]` | Number of relics held |
| `[hpfull=1]` | All players were at full HP when the boss was defeated |
| `[norares=1]` | No uncommons or rares ended up in the deck |
| `[norelics=1]` | No relics or boss relics were collected |
| `[daily=1]` | This was a Daily Climb run |

### Spirit Island
- **Role field:** the spirit name, e.g. `River Surges in Sunlight` — for a two-spirit game, separate with `/` or `,`
- **Board/Scenario field:** the adversary name if one was used, or leave blank/use `Blight Card` for a game with no adversary

### Sprawlopolis
- **Board/Scenario field:** the three scoring cards drawn, separated by `／`, each one prefixed with its card number, e.g. `13 Park Hopping／14 Looping Lanes／16 Morning Commute`
- This is the same field used for "scenario" in other games — just enter the three card numbers and names here and the tracker reads each one out individually for the per-card win-rate panel

### Vantage
- **Board/Scenario field:** the mission number or name
- **Role field:** the character played

### Warp's Edge
- **Board/Scenario field:** the mothership/boss name — `The Dread`, `The Hydra`, `The Duo`, `The Array`, or `The Revenant`
- **Role field:** the starfighter played — `Hermes`, `Achilles`, `Titan`, or `Artemis`

### Welcome to the Moon
- **Board/Scenario field:** the scenario, e.g. `#8: The Battle` — extra spaces and a "Campaign" prefix/suffix in the name are both handled automatically
- **Role field:** the automata's name, if you played against one

---

*This file is a living reference — update it whenever a game's import logic changes.*
