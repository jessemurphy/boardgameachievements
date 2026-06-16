// ── nextstationlondon ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
{
  id:       'nextstationlondon',
  name:     'Next Station: London',
  icon:     '🚇',
  genre:    'Roll & Write · Network Building',
  bggId:    353545,
  color:    '#e3000b',
  bgColor:  '#fff0f0',
  dimColor: '#f07070',

  logFields: [
    { id: 'win',          label: 'Win?',            type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
    { id: 'score',        label: 'Total Score',     type: 'number', min: 0, max: 250, default: 120 },
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
  personalBestTitle: 'Best Score',

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
    { id: 'nsl_first',     icon: '🌟', tier: 'bronze', pts: 10, name: 'First Departure',
      desc: 'Play your first game',
      check: { type: 'min_plays', count: 1 } },

    // ── Score milestones ──
    { id: 'nsl_120',       icon: '🚉', tier: 'bronze', pts: 10, name: 'On Schedule',
      desc: 'Score 120+ points',
      check: { type: 'field_gte', field: 'score', value: 120 } },
    { id: 'nsl_140',       icon: '🚊', tier: 'silver', pts: 20, name: 'Express Service',
      desc: 'Score 140+ points',
      check: { type: 'field_gte', field: 'score', value: 140 } },
    { id: 'nsl_160',       icon: '🚄', tier: 'gold',   pts: 35, name: 'Tube Legend',
      desc: 'Score 160+ points',
      check: { type: 'field_gte', field: 'score', value: 160 } },
    { id: 'nsl_180',       icon: '👑', tier: 'gold',   pts: 50, name: 'Mind the Gap',
      desc: 'Score 180+ points',
      check: { type: 'field_gte', field: 'score', value: 180 } },

    // ── Line achievements ──
    { id: 'nsl_line35',    icon: '📍', tier: 'silver', pts: 20, name: 'Strong Line',
      desc: 'Score 35+ on a single line in one game',
      check: { type: 'any_field_max_gte', fields: ['line1','line2','line3','line4'], value: 35 } },
    { id: 'nsl_balanced',  icon: '⚖️',  tier: 'gold',   pts: 35, name: 'Balanced Network',
      desc: 'Score 20+ on all 4 lines in one game',
      check: { type: 'all_fields_gte', fields: ['line1','line2','line3','line4'], value: 20 } },

    // ── Crossing achievements ──
    { id: 'nsl_cross4',    icon: '✚',  tier: 'gold',   pts: 40, name: 'Interchange Master',
      desc: 'Connect all 4 lines at a single crossing',
      check: { type: 'field_gte', field: 'crossings4', value: 1 } },
    { id: 'nsl_tourist',   icon: '📸', tier: 'silver', pts: 20, name: 'Tourist Trap',
      desc: 'Visit 5+ tourist sites in one game',
      check: { type: 'field_gte', field: 'touristSites', value: 5 } },

    // ── Volume ──
    { id: 'nsl_10plays',   icon: '🎮', tier: 'bronze', pts: 10, name: 'Regular Commuter',
      desc: 'Play 10 games',
      check: { type: 'min_plays', count: 10 } },
    { id: 'nsl_5wins',     icon: '🏆', tier: 'silver', pts: 20, name: 'Transport Planner',
      desc: 'Win 5 games',
      check: { type: 'min_wins', count: 5 } },
    { id: 'nsl_25wins',    icon: '🏆', tier: 'gold',   pts: 40, name: 'Network Director',
      desc: 'Win 25 games',
      check: { type: 'min_wins', count: 25 } },

    // ── Platinum ──
    { id: 'nsl_plat',      icon: '💎', tier: 'plat',   pts: 100, name: 'London Underground Complete',
      desc: 'Unlock all other Next Station: London achievements',
      check: { type: 'all_achievements', ids: [
        'nsl_first','nsl_120','nsl_140','nsl_160','nsl_180',
        'nsl_line35','nsl_balanced','nsl_cross4','nsl_tourist',
        'nsl_10plays','nsl_5wins','nsl_25wins'
      ]} },
  ]
}
);
