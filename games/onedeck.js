// ── onedeck ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
// ── One Deck Dungeon ──────────────────────────────────────────
  {
    id: 'onedeck', name: 'One Deck Dungeon', icon: '⚔️', genre: 'Solo Roguelike · Dungeon Crawler',
    color: '#8a2020', bgColor: '#fff4f4', dimColor: '#d08080',
    logFields: [
      { id: 'win',        label: 'Win?',          type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
      { id: 'character',  label: 'Character',     type: 'select', options: ['Archer','Mage','Warrior','Paladin','Rogue','Ranger'] },
      { id: 'character2', label: 'Character 2',   type: 'select', options: ['None','Archer','Mage','Warrior','Paladin','Rogue','Ranger'] },
      { id: 'dungeon',    label: 'Dungeon',        type: 'select', options: ["Dragon's Cave","Hydra's Reef","Yeti's Peak","Dragonshard Mines"] },
      { id: 'difficulty', label: 'Difficulty',    type: 'select', options: ['Novice','Standard','Veteran','Heroic'] },
    ],
    achievements: [
      { id: 'od_first',   icon: '🌟', tier: 'bronze', pts: 10, name: 'First Delve',
        desc: 'Win your first dungeon',
        check: { type: 'min_wins', count: 1 } },
      { id: 'od_dragon',  icon: '🐉', tier: 'silver', pts: 20, name: 'Dragonslayer',
        desc: "Win in the Dragon's Cave",
        check: { type: 'win_with_field', field: 'dungeon', value: "Dragon's Cave" } },
      { id: 'od_hydra',   icon: '🐍', tier: 'silver', pts: 20, name: 'Hydra Hunter',
        desc: "Win in the Hydra's Reef",
        check: { type: 'win_with_field', field: 'dungeon', value: "Hydra's Reef" } },
      { id: 'od_yeti',    icon: '🏔️', tier: 'silver', pts: 20, name: 'Yeti Slayer',
        desc: "Win at the Yeti's Peak",
        check: { type: 'win_with_field', field: 'dungeon', value: "Yeti's Peak" } },
      { id: 'od_mines',   icon: '⛏️', tier: 'silver', pts: 20, name: 'Mine Clearer',
        desc: 'Win in the Dragonshard Mines',
        check: { type: 'win_with_field', field: 'dungeon', value: 'Dragonshard Mines' } },
      { id: 'od_alldung', icon: '🗝️', tier: 'gold',   pts: 40, name: 'All Dungeons Cleared',
        desc: 'Win in all 4 dungeons',
        check: { type: 'all_achievements', ids: ['od_dragon','od_hydra','od_yeti','od_mines'] } },
      { id: 'od_heroic',  icon: '💀', tier: 'gold',   pts: 50, name: 'Heroic',
        desc: 'Win on Heroic difficulty',
        check: { type: 'win_with_field', field: 'difficulty', value: 'Heroic' } },
      { id: 'od_allchars',icon: '👥', tier: 'gold',   pts: 40, name: 'Full Roster',
        desc: 'Win with all 4 base characters',
        check: { type: 'win_all_values_multifield', fields: ['character','character2'],
          values: ['Archer','Mage','Warrior','Paladin'] } },
      { id: 'od_10plays', icon: '🎮', tier: 'silver', pts: 20, name: 'Dungeon Regular',
        desc: 'Play 10 games',
        check: { type: 'min_plays', count: 10 } },
      { id: 'od_plat',    icon: '💎', tier: 'plat',   pts: 100, name: 'Dungeon Master',
        desc: 'Unlock all other One Deck Dungeon achievements',
        check: { type: 'all_achievements', ids: ['od_first','od_dragon','od_hydra','od_yeti','od_mines','od_alldung','od_heroic','od_allchars','od_10plays'] } },
    ]
  }
);
