// ── friday ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
// ── Friday ───────────────────────────────────────────────────
  {
    id: 'friday', name: 'Friday', icon: '🌴', genre: 'Solo Deckbuilder · Survival',
    color: '#c0742a', bgColor: '#fff8f0', dimColor: '#e0b070',
    personalBestField: 'difficulty',
    logFields: [
      { id: 'win',        label: 'Win?',          type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
      { id: 'difficulty', label: 'Difficulty',    type: 'select', options: ['Level 1','Level 2','Level 3','Level 4'] },
      { id: 'score',      label: 'Final Score',   type: 'number', min: -200, max: 200, default: 0 },
      { id: 'lifeLeft',   label: 'Life Points Left', type: 'number', min: 0, max: 20, default: 0 },
    ],
    customStatsTitle: 'Difficulty Breakdown',
    customStats: [
      { label: 'Level 1', type: 'ratio', field: 'difficulty', value: 'Level 1' },
      { label: 'Level 2', type: 'ratio', field: 'difficulty', value: 'Level 2' },
      { label: 'Level 3', type: 'ratio', field: 'difficulty', value: 'Level 3' },
      { label: 'Level 4', type: 'ratio', field: 'difficulty', value: 'Level 4' },
    ],

    achievements: [
      { id: 'fri_first',  icon: '🌟', tier: 'bronze', pts: 10, name: 'Survived',
        desc: 'Win your first game',
        check: { type: 'min_wins', count: 1 } },
      { id: 'fri_l1',     icon: '🐾', tier: 'bronze', pts: 10, name: 'Level 1 Victor',
        desc: 'Win on difficulty Level 1',
        check: { type: 'win_with_field', field: 'difficulty', value: 'Level 1' } },
      { id: 'fri_l2',     icon: '🦎', tier: 'silver', pts: 20, name: 'Level 2 Victor',
        desc: 'Win on difficulty Level 2',
        check: { type: 'win_with_field', field: 'difficulty', value: 'Level 2' } },
      { id: 'fri_l3',     icon: '🦖', tier: 'gold',   pts: 35, name: 'Level 3 Victor',
        desc: 'Win on difficulty Level 3',
        check: { type: 'win_with_field', field: 'difficulty', value: 'Level 3' } },
      { id: 'fri_l4',     icon: '💀', tier: 'gold',   pts: 50, name: 'Legendary Survivor',
        desc: 'Win on difficulty Level 4',
        check: { type: 'win_with_field', field: 'difficulty', value: 'Level 4' } },
      { id: 'fri_all_levels', icon: '🏝️', tier: 'gold', pts: 40, name: 'Master of the Island',
        desc: 'Win on all 4 difficulty levels',
        check: { type: 'all_achievements', ids: ['fri_l1','fri_l2','fri_l3','fri_l4'] } },
      { id: 'fri_pos50',  icon: '✨', tier: 'silver', pts: 25, name: 'Well Fed',
        desc: 'Win with a score of 50 or higher',
        check: { type: 'win_field_gte', field: 'score', value: 50 } },
      { id: 'fri_life5',  icon: '❤️',  tier: 'silver', pts: 20, name: 'Cautious',
        desc: 'Win with 5+ life points remaining',
        check: { type: 'win_field_gte', field: 'lifeLeft', value: 5 } },
      { id: 'fri_10plays',icon: '🎮', tier: 'silver', pts: 20, name: 'Regular Castaway',
        desc: 'Play 10 games',
        check: { type: 'min_plays', count: 10 } },
      { id: 'fri_plat',   icon: '💎', tier: 'plat',   pts: 100, name: 'Robinson Crusoe',
        desc: 'Unlock all other Friday achievements',
        check: { type: 'all_achievements', ids: ['fri_first','fri_l1','fri_l2','fri_l3','fri_l4','fri_all_levels','fri_pos50','fri_life5','fri_10plays'] } },
    ]
  }
);
