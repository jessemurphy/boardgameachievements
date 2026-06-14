// ── cartographers ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
// ── Cartographers ─────────────────────────────────────────────

  {
    id: 'cartographers', name: 'Cartographers', icon: '🗺️', genre: 'Roll & Write · Map Drawing',
    color: '#8a5a2a', bgColor: '#fff8f0', dimColor: '#d4a060',
    personalBestField: 'season',
    logFields: [
      { id: 'win',       label: 'Win?',           type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
      { id: 'score',     label: 'Final Score',     type: 'number', min: 0, max: 120, default: 40 },
      { id: 'season',    label: 'Scoring Season',  type: 'select', options: ['All Seasons','Spring Only','Spring & Summer','Spring, Summer & Autumn'] },
      { id: 'coins',     label: 'Coins at End',    type: 'number', min: 0, max: 30, default: 3 },
      { id: 'monsters',  label: 'Monster Penalty', type: 'number', min: 0, max: 30, default: 5 },
      { id: 'allEdicts', label: 'All Edict Cards Scored', type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No' },
    ],
    achievements: [
      { id: 'ca2_first',   icon: '🌟', tier: 'bronze', pts: 10,  name: 'First Map',
        desc: 'Complete your first game',
        check: { type: 'min_plays', count: 1 } },
      { id: 'ca2_score50', icon: '📍', tier: 'bronze', pts: 10,  name: 'Capable Cartographer',
        desc: 'Score 50+ points',
        check: { type: 'field_gte', field: 'score', value: 50 } },
      { id: 'ca2_score65', icon: '🏅', tier: 'silver', pts: 20,  name: 'Skilled Mapmaker',
        desc: 'Score 65+ points',
        check: { type: 'field_gte', field: 'score', value: 65 } },
      { id: 'ca2_score80', icon: '🗺️', tier: 'gold',   pts: 35,  name: 'Master Cartographer',
        desc: 'Score 80+ points',
        check: { type: 'field_gte', field: 'score', value: 80 } },
      { id: 'ca2_score95',  icon: '📐', tier: 'silver', pts: 25,  name: 'Royal Surveyor',
        desc: 'Score 95+ points',
        check: { type: 'field_gte', field: 'score', value: 95 } },
      { id: 'ca2_score115', icon: '🗺️', tier: 'gold',   pts: 40,  name: 'Grand Cartographer',
        desc: 'Score 115+ points',
        check: { type: 'field_gte', field: 'score', value: 115 } },
      { id: 'ca2_score130', icon: '👑', tier: 'gold',   pts: 60,  name: 'Legend of the Realm',
        desc: 'Score 130+ points',
        check: { type: 'field_gte', field: 'score', value: 130 } },
      { id: 'ca2_nomon',   icon: '🛡️', tier: 'silver', pts: 20,  name: 'Monster Free',
        desc: 'Win with zero monster penalty',
        check: { type: 'win_field_eq', field: 'monsters', value: 0 } },
      { id: 'ca2_allscore',icon: '📜', tier: 'gold',   pts: 35,  name: 'All Four Seasons',
        desc: 'Win scoring all four seasons',
        check: { type: 'win_with_field', field: 'season', value: 'All Seasons' } },
      { id: 'ca2_coins10', icon: '🪙', tier: 'silver', pts: 15,  name: 'Wealthy Kingdom',
        desc: 'End a game with 10+ coins',
        check: { type: 'field_gte', field: 'coins', value: 10 } },
      { id: 'ca2_10plays', icon: '🎮', tier: 'silver', pts: 20,  name: 'Regular Mapmaker',
        desc: 'Play 10 games',
        check: { type: 'min_plays', count: 10 } },
      { id: 'ca2_plat',    icon: '💎', tier: 'plat',   pts: 100, name: 'Cartographers: Complete',
        desc: 'Unlock all other Cartographers achievements',
        check: { type: 'all_achievements', ids: ['ca2_first','ca2_score50','ca2_score65','ca2_score80','ca2_score95','ca2_score115','ca2_score130','ca2_nomon','ca2_allscore','ca2_coins10','ca2_10plays'] } },
    ]
  }
);
