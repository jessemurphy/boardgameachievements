// ── orchard ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
// ── Orchard ───────────────────────────────────────────────────
  {
    id: 'orchard', name: 'Orchard', icon: '🍎', genre: 'Solitaire · Dice Placement',
    color: '#4a9a2a', bgColor: '#f4fff0', dimColor: '#90d070',
    logFields: [
      { id: 'win',    label: 'Win?',      type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
      { id: 'score',  label: 'Score (eaten apples)', type: 'number', min: 0, max: 20, default: 3 },
      { id: 'perfect',label: 'All 16 Tiles Placed',  type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No' },
    ],
    achievements: [
      { id: 'or_first',   icon: '🌟', tier: 'bronze', pts: 10, name: 'First Harvest',
        desc: 'Play your first game',
        check: { type: 'min_plays', count: 1 } },
      { id: 'or_5score',  icon: '🍏', tier: 'bronze', pts: 10, name: 'Good Yield',
        desc: 'Score 5+ apples',
        check: { type: 'field_gte', field: 'score', value: 5 } },
      { id: 'or_10score', icon: '🍎', tier: 'silver', pts: 20, name: 'Bumper Crop',
        desc: 'Score 10+ apples',
        check: { type: 'field_gte', field: 'score', value: 10 } },
      { id: 'or_15score', icon: '🌳', tier: 'gold',   pts: 35, name: 'Overflowing',
        desc: 'Score 15+ apples',
        check: { type: 'field_gte', field: 'score', value: 15 } },
      { id: 'or_perfect', icon: '✨', tier: 'gold',   pts: 50, name: 'Perfect Orchard',
        desc: 'Place all 16 tiles',
        check: { type: 'win_with_toggle', field: 'perfect' } },
      { id: 'or_3wins',   icon: '🍊', tier: 'silver', pts: 20,  name: 'Three Harvests',
        desc: 'Win 3 games',
        check: { type: 'min_wins', count: 3 } },
      { id: 'or_12score', icon: '🍇', tier: 'silver', pts: 25,  name: 'Abundant Harvest',
        desc: 'Score 12+ apples',
        check: { type: 'field_gte', field: 'score', value: 12 } },
      { id: 'or_streak3', icon: '🔥', tier: 'silver', pts: 25,  name: 'Apple Streak',
        desc: 'Win 3 games in a row',
        check: { type: 'win_streak_game', count: 3 } },
      { id: 'or_20plays', icon: '📅', tier: 'silver', pts: 20,  name: 'Devoted Grower',
        desc: 'Play 20 games',
        check: { type: 'min_plays', count: 20 } },
      { id: 'or_10plays', icon: '🎮', tier: 'silver', pts: 20, name: 'Seasoned Picker',
        desc: 'Play 10 games',
        check: { type: 'min_plays', count: 10 } },
      { id: 'or_plat',    icon: '💎', tier: 'plat',   pts: 100, name: 'Master Orchardist',
        desc: 'Unlock all other Orchard achievements',
        check: { type: 'all_achievements', ids: ['or_first','or_5score','or_10score','or_12score','or_15score','or_perfect','or_10plays','or_3wins','or_streak3','or_20plays'] } },
    ]
  }
);
