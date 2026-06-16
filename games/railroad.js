// ── railroad ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
// ── Railroad Ink ──────────────────────────────────────────────
  {
    id: 'railroad', name: 'Railroad Ink', icon: '🚂', genre: 'Roll & Write · Network Building',
    color: '#c04020', bgColor: '#fff4f0', dimColor: '#e09070',
    logFields: [
      { id: 'win',         label: 'Win?',              type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
      { id: 'score',       label: 'Final Score',        type: 'number', min: -20, max: 60, default: 20 },
      { id: 'edition',     label: 'Edition',            type: 'select', options: ['Deep Blue','Lush Green','Shining Yellow','Blazing Red','Other'] },
      { id: 'exits',       label: 'Exits Connected',    type: 'number', min: 0, max: 12, default: 4 },
      { id: 'longest',     label: 'Longest Route',      type: 'number', min: 0, max: 30, default: 8 },
      { id: 'centre',      label: 'Centre Squares',     type: 'number', min: 0, max: 4, default: 2 },
      { id: 'errors',      label: 'Errors',             type: 'number', min: 0, max: 10, default: 0 },
    ],
    topScoresTagField: 'edition',
    topScoresTitle: 'Top 10 Scores',

    customStatsTitle: 'Edition Breakdown',
    customStats: [
      { label: 'Deep Blue',      type: 'ratio', field: 'edition', value: 'Deep Blue' },
      { label: 'Lush Green',     type: 'ratio', field: 'edition', value: 'Lush Green' },
      { label: 'Shining Yellow', type: 'ratio', field: 'edition', value: 'Shining Yellow' },
      { label: 'Blazing Red',    type: 'ratio', field: 'edition', value: 'Blazing Red' },
    ],

    achievements: [
      { id: 'ri_first',   icon: '🌟', tier: 'bronze', pts: 10,  name: 'First Network',
        desc: 'Play your first game',
        check: { type: 'min_plays', count: 1 } },
      { id: 'ri_score25', icon: '🛤️', tier: 'bronze', pts: 10,  name: 'Connected',
        desc: 'Score 25+ points',
        check: { type: 'field_gte', field: 'score', value: 25 } },
      { id: 'ri_score35', icon: '🏅', tier: 'silver', pts: 20,  name: 'Efficient Rails',
        desc: 'Score 35+ points',
        check: { type: 'field_gte', field: 'score', value: 35 } },
      { id: 'ri_score45', icon: '🚂', tier: 'gold',   pts: 35,  name: 'Rail Tycoon',
        desc: 'Score 45+ points',
        check: { type: 'field_gte', field: 'score', value: 45 } },
      { id: 'ri_noerror', icon: '✅', tier: 'silver', pts: 20,  name: 'Perfect Network',
        desc: 'Complete a game with zero errors',
        check: { type: 'field_eq', field: 'errors', value: 0 } },
      { id: 'ri_allexit', icon: '🔌', tier: 'gold',   pts: 40,  name: 'All Connected',
        desc: 'Connect all 12 exits in one game',
        check: { type: 'field_gte', field: 'exits', value: 12 } },
      { id: 'ri_centre4', icon: '⬛', tier: 'gold',   pts: 30,  name: 'Central Hub',
        desc: 'Fill all 4 centre squares',
        check: { type: 'field_gte', field: 'centre', value: 4 } },
      { id: 'ri_editions',icon: '🎨', tier: 'gold',   pts: 35,  name: 'Collector',
        desc: 'Score 25+ in 3 different editions',
        check: { type: 'unique_win_values', field: 'edition', count: 3 } },
      { id: 'ri_10plays', icon: '🎮', tier: 'silver', pts: 20,  name: 'Regular Rider',
        desc: 'Play 10 games',
        check: { type: 'min_plays', count: 10 } },
      { id: 'ri_plat',    icon: '💎', tier: 'plat',   pts: 100, name: 'Railroad Baron',
        desc: 'Unlock all other Railroad Ink achievements',
        check: { type: 'all_achievements', ids: ['ri_first','ri_score25','ri_score35','ri_score45','ri_noerror','ri_allexit','ri_centre4','ri_editions','ri_10plays'] } },
    ]
  }

  // ── ADD YOUR NEXT GAME HERE ───────────────────────────────────
  // Copy a block above, change the id/name/fields/achievements.
  // The app will automatically add a tab and page for it.

);
