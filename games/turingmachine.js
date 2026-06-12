// ── turingmachine ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
// ── Turing Machine ───────────────────────────────────────────
  {
    id:     'turing',
    name:   'Turing Machine',
    icon:   '🖥️',
    genre:  'Deduction · Logic Puzzle',
    color:  '#7a2ae0',
    bgColor:'#f6f0ff',
    dimColor:'#b080f0',

    logFields: [
      { id: 'win', label: 'Win?', type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
      { id: 'difficulty', label: 'Difficulty',          type: 'select', options: ['Easy','Normal','Hard','Extreme'] },
      { id: 'rounds',     label: 'Rounds to Solve',     type: 'number', min: 1, max: 20, default: 4 },
      { id: 'queries',    label: 'Total Queries Used',  type: 'number', min: 1, max: 30, default: 8 },

    ],

    achievements: [
      { id: 't_first',     icon: '🌟', tier: 'bronze', pts: 10,  name: 'First Decryption',   desc: 'Solve your first puzzle',
        check: { type: 'min_wins', count: 1 } },
      { id: 't_fast',      icon: '⚡', tier: 'gold',   pts: 60,  name: 'Speed Compiler',     desc: 'Solve a puzzle in 1 round',
        check: { type: 'win_field_lte', field: 'rounds', value: 1 } },
      { id: 't_efficient', icon: '🧠', tier: 'gold',   pts: 50,  name: 'Minimal Queries',    desc: 'Solve using 3 or fewer total queries',
        check: { type: 'win_field_lte', field: 'queries', value: 3 } },
      { id: 't_extreme',   icon: '🔬', tier: 'gold',   pts: 40,  name: 'Extreme Logician',   desc: 'Solve an Extreme difficulty puzzle',
        check: { type: 'win_with_field', field: 'difficulty', value: 'Extreme' } },

      { id: 't_10wins',    icon: '🏆', tier: 'silver', pts: 25,  name: 'Code Breaker',       desc: 'Solve 10 puzzles',
        check: { type: 'min_wins', count: 10 } },
      { id: 't_3hard',    icon: '🔬', tier: 'gold',   pts: 40,  name: 'Hard Habit',
        desc: 'Win 3 games on Hard or Extreme difficulty',
        check: { type: 'count_wins_with_field_values', field: 'difficulty', values: ['Hard','Extreme'], count: 3 } },
      { id: 't_5wins',    icon: '🏆', tier: 'silver', pts: 20,  name: 'Regular Analyst',
        desc: 'Win 5 games',
        check: { type: 'min_wins', count: 5 } },
      { id: 't_round2',   icon: '⚡', tier: 'gold',   pts: 45,  name: 'Two and Done',
        desc: 'Solve a puzzle in exactly 2 rounds',
        check: { type: 'win_field_lte', field: 'rounds', value: 2 } },
      { id: 't_10plays',   icon: '🎮', tier: 'silver', pts: 20,  name: 'Dedicated Analyst',  desc: 'Play 10 games total',
        check: { type: 'min_plays', count: 10 } },
      { id: 't_plat',      icon: '💎', tier: 'plat',   pts: 100, name: 'The Turing Complete', desc: 'Unlock all other Turing Machine achievements',
        check: { type: 'all_achievements', ids: ['t_first','t_fast','t_efficient','t_extreme','t_10wins','t_10plays','t_3hard','t_5wins','t_round2'] } },
    ]
  }
);
