// ── nextstationtokyo ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
{
  id:       'nextstationtokyo',
  name:     'Next Station: Tokyo',
  icon:     '🗼',
  genre:    'Roll & Write · Network Building',
  color:    '#006747',
  bgColor:  '#f0fff8',
  dimColor: '#60b090',

  logFields: [
    { id: 'win',          label: 'Win?',              type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
    { id: 'score',        label: 'Total Score',       type: 'number', min: 0, max: 250, default: 110 },
    { id: 'line1',        label: 'Line 1',            type: 'number', min: 0, max: 50,  default: 0 },
    { id: 'line2',        label: 'Line 2',            type: 'number', min: 0, max: 50,  default: 0 },
    { id: 'line3',        label: 'Line 3',            type: 'number', min: 0, max: 50,  default: 0 },
    { id: 'line4',        label: 'Line 4',            type: 'number', min: 0, max: 50,  default: 0 },
    { id: 'touristSites', label: 'Tourist Stamps',    type: 'number', min: 0, max: 30,  default: 0 },
    { id: 'greenLoop',    label: 'Green Loop (−)',    type: 'number', min: 0, max: 20,  default: 0 },
    { id: 'crossings3',   label: '3-Line Interchanges',type: 'number', min: 0, max: 20, default: 0 },
    { id: 'crossings4',   label: '4-Line Interchanges',type: 'number', min: 0, max: 20, default: 0 },
    { id: 'crossings5',   label: '5-Line Interchanges',type: 'number', min: 0, max: 10, default: 0 },
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
    { label: 'Tourist Stamps',     type: 'best_win', field: 'touristSites' },
    { label: '3-Line Interchanges',type: 'best_win', field: 'crossings3' },
    { label: '4-Line Interchanges',type: 'best_win', field: 'crossings4' },
    { label: '5-Line Interchanges',type: 'best_win', field: 'crossings5' },
  ],

  achievements: [
    { id: 'nst_first',    icon: '🌟', tier: 'bronze', pts: 10, name: 'First Departure',
      desc: 'Play your first game of Next Station: Tokyo',
      check: { type: 'min_plays', count: 1 } },

    // ── Score milestones ──
    { id: 'nst_100',      icon: '🚉', tier: 'bronze', pts: 10, name: 'On the Line',
      desc: 'Score 100+ points',
      check: { type: 'field_gte', field: 'score', value: 100 } },
    { id: 'nst_120',      icon: '🚊', tier: 'silver', pts: 20, name: 'Express Service',
      desc: 'Score 120+ points',
      check: { type: 'field_gte', field: 'score', value: 120 } },
    { id: 'nst_140',      icon: '🚄', tier: 'gold',   pts: 35, name: 'Shinkansen',
      desc: 'Score 140+ points',
      check: { type: 'field_gte', field: 'score', value: 140 } },
    { id: 'nst_160',      icon: '👑', tier: 'gold',   pts: 50, name: 'Tokyo Master',
      desc: 'Score 160+ points',
      check: { type: 'field_gte', field: 'score', value: 160 } },

    // ── Line achievements ──
    { id: 'nst_line35',   icon: '📍', tier: 'silver', pts: 20, name: 'Strong Line',
      desc: 'Score 35+ on a single line in one game',
      check: { type: 'any_field_max_gte', fields: ['line1','line2','line3','line4'], value: 35 } },

    // ── Interchange achievements ──
    { id: 'nst_4line',    icon: '🔄', tier: 'silver', pts: 20, name: 'Major Junction',
      desc: 'Achieve a 4-line interchange',
      check: { type: 'field_gte', field: 'crossings4', value: 1 } },
    { id: 'nst_5line',    icon: '⭐', tier: 'gold',   pts: 40, name: 'Grand Central',
      desc: 'Achieve a 5-line interchange',
      check: { type: 'field_gte', field: 'crossings5', value: 1 } },

    // ── Tourist ──
    { id: 'nst_tourist',  icon: '📸', tier: 'silver', pts: 20, name: 'Tourist Trap',
      desc: 'Score 20+ tourist stamps in one game',
      check: { type: 'field_gte', field: 'touristSites', value: 20 } },

    // ── Plays ──
    { id: 'nst_5plays',   icon: '🎫', tier: 'bronze', pts: 10, name: 'Regular Commuter',
      desc: 'Play 5 games',
      check: { type: 'min_plays', count: 5 } },

    // ── Platinum ──
    { id: 'nst_plat',     icon: '💎', tier: 'plat',   pts: 100, name: 'Next Station: Tokyo — Complete',
      desc: 'Unlock all other Next Station: Tokyo achievements',
      check: { type: 'all_achievements', ids: [
        'nst_first','nst_100','nst_120','nst_140','nst_160',
        'nst_line35','nst_4line','nst_5line','nst_tourist','nst_5plays'
      ]} },
  ],
}
);
