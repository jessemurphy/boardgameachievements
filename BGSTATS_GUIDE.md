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
- **Comment tags:** `[decksize=N]`, `[relics=N]`

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

## Search for Planet X
- **Board:** `Standard` or `Expert`

---

*This file is a living reference — update it whenever a game's import logic changes.*
