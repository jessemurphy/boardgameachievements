// ── circlewagons ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
// ── Circle the Wagons ────────────────────────────────────────
  {
    id:     'wagons',
    name:   'Circle the Wagons',
    icon:   '🪵',
    genre:  'Card Drafting · Territory',
    color:  '#2aae6b',
    bgColor:'#f0fff8',
    dimColor:'#80d4aa',

    logFields: [
      { id: 'win', label: 'Win?', type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
      { id: 'score',      label: 'Final Score',         type: 'number', min: 0, max: 60, default: 20 },
      { id: 'objective',  label: 'Objective Card',      type: 'select', options: ['Unknown','1','2','3','4','5','6','7','8','9','10'] },
      { id: 'metObj',     label: 'Completed Objective', type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
    ],

    achievements: [
      { id: 'wg_first',   icon: '🌟', tier: 'bronze', pts: 10,  name: 'First Camp',        desc: 'Win your first game',
        check: { type: 'min_wins', count: 1 } },
      { id: 'wg_high',    icon: '🏅', tier: 'silver', pts: 30,  name: 'Master Settler',    desc: 'Score 40+ points in a single game',
        check: { type: 'field_gte', field: 'score', value: 40 } },
      { id: 'wg_perfect', icon: '🎯', tier: 'gold',   pts: 40,  name: 'Perfect Circle',    desc: 'Win while completing your objective',
        check: { type: 'win_with_toggle', field: 'metObj' } },
      { id: 'wg_5wins',   icon: '🪓', tier: 'silver', pts: 25,  name: 'Trail Boss',        desc: 'Win 5 games',
        check: { type: 'min_wins', count: 5 } },
      { id: 'wg_allobj',  icon: '📜', tier: 'gold',   pts: 50,  name: 'All Objectives',    desc: 'Win using 5 different objective cards',
        check: { type: 'unique_win_values', field: 'objective', count: 5 } },
      { id: 'wg_score30', icon: '🏕️', tier: 'bronze', pts: 10,  name: 'Solid Settlement',
        desc: 'Score 30+ points in any game',
        check: { type: 'field_gte', field: 'score', value: 30 } },
      { id: 'wg_score50', icon: '🌄', tier: 'gold',   pts: 35,  name: 'Thriving Frontier',
        desc: 'Score 50+ points in any game',
        check: { type: 'field_gte', field: 'score', value: 50 } },
      { id: 'wg_3streak', icon: '🔥', tier: 'silver', pts: 25,  name: 'Trail Streak',
        desc: 'Win 3 games in a row',
        check: { type: 'win_streak_game', count: 3 } },
      { id: 'wg_10wins',  icon: '🏆', tier: 'gold',   pts: 35,  name: 'Frontier Master',
        desc: 'Win 10 games',
        check: { type: 'min_wins', count: 10 } },
      { id: 'wg_10plays', icon: '🎮', tier: 'silver', pts: 20,  name: 'Wagon Master',      desc: 'Play 10 games total',
        check: { type: 'min_plays', count: 10 } },
      { id: 'wg_plat',    icon: '💎', tier: 'plat',   pts: 100, name: 'Pioneer',           desc: 'Unlock all other Circle the Wagons achievements',
        check: { type: 'all_achievements', ids: ['wg_first','wg_high','wg_perfect','wg_5wins','wg_allobj','wg_10plays','wg_score30','wg_score50','wg_3streak','wg_10wins'] } },
    ]
  }
);
