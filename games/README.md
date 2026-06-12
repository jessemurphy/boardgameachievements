# Games Directory

Each file in this folder defines one game for the Solo Achievement Tracker.

## Adding a New Game

1. Copy `TEMPLATE.js` and rename it to `yourgameid.js`
2. Fill in the game definition (or use the [Generator](../generator/))
3. Add a script tag to `index.html`:
   ```html
   <script src="games/yourgameid.js"></script>
   ```
4. Add a defaults case to the switch statement in `index.html`:
   ```js
   case 'yourgameid': {
     return { ...base, myToggle: false, myScore: 0 };
   }
   ```

## Game Files

| File | Game |
|------|------|
| cascadia.js | Cascadia |
| spiritisland.js | Spirit Island |
| clever.js | Ganz Schön Clever |
| skyteam.js | Sky Team |
| sts.js | Slay the Spire: TBG |
| dorfromantik.js | Dorfromantik |
| friday.js | Friday |
| warpsedge.js | Warp's Edge |
| underfallingskies.js | Under Falling Skies |
| turingmachine.js | Turing Machine |
| circlewagons.js | Circle the Wagons |
| palmisland.js | Palm Island |
| planetx.js | The Search for Planet X |
| hadrians.js | Hadrian's Wall |
| onedeck.js | One Deck Dungeon |
| sprawlopolis.js | Sprawlopolis |
| orchard.js | Orchard |
| frosthaven.js | Frosthaven |
| planetunknown.js | Planet Unknown |
| cartographers.js | Cartographers |
| railroad.js | Railroad Ink |
| dragonsdown.js | Dragons Down (test game) |
| meta.js | Cross-game meta achievements |
| TEMPLATE.js | Template for new games |

## Tools

- **[Generator](../generator/)** — web form that generates game config code
- **TEMPLATE.js** — heavily commented template with all condition types documented
