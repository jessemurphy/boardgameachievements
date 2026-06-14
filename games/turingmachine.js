// ── turingmachine ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
// ── Turing Machine ───────────────────────────────────────────
  {
    id:     'turing',
    bggId:  356123,
    name:   'Turing Machine',
    icon:   '🖥️',
    genre:  'Deduction · Logic Puzzle',
    color:  '#7a2ae0',
    bgColor:'#f6f0ff',
    dimColor:'#b080f0',

    logFields: [
      { id: 'win',        label: 'Win?',               type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
      { id: 'difficulty', label: 'Difficulty',          type: 'select', options: ['Easy','Normal','Hard','Extreme'] },
      { id: 'rounds',     label: 'Rounds to Solve',     type: 'number', min: 1, max: 10, default: 3 },
      { id: 'queries',    label: 'Total Queries Used',  type: 'number', min: 1, max: 20, default: 8 },
      { id: 'noMistake',  label: 'No Wrong Guesses?',   type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
    ],

    customStatsTitle: 'Difficulty Breakdown',
    customStats: [
      { label: 'Easy (wins / attempts)',    type: 'ratio', field: 'difficulty', value: 'Easy' },
      { label: 'Normal (wins / attempts)',  type: 'ratio', field: 'difficulty', value: 'Normal' },
      { label: 'Hard (wins / attempts)',    type: 'ratio', field: 'difficulty', value: 'Hard' },
      { label: 'Extreme (wins / attempts)', type: 'ratio', field: 'difficulty', value: 'Extreme' },
    ],

    achievements: [
      { id: 't_first',     icon: '🌟', tier: 'bronze', pts: 10,  name: 'First Decryption',
        desc: 'Solve your first puzzle',
        check: { type: 'min_wins', count: 1 } },

      // ── Rounds milestones ──
      { id: 't_round3',    icon: '⚡', tier: 'bronze', pts: 15,  name: 'Quick Thinker',
        desc: 'Solve a puzzle in 3 rounds or fewer',
        check: { type: 'win_field_lte', field: 'rounds', value: 3 } },
      { id: 't_round2',    icon: '⚡', tier: 'silver', pts: 30,  name: 'Two and Done',
        desc: 'Solve a puzzle in exactly 2 rounds',
        check: { type: 'win_field_lte', field: 'rounds', value: 2 } },

      // ── Query efficiency ──
      { id: 't_q6',        icon: '🧠', tier: 'bronze', pts: 15,  name: 'Efficient',
        desc: 'Solve using 6 or fewer queries',
        check: { type: 'win_field_lte', field: 'queries', value: 6 } },
      { id: 't_q4',        icon: '🧠', tier: 'silver', pts: 30,  name: 'Minimal Queries',
        desc: 'Solve using 4 or fewer queries',
        check: { type: 'win_field_lte', field: 'queries', value: 4 } },

      // ── No mistakes ──
      { id: 't_nomistake', icon: '✅', tier: 'silver', pts: 25,  name: 'Perfect Logic',
        desc: 'Solve a puzzle without any wrong guesses',
        check: { type: 'win_with_toggle', field: 'noMistake' } },

      // ── Difficulty ──
      { id: 't_hard',      icon: '🔬', tier: 'silver', pts: 20,  name: 'Hard Mode',
        desc: 'Solve a Hard difficulty puzzle',
        check: { type: 'win_with_field', field: 'difficulty', value: 'Hard' } },
      { id: 't_extreme',   icon: '🔬', tier: 'gold',   pts: 40,  name: 'Extreme Logician',
        desc: 'Solve an Extreme difficulty puzzle',
        check: { type: 'win_with_field', field: 'difficulty', value: 'Extreme' } },
      { id: 't_3hard',     icon: '🔬', tier: 'gold',   pts: 40,  name: 'Hard Habit',
        desc: 'Win 3 games on Hard or Extreme difficulty',
        check: { type: 'count_wins_with_field_values', field: 'difficulty', values: ['Hard','Extreme'], count: 3 } },

      // ── Elite combo ──
      { id: 't_elite',     icon: '👑', tier: 'gold',   pts: 60,  name: 'Master Analyst',
        desc: 'Solve Hard or Extreme in 2 rounds with 5 or fewer queries',
        check: { type: 'win_field_lte_and_field_eq', field: 'rounds', value: 2, field2: 'difficulty', value2: 'Hard' } },

      // ── Volume ──
      { id: 't_5wins',     icon: '🏆', tier: 'bronze', pts: 10,  name: 'Regular Analyst',
        desc: 'Win 5 puzzles',
        check: { type: 'min_wins', count: 5 } },
      { id: 't_10wins',    icon: '🏆', tier: 'silver', pts: 20,  name: 'Code Breaker',
        desc: 'Win 10 puzzles',
        check: { type: 'min_wins', count: 10 } },
      { id: 't_50wins',    icon: '🏆', tier: 'gold',   pts: 40,  name: 'Veteran Analyst',
        desc: 'Win 50 puzzles',
        check: { type: 'min_wins', count: 50 } },
      { id: 't_100wins',   icon: '🏆', tier: 'gold',   pts: 60,  name: 'Turing Legend',
        desc: 'Win 100 puzzles',
        check: { type: 'min_wins', count: 100 } },
      { id: 't_10plays',   icon: '🎮', tier: 'bronze', pts: 10,  name: 'Dedicated Analyst',
        desc: 'Play 10 games total',
        check: { type: 'min_plays', count: 10 } },

      // ── Platinum ──
      { id: 't_plat',      icon: '💎', tier: 'plat',   pts: 100, name: 'The Turing Complete',
        desc: 'Unlock all other Turing Machine achievements',
        check: { type: 'all_achievements', ids: [
          't_first','t_round3','t_round2','t_q6','t_q4',
          't_nomistake','t_hard','t_extreme','t_3hard','t_elite',
          't_5wins','t_10wins','t_50wins','t_100wins','t_10plays'
        ]} },
    ]
  }
);
