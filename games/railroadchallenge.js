// ── railroadchallenge ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
  {
    id: 'railroadchallenge', name: 'Railroad Ink Challenge', icon: '🚉', genre: 'Roll & Write · Network Building',
    color: '#5a3aa0', bgColor: '#f5f0ff', dimColor: '#a080d0',

    logFields: [
      { id: 'win',    label: 'Win?',         type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
      { id: 'score',  label: 'Final Score',  type: 'number', min: -20, max: 80, default: 25 },
    ],

    personalBestField: 'score',
    personalBestTitle: 'Best Score',

    achievements: [
      { id: 'rc_first',   icon: '🌟', tier: 'bronze', pts: 10, name: 'First Challenge',
        desc: 'Play your first game of Railroad Ink Challenge',
        check: { type: 'min_plays', count: 1 } },
      { id: 'rc_score30', icon: '🛤️', tier: 'bronze', pts: 10, name: 'Connected',
        desc: 'Score 30+ points',
        check: { type: 'field_gte', field: 'score', value: 30 } },
      { id: 'rc_score45', icon: '🚂', tier: 'silver', pts: 20, name: 'Network Engineer',
        desc: 'Score 45+ points',
        check: { type: 'field_gte', field: 'score', value: 45 } },
      { id: 'rc_5plays',  icon: '🎮', tier: 'silver', pts: 20, name: 'Regular Challenger',
        desc: 'Play 5 games',
        check: { type: 'min_plays', count: 5 } },
      { id: 'rc_plat',    icon: '💎', tier: 'plat',   pts: 60, name: 'Railroad Ink Challenge — Complete',
        desc: 'Unlock all other Railroad Ink Challenge achievements',
        check: { type: 'all_achievements', ids: ['rc_first','rc_score30','rc_score45','rc_5plays'] } },
    ],
  }
);
