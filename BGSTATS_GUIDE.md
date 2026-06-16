# BGStats Formatting Guide

Reference for how to enter plays in BGStats so they import cleanly into the
achievement tracker. Two fields matter most: **Board** (often used for
scenario/difficulty/dungeon) and **Role** (often used for character/spirit/ship).
A few games also read `[key=value]` tags out of the **Comments** field.

General rule for comment tags: `[key=value]` records a value, `[key=?]` means
"I tracked this but don't know the value" (counts as complete without a number),
and omitting the tag entirely means "not tracked."

---

## Hadrian's Wall
- **Board:** `Easy`, `Medium`, `Hard` — optionally append `／Fort N: Name`
  e.g. `Medium／Fort 3: Condercum`
- **Comment tags:** `[fort=N]` if not already in the board field

## Slay the Spire: The Board Game
- **Board:** `Act I`, `Act II: Hexaghost`, etc. — act reached, optionally with boss name
- **Role:** Character name — `Ironclad`, `Silent`, `Defect`, `Watcher`
- **Comment tags:** `[decksize=N]` `[relics=N]` `[hpfull=1]` (all players at full HP on boss kill) `[norares=1]` (no uncommons/rares in deck) `[norelics=1]` (no relics/boss relics) `[daily=1]` (Daily Climb run)

## Spirit Island
- **Role:** Spirit name, e.g. `River Surges in Sunlight`. Two spirits: separate with `/` or `,`
- **Board:** Adversary name, or omit/`Blight Card` for no adversary

## Sky Team
- **Board:** Airport code with color, e.g. `YUL (Green)`
- **Role:** `Pilot`, `Copilot`, or `Solo`

## Warp's Edge
- **Board:** Mothership/boss name — `The Dread`, `The Hydra`, `The Duo`, `The Array`, `The Revenant`
- **Role:** Starfighter — `Hermes`, `Achilles`, `Titan`, `Artemis`

## Jaws of the Lion
- **Board:** `Scenario N` (1–25)
- **Role:** Character(s), separated by `／` or `/` — e.g. `Hatchet／Red Guard`

## Vantage
- **Board:** Mission number/name
- **Role:** Character name

## Planet Unknown
- **Role:** `Corporation／Planet` or `Planet／Corporation` (order doesn't matter)
- **Comment tags:** `[meteorites=0]` to flag a no-meteorites game
- In 2-player games, "target/opponent score" is taken from the other player's score automatically (no extra tag needed)

## One Deck Dungeon
- **Board:** Dungeon name — `Dragon's Cave`, `Hydra's Reef`, etc.
- **Role:** Character(s) — separate two-character runs with `/`

## Welcome to the Moon
- **Board:** Scenario, e.g. `#8: The Battle` (extra spaces and "Campaign" prefix/suffix are handled)
- **Role:** Automata name if playing against one

## Next Station London / Paris / Tokyo
- Score components come entirely from the BGStats scoresheet — no special board/role formatting needed if you fill in the scoresheet during play

## Railroad Ink (any edition)
- Score components come from the BGStats scoresheet (Networks, Longest Highway, Longest Railway, Central Spaces, Errors)
- Edition is inferred from the BGG game entry you log against
- Deep Blue, Lush Green, Shining Yellow, and Blazing Red are different BGG entries that all roll up into one tracker game — make sure you're logging against the correct edition's entry in BGStats so the edition tag comes through right

## Railroad Ink Challenge: Solo Board
- Tracked as its own separate game (different scoring/structures from the base editions above)
- Currently win/score only — no scoresheet import yet

## Sprawlopolis
- **Board:** the three scoring cards drawn, separated by `／`, each prefixed with its card number, e.g. `13 Park Hopping／14 Looping Lanes／16 Morning Commute`
- The card numbers and names are read directly from this field — no special formatting needed beyond entering the scoring cards as the board/scenario

## Search for Planet X
- **Board:** `Standard` or `Expert`

---

*This file is a living reference — update it whenever a game's import logic changes.*
