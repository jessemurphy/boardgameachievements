# 🎲 Solo Board Game Achievement Tracker

A personal achievement tracker for solo board games — built as a single-file web app that works great as a PWA on iPhone.

## 👉 [Try it now](https://jessemurphy.github.io/boardgameachievements)

Add to your iPhone home screen: Safari → Share → Add to Home Screen

---

## Features

- Log plays with game-specific fields
- Tiered achievements — Bronze → Silver → Gold → Platinum
- Official achievements (from rulebooks) marked separately
- Personal bests tracked per game
- Score title leaderboards (Ganz Schön Clever, Dorfromantik)
- Play history with notes
- Global stats — win rate, streak, plays by month
- Import play history from BGStats
- Export/import your data for backup
- Works offline — all data stored locally on your device

## Games included

| Game | Achievements | BGStats Import |
|------|-------------|----------------|
| Cascadia | ✓ Official | ✓ |
| Spirit Island | ✓ | ✓ Full scoresheet |
| Slay the Spire: TBG | ✓ Official | ✓ |
| Ganz Schön Clever | ✓ | ✓ Per-color scores |
| Dorfromantik | ✓ | ✓ |
| The Search for Planet X | ✓ | ✓ Full scoresheet |
| Hadrian's Wall | ✓ Campaign (16 forts) | ✓ |
| Friday | ✓ | ✓ |
| Warp's Edge | ✓ | ✓ |
| Under Falling Skies | ✓ | ✓ |
| Turing Machine | ✓ | ✓ Rounds & queries |
| Sky Team | ✓ | ✓ |
| One Deck Dungeon | ✓ | ✓ |
| Sprawlopolis | ✓ | ✓ |
| Orchard | ✓ | ✓ |
| Frosthaven | ✓ | ✓ |
| Planet Unknown | ✓ | ✓ |
| Cartographers | ✓ | ✓ |
| Railroad Ink | ✓ | ✓ |
| Circle the Wagons | ✓ | ✓ |
| Palm Island | ✓ | ✓ |
| Next Station: London | ✓ | ✓ |
| Welcome to the Moon | ✓ Campaign (8 adventures) | ✓ |

## Tools

- **[Game Config Generator](https://jessemurphy.github.io/boardgameachievements/generator)** — build config files for new games
- **`games/TEMPLATE.js`** — heavily commented template with all condition types

## Adding a new game

1. Use the [generator](https://jessemurphy.github.io/boardgameachievements/generator) or copy `games/TEMPLATE.js`
2. Add `<script src="games/yourgame.js"></script>` to `index.html`
3. Add a defaults case to the switch statement in `index.html`

## Suggest a game

[Open an issue](https://github.com/jessemurphy/boardgameachievements/issues/new?template=suggest_game.md) to request a game be added.

## Support

If this saves you some spreadsheet time → [Buy me a coffee ☕](https://ko-fi.com/jessemurphy)

## License

MIT
