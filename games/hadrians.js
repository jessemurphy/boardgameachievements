// ── hadrians ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
// ── Hadrian's Wall ────────────────────────────────────────────
  {
    id: 'hadrians', name: "Hadrian's Wall", icon: '🧱', genre: 'Roll & Write · Solo Campaign',
    color: '#6a4a2a', bgColor: '#fff8f0', dimColor: '#c09060',
    personalBestField: 'difficulty',
    logFields: [
      { id: 'win',        label: 'Win?',          type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
      { id: 'difficulty', label: 'Difficulty',    type: 'select', options: ['Easy','Medium','Hard'] },
      { id: 'fort',       label: 'Fort',          type: 'select', options: ['Any','Fort 1: Segedunum','Fort 2: Pons Aelius','Fort 3: Condercum','Fort 4: Vindolanda','Fort 5: Aesica','Fort 6: Petriana'] },
      { id: 'score',      label: 'Final Score',   type: 'number', min: -50, max: 120, default: 60 },
      { id: 'renown',     label: 'Renown',        type: 'number', min: 0, max: 40, default: 0 },
      { id: 'piety',      label: 'Piety',         type: 'number', min: 0, max: 20, default: 0 },
      { id: 'valour',     label: 'Valour',        type: 'number', min: 0, max: 30, default: 0 },
      { id: 'discipline', label: 'Discipline',    type: 'number', min: 0, max: 30, default: 0 },
      { id: 'pathcards',  label: 'Path Cards',    type: 'number', min: 0, max: 20, default: 0 },
      { id: 'disdain',    label: 'Disdain (−)',   type: 'number', min: 0, max: 30, default: 0 },
    ],
    achievements: [
      { id: 'hw_first',   icon: '🌟', tier: 'bronze', pts: 10, name: 'First Watch',
        desc: 'Win your first game',
        check: { type: 'min_wins', count: 1 } },
      { id: 'hw_score70', icon: '🏅', tier: 'bronze', pts: 10, name: 'Solid Defense',
        desc: 'Score 70+ points',
        check: { type: 'field_gte', field: 'score', value: 70 } },
      { id: 'hw_score80', icon: '🛡️', tier: 'silver', pts: 20, name: 'Fortified',
        desc: 'Score 80+ points',
        check: { type: 'field_gte', field: 'score', value: 80 } },
      { id: 'hw_score90', icon: '⚔️',  tier: 'gold',   pts: 35, name: 'Impenetrable',
        desc: 'Score 90+ points',
        check: { type: 'field_gte', field: 'score', value: 90 } },
      { id: 'hw_hard',    icon: '🪖', tier: 'gold',   pts: 40, name: 'Hard Campaign',
        desc: 'Win on Hard difficulty',
        check: { type: 'win_with_field', field: 'difficulty', value: 'Hard' } },
      { id: 'hw_allforts',icon: '🗺️', tier: 'gold',   pts: 50, name: 'Full Patrol',
        desc: 'Win with all 6 forts',
        check: { type: 'unique_win_values', field: 'fort', count: 6 } },
      { id: 'hw_10plays', icon: '🎮', tier: 'silver', pts: 20, name: 'Centurion',
        desc: 'Play 10 games',
        check: { type: 'min_plays', count: 10 } },
      // ── Category achievements ──
      { id: 'hw_renown20',    icon: '⭐', tier: 'silver', pts: 20, name: 'Renowned',
        desc: 'Score 20+ Renown in a game',
        check: { type: 'field_gte', field: 'renown', value: 20 } },
      { id: 'hw_nodisdain',   icon: '✅', tier: 'gold',   pts: 40, name: 'Flawless Garrison',
        desc: 'Win with 0 Disdain',
        check: { type: 'win_field_eq', field: 'disdain', value: 0 } },
      { id: 'hw_discipline20',icon: '🪖', tier: 'silver', pts: 20, name: 'Iron Discipline',
        desc: 'Score 20+ Discipline in a game',
        check: { type: 'field_gte', field: 'discipline', value: 20 } },
      { id: 'hw_allcamps',    icon: '🗺️', tier: 'gold',   pts: 50, name: 'Fort Commander',
        desc: 'Win at all 6 named forts',
        check: { type: 'win_all_values', field: 'fort', values: [
          'Fort 1: Segedunum','Fort 2: Pons Aelius','Fort 3: Condercum',
          'Fort 4: Vindolanda','Fort 5: Aesica','Fort 6: Petriana'
        ]} },
      { id: 'hw_plat',    icon: '💎', tier: 'plat',   pts: 100, name: "Hadrian's Champion",
        desc: "Unlock all other Hadrian's Wall achievements",
        check: { type: 'all_achievements', ids: ['hw_first','hw_score70','hw_score80','hw_score90','hw_hard','hw_allforts','hw_10plays'] } },
    ]
  }
);
