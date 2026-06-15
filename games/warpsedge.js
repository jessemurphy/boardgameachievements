// ── warpsedge ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
// ── Warp's Edge ──────────────────────────────────────────────
  {
    id:     'warps',
    bggId:  296237,
    name:   "Warp's Edge",
    icon:   '🚀',
    genre:  'Bag-Building · Space Combat',
    color:  '#e05c2a',
    bgColor:'#fff4f0',
    dimColor:'#f0a080',

    logFields: [
      { id: 'win', label: 'Win?', type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
      { id: 'ship',       label: 'Starfighter',      type: 'select', options: ['Any / Unknown','Hermes','Achilles','Titan','Artemis'] },
      { id: 'mothership', label: 'Mothership',       type: 'select', options: ['Any / Unknown','The Dread','The Hydra','The Duo','The Array','The Revenant'] },
      { id: 'warpsUsed',  label: 'Warps Used',       type: 'number', min: 1, max: 6, default: 3 },
      { id: 'noLoss',     label: 'No Shields Lost',  type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
    ],

    customStatsTitle: 'Starfighter Stats',
    customStats: [
      { label: 'Hermes',   type: 'ratio', field: 'ship', value: 'Hermes' },
      { label: 'Achilles', type: 'ratio', field: 'ship', value: 'Achilles' },
      { label: 'Titan',    type: 'ratio', field: 'ship', value: 'Titan' },
      { label: 'Artemis',  type: 'ratio', field: 'ship', value: 'Artemis' },
    ],

    customStats2Title: 'Boss Stats',
    customStats2: [
      { label: 'The Dread',    type: 'ratio', field: 'mothership', value: 'The Dread' },
      { label: 'The Hydra',    type: 'ratio', field: 'mothership', value: 'The Hydra' },
      { label: 'The Duo',      type: 'ratio', field: 'mothership', value: 'The Duo' },
      { label: 'The Array',    type: 'ratio', field: 'mothership', value: 'The Array' },
      { label: 'The Revenant', type: 'ratio', field: 'mothership', value: 'The Revenant' },
    ],

    completenessFields: ['ship', 'mothership'],

    achievements: [
      { id: 'w_first_win',    icon: '🌟', tier: 'bronze', pts: 10,  name: 'First Contact',       desc: 'Win your first game',
        check: { type: 'min_wins', count: 1 } },
      { id: 'w_5wins',        icon: '✨', tier: 'silver', pts: 25,  name: 'Ace Pilot',           desc: 'Win 5 games',
        check: { type: 'min_wins', count: 5 } },
      { id: 'w_all_ships',    icon: '🛸', tier: 'gold',   pts: 40,  name: 'Fleet Commander',     desc: 'Win with all 4 starfighters',
        check: { type: 'win_all_values', field: 'ship', values: ['Hermes','Achilles','Titan','Artemis'] } },
      { id: 'w_all_mothers',  icon: '👾', tier: 'gold',   pts: 50,  name: 'Mothership Graveyard',desc: 'Defeat all 5 motherships',
        check: { type: 'win_all_values', field: 'mothership', values: ['The Dread','The Hydra','The Duo','The Array','The Revenant'] } },
      { id: 'w_warp1',        icon: '⚡', tier: 'gold',   pts: 60,  name: 'First Warp, No Mercy',desc: 'Win using only 1 warp',
        check: { type: 'win_field_lte', field: 'warpsUsed', value: 1 } },
      { id: 'w_no_shield',    icon: '🛡️', tier: 'gold',   pts: 50,  name: 'Untouchable',         desc: 'Win without losing any shields',
        check: { type: 'win_with_toggle', field: 'noLoss' } },
      { id: 'w_hard5',     icon: '🎯', tier: 'gold',   pts: 40,  name: 'Mothership Hunter',
        desc: 'Defeat 3 different motherships',
        check: { type: 'unique_win_values', field: 'mothership', count: 3 } },
      { id: 'w_3streak',   icon: '🔥', tier: 'silver', pts: 25,  name: 'Ace Streak',
        desc: 'Win 3 games in a row',
        check: { type: 'win_streak_game', count: 3 } },
      { id: 'w_warp2',     icon: '⚡', tier: 'silver', pts: 25,  name: 'Efficiency',
        desc: 'Win using only 2 warps or fewer',
        check: { type: 'win_field_lte', field: 'warpsUsed', value: 2 } },
      { id: 'w_10plays',      icon: '🎮', tier: 'silver', pts: 20,  name: 'Battle Hardened',     desc: 'Play 10 games total',
        check: { type: 'min_plays', count: 10 } },
      { id: 'w_plat',         icon: '💎', tier: 'plat',   pts: 100, name: "Taylor Minde, Legend", desc: "Unlock all other Warp's Edge achievements",
        check: { type: 'all_achievements', ids: ['w_first_win','w_5wins','w_all_ships','w_all_mothers','w_warp1','w_no_shield','w_10plays','w_3streak','w_warp2'] } },
    ]
  }
);
