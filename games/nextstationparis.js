// ── nextstationparis ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
{
  id:       'nextstationparis',
  name:     'Next Station: Paris',
  icon:     '🗼',
  genre:    'Roll & Write · Network Building',
  bggId:    403116,
  color:    '#0055a4',
  bgColor:  '#f0f4ff',
  dimColor: '#6080d0',

  logFields: [
    { id: 'win',          label: 'Win?',            type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
    { id: 'score',        label: 'Total Score',     type: 'number', min: 0, max: 250, default: 130 },
    { id: 'line1',        label: 'Line 1',          type: 'number', min: 0, max: 50,  default: 0 },
    { id: 'line2',        label: 'Line 2',          type: 'number', min: 0, max: 50,  default: 0 },
    { id: 'line3',        label: 'Line 3',          type: 'number', min: 0, max: 50,  default: 0 },
    { id: 'line4',        label: 'Line 4',          type: 'number', min: 0, max: 50,  default: 0 },
    { id: 'touristSites', label: 'Tourist Sites',   type: 'number', min: 0, max: 10,  default: 0 },
    { id: 'crossings2',   label: '2-Line Crossings',type: 'number', min: 0, max: 30,  default: 0 },
    { id: 'crossings3',   label: '3-Line Crossings',type: 'number', min: 0, max: 20,  default: 0 },
    { id: 'crossings4',   label: '4-Line Crossings',type: 'number', min: 0, max: 15,  default: 0 },
  ],

  personalBestField: 'score',
  personalBestTitle: 'Best Winning Scores',

  completenessFields: ['line1'],

  customStatsTitle: 'Best Score Components',
  customStats: [
    { label: 'Line 1',             type: 'best_win', field: 'line1' },
    { label: 'Line 2',             type: 'best_win', field: 'line2' },
    { label: 'Line 3',             type: 'best_win', field: 'line3' },
    { label: 'Line 4',             type: 'best_win', field: 'line4' },
    { label: 'Tourist Sites',      type: 'best_win', field: 'touristSites' },
    { label: '2-Line Crossings',   type: 'best_win', field: 'crossings2' },
    { label: '3-Line Crossings',   type: 'best_win', field: 'crossings3' },
    { label: '4-Line Crossings',   type: 'best_win', field: 'crossings4' },
  ],

  achievements: [
    { id: 'nsp_first',     icon: '🌟', tier: 'bronze', pts: 10, name: 'Bonjour Paris',
      desc: 'Play your first game',
      check: { type: 'min_plays', count: 1 } },

    // ── Score milestones (calibrated to your data: avg 157, max 197) ──
    { id: 'nsp_130',       icon: '🚇', tier: 'bronze', pts: 10, name: 'Tourist',
      desc: 'Score 130+ points',
      check: { type: 'field_gte', field: 'score', value: 130 } },
    { id: 'nsp_155',       icon: '🚊', tier: 'silver', pts: 20, name: 'Parisian',
      desc: 'Score 155+ points',
      check: { type: 'field_gte', field: 'score', value: 155 } },
    { id: 'nsp_175',       icon: '🗼', tier: 'gold',   pts: 35, name: 'Métro Master',
      desc: 'Score 175+ points',
      check: { type: 'field_gte', field: 'score', value: 175 } },
    { id: 'nsp_195',       icon: '👑', tier: 'gold',   pts: 50, name: 'Haussmann',
      desc: 'Score 195+ points',
      check: { type: 'field_gte', field: 'score', value: 195 } },

    // ── Line achievements ──
    { id: 'nsp_line35',    icon: '📍', tier: 'silver', pts: 20, name: 'Strong Line',
      desc: 'Score 35+ on a single line in one game',
      check: { type: 'any_field_max_gte', fields: ['line1','line2','line3','line4'], value: 35 } },
    { id: 'nsp_balanced',  icon: '⚖️',  tier: 'gold',   pts: 35, name: 'Balanced Network',
      desc: 'Score 20+ on all 4 lines in one game',
      check: { type: 'all_fields_gte', fields: ['line1','line2','line3','line4'], value: 20 } },

    // ── Crossing achievements ──
    { id: 'nsp_cross4',    icon: '✚',  tier: 'gold',   pts: 40, name: 'Interchange Master',
      desc: 'Connect all 4 lines at a single crossing',
      check: { type: 'field_gte', field: 'crossings4', value: 1 } },
    { id: 'nsp_tourist',   icon: '📸', tier: 'silver', pts: 20, name: 'City of Light',
      desc: 'Visit 5+ tourist sites in one game',
      check: { type: 'field_gte', field: 'touristSites', value: 5 } },

    // ── Volume ──
    { id: 'nsp_10plays',   icon: '🎮', tier: 'bronze', pts: 10, name: 'Regular Commuter',
      desc: 'Play 10 games',
      check: { type: 'min_plays', count: 10 } },
    { id: 'nsp_5wins',     icon: '🏆', tier: 'silver', pts: 20, name: 'Transport Planner',
      desc: 'Win 5 games',
      check: { type: 'min_wins', count: 5 } },

    // ── Platinum ──
    { id: 'nsp_plat',      icon: '💎', tier: 'plat',   pts: 100, name: 'Paris Complete',
      desc: 'Unlock all other Next Station: Paris achievements',
      check: { type: 'all_achievements', ids: [
        'nsp_first','nsp_130','nsp_155','nsp_175','nsp_195',
        'nsp_line35','nsp_balanced','nsp_cross4','nsp_tourist',
        'nsp_10plays','nsp_5wins'
      ]} },
  ]
}
);
