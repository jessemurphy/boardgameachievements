// ── palmisland ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
// ── Palm Island ──────────────────────────────────────────────
  {
    id:     'palm',
    bggId:  239464,
    name:   'Palm Island',
    icon:   '🌴',
    genre:  'Hand Management · Resource Building',
    color:  '#e0a02a',
    bgColor:'#fffbf0',
    dimColor:'#f0cc80',

    logFields: [
      { id: 'win', label: 'Win?', type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
      { id: 'score',    label: 'Final Score',           type: 'number', min: 0, max: 30, default: 8 },
      { id: 'round2',   label: 'Played Round 2',        type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'noWaste',  label: 'Zero Resources Wasted', type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
    ],

    achievements: [
      { id: 'p_first',     icon: '🌟', tier: 'bronze', pts: 10,  name: 'Castaway',              desc: 'Win your first game',
        check: { type: 'min_wins', count: 1 } },
      { id: 'p_high',      icon: '🏝️', tier: 'silver', pts: 30,  name: 'Island King',           desc: 'Score 20+ points',
        check: { type: 'field_gte', field: 'score', value: 20 } },
      { id: 'p_both',      icon: '🌊', tier: 'gold',   pts: 40,  name: 'Two-Round Champion',    desc: 'Win a two-round game',
        check: { type: 'win_with_toggle', field: 'round2' } },
      { id: 'p_efficient', icon: '♻️', tier: 'gold',   pts: 50,  name: 'Zero Waste',            desc: 'Win without wasting any resources',
        check: { type: 'win_with_toggle', field: 'noWaste' } },
      { id: 'p_5wins',     icon: '🐚', tier: 'silver', pts: 25,  name: 'Island Veteran',        desc: 'Win 5 games',
        check: { type: 'min_wins', count: 5 } },
      { id: 'p_score15',  icon: '🌺', tier: 'silver', pts: 20,  name: 'Prosperous Island',
        desc: 'Score 15+ points',
        check: { type: 'win_field_gte', field: 'score', value: 15 } },
      { id: 'p_score25',  icon: '🌴', tier: 'gold',   pts: 35,  name: 'Island Paradise',
        desc: 'Score 25+ points',
        check: { type: 'win_field_gte', field: 'score', value: 25 } },
      { id: 'p_3streak',  icon: '🔥', tier: 'silver', pts: 25,  name: 'Island Streak',
        desc: 'Win 3 games in a row',
        check: { type: 'win_streak_game', count: 3 } },
      { id: 'p_10wins',   icon: '🏆', tier: 'gold',   pts: 35,  name: 'Island Champion',
        desc: 'Win 10 games',
        check: { type: 'min_wins', count: 10 } },
      { id: 'p_10plays',   icon: '🎮', tier: 'silver', pts: 20,  name: 'Committed Islander',    desc: 'Play 10 games total',
        check: { type: 'min_plays', count: 10 } },
      { id: 'p_plat',      icon: '💎', tier: 'plat',   pts: 100, name: 'The Last Islander',     desc: 'Unlock all other Palm Island achievements',
        check: { type: 'all_achievements', ids: ['p_first','p_high','p_both','p_efficient','p_5wins','p_10plays','p_score15','p_score25','p_3streak','p_10wins'] } },
    ]
  }
);
