// ── welcometo ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
{
  id:       'welcometo',
  name:     'Welcome To...',
  icon:     '🏠',
  genre:    'Roll & Write · City Building',
  bggId:    233867,
  color:    '#e8810a',
  bgColor:  '#fff8f0',
  dimColor: '#f0a050',

  logFields: [
    { id: 'win',      label: 'Win?',            type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
    { id: 'score',    label: 'Total Score',     type: 'number', min: 0, max: 150, default: 80 },
    { id: 'pools',    label: 'Pools',           type: 'number', min: 0, max: 20,  default: 0 },
    { id: 'parks',    label: 'Parks',           type: 'number', min: 0, max: 50,  default: 0 },
    { id: 'obj1',     label: 'Objective 1',     type: 'number', min: 0, max: 12,  default: 0 },
    { id: 'obj2',     label: 'Objective 2',     type: 'number', min: 0, max: 12,  default: 0 },
    { id: 'obj3',     label: 'Objective 3',     type: 'number', min: 0, max: 12,  default: 0 },
    { id: 'bis',      label: 'Bis',             type: 'number', min: 0, max: 20,  default: 0 },
    { id: 'temps',    label: 'Temps',           type: 'number', min: 0, max: 20,  default: 0 },
    { id: 'allObj',   label: 'All 3 objectives?', type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
  ],

  achievements: [
    { id: 'wt_first',    icon: '🌟', tier: 'bronze', pts: 10, name: 'Welcome to the Neighborhood',
      desc: 'Play your first game',
      check: { type: 'min_plays', count: 1 } },

    // ── Score milestones (calibrated: avg 89, max 112) ──
    { id: 'wt_85',       icon: '🏡', tier: 'bronze', pts: 10, name: 'Suburban Living',
      desc: 'Score 85+ points',
      check: { type: 'field_gte', field: 'score', value: 85 } },
    { id: 'wt_100',       icon: '🏘️', tier: 'silver', pts: 20, name: 'Nice Neighborhood',
      desc: 'Score 100+ points',
      check: { type: 'field_gte', field: 'score', value: 100 } },
    { id: 'wt_115',      icon: '🏰', tier: 'gold',   pts: 35, name: 'Dream Street',
      desc: 'Score 115+ points',
      check: { type: 'field_gte', field: 'score', value: 115 } },
    { id: ',      icon: '👑', tier: 'gold',   pts: 50, name: 'Perfect Suburb',
      desc: 'Score 130+ points',
      check: { type: 'field_gte', field: 'score', value: 130 } },

    // ── Objectives ──
    { id: 'wt_allobj',   icon: '✅', tier: 'silver', pts: 25, name: 'Overachiever',
      desc: 'Complete all 3 objectives in one game',
      check: { type: 'win_with_toggle', field: 'allObj' } },
    { id: 'wt_obj30',    icon: '🎯', tier: 'silver', pts: 20, name: 'Goal Setter',
      desc: 'Score 30+ combined from objectives',
      check: { type: 'n_fields_gte', fields: ['obj1','obj2','obj3'], value: 10, count: 3 } },

    // ── Pools ──
    { id: 'wt_pools18',  icon: '🏊', tier: 'silver', pts: 20, name: 'Pool Party',
      desc: 'Score 18+ from pools',
      check: { type: 'field_gte', field: 'pools', value: 18 } },

    // ── Parks ──
    { id: 'wt_parks30',  icon: '🌳', tier: 'silver', pts: 20, name: 'Green Spaces',
      desc: 'Score 30+ from parks',
      check: { type: 'field_gte', field: 'parks', value: 30 } },

    // ── Volume ──
    { id: 'wt_10plays',  icon: '🎮', tier: 'bronze', pts: 10, name: 'Regular Resident',
      desc: 'Play 10 games',
      check: { type: 'min_plays', count: 10 } },
    { id: 'wt_5wins',    icon: '🏆', tier: 'silver', pts: 20, name: 'Developer',
      desc: 'Win 5 games',
      check: { type: 'min_wins', count: 5 } },
    { id: 'wt_10wins',   icon: '🏆', tier: 'gold',   pts: 35, name: 'Master Developer',
      desc: 'Win 10 games',
      check: { type: 'min_wins', count: 10 } },

    // ── Platinum ──
    { id: 'wt_plat',     icon: '💎', tier: 'plat',   pts: 100, name: 'Welcome To... Complete',
      desc: 'Unlock all other Welcome To... achievements',
      check: { type: 'all_achievements', ids: [
        'wt_first','wt_85','wt_95','wt_105','wt_112',
        'wt_allobj','wt_obj30','wt_pools15','wt_parks30',
        'wt_10plays','wt_5wins','wt_10wins'
      ]}},
  ]
}
);
