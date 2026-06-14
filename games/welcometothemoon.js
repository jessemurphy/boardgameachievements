// ── welcometothemoon ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
{
  id:       'welcometothemoon',
  name:     'Welcome to the Moon',
  icon:     '🌙',
  genre:    'Roll & Write · Campaign',
  bggId:    339789,
  color:    '#1a3a6b',
  bgColor:  '#f0f3fa',
  dimColor: '#6080c0',

  logFields: [
    { id: 'win',      label: 'Win?',         type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
    { id: 'scenario', label: 'Adventure',    type: 'select', options: [
      '#1: The Launch', '#2: The Journey', '#3: The Colony',
      '#4: The Mine', '#5: The Dome', '#6: The Virus',
      '#7: The Escape', '#8: The Battle'
    ]},
    { id: 'score',    label: 'Score',        type: 'number', min: 0, max: 300, default: 100 },
    { id: 'campaign', label: 'Campaign run?', type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
    { id: 'colA',     label: 'Column A',     type: 'number', min: 0, max: 60, default: 0 },
    { id: 'colB',     label: 'Column B',     type: 'number', min: 0, max: 60, default: 0 },
    { id: 'colC',     label: 'Column C',     type: 'number', min: 0, max: 60, default: 0 },
    { id: 'sysErrors',   label: 'System Errors',    type: 'number', min: 0, max: 30, default: 0 },
    { id: 'automataLevel',label: 'Automata Level',  type: 'number', min: 0, max: 8, default: 1 },
  ],

  personalBestField: 'score',

    customStatsTitle: 'Adventure Stats',
    customStats: [
      { label: 'Personal Best Score', type: 'best_win', field: 'score' },
      { label: 'Highest Automata Beaten', type: 'best_win', field: 'automataLevel', minValue: 1, labelMap: ['','Katherine (1)','Neil (2)','Margaret (3)','Buzz (4)','Sergei (5)','Yuri (6)','Valentina (7)','Ada (8)'] },
      { label: '#1: The Launch',   type: 'ratio', field: 'scenario', value: '#1: The Launch' },
      { label: '#2: The Journey',  type: 'ratio', field: 'scenario', value: '#2: The Journey' },
      { label: '#3: The Colony',   type: 'ratio', field: 'scenario', value: '#3: The Colony' },
      { label: '#4: The Mine',     type: 'ratio', field: 'scenario', value: '#4: The Mine' },
      { label: '#5: The Dome',     type: 'ratio', field: 'scenario', value: '#5: The Dome' },
      { label: '#6: The Virus',    type: 'ratio', field: 'scenario', value: '#6: The Virus' },
      { label: '#7: The Escape',   type: 'ratio', field: 'scenario', value: '#7: The Escape' },
      { label: '#8: The Battle',   type: 'ratio', field: 'scenario', value: '#8: The Battle' },
    ],

    achievements: [
    { id: 'wtm_first',    icon: '🚀', tier: 'bronze', pts: 10, name: 'Liftoff!',
      desc: 'Complete your first adventure',
      check: { type: 'min_plays', count: 1 } },

    // ── Score milestones ──
    { id: 'wtm_100',      icon: '⭐', tier: 'bronze', pts: 10, name: 'Trainee Astronaut',
      desc: 'Score 100+ points',
      check: { type: 'field_gte', field: 'score', value: 100 } },
    { id: 'wtm_130',      icon: '⭐', tier: 'silver', pts: 20, name: 'Astronaut',
      desc: 'Score 130+ points',
      check: { type: 'field_gte', field: 'score', value: 130 } },
    { id: 'wtm_150',      icon: '🌟', tier: 'gold',   pts: 35, name: 'Senior Astronaut',
      desc: 'Score 150+ points',
      check: { type: 'field_gte', field: 'score', value: 150 } },

    // ── No system errors ──
    { id: 'wtm_nosyserr', icon: '✅', tier: 'silver', pts: 25, name: 'Error Free',
      desc: 'Win an adventure with 0 system errors',
      check: { type: 'win_field_eq', field: 'sysErrors', value: 0 } },

    // ── Adventure completions ──
    { id: 'wtm_s1', icon: '🚀', tier: 'bronze', pts: 10, name: 'The Launch',
      desc: 'Win Adventure #1: The Launch',
      check: { type: 'win_with_field', field: 'scenario', value: '#1: The Launch' } },
    { id: 'wtm_s2', icon: '🛸', tier: 'bronze', pts: 10, name: 'The Journey',
      desc: 'Win Adventure #2: The Journey',
      check: { type: 'win_with_field', field: 'scenario', value: '#2: The Journey' } },
    { id: 'wtm_s3', icon: '🌱', tier: 'bronze', pts: 10, name: 'The Colony',
      desc: 'Win Adventure #3: The Colony',
      check: { type: 'win_with_field', field: 'scenario', value: '#3: The Colony' } },
    { id: 'wtm_s4', icon: '⛏️',  tier: 'silver', pts: 15, name: 'The Mine',
      desc: 'Win Adventure #4: The Mine',
      check: { type: 'win_with_field', field: 'scenario', value: '#4: The Mine' } },
    { id: 'wtm_s5', icon: '🔮', tier: 'silver', pts: 15, name: 'The Dome',
      desc: 'Win Adventure #5: The Dome',
      check: { type: 'win_with_field', field: 'scenario', value: '#5: The Dome' } },
    { id: 'wtm_s6', icon: '🦠', tier: 'silver', pts: 15, name: 'The Virus',
      desc: 'Win Adventure #6: The Virus',
      check: { type: 'win_with_field', field: 'scenario', value: '#6: The Virus' } },
    { id: 'wtm_s7', icon: '🏃', tier: 'gold',   pts: 25, name: 'The Escape',
      desc: 'Win Adventure #7: The Escape',
      check: { type: 'win_with_field', field: 'scenario', value: '#7: The Escape' } },
    { id: 'wtm_s8', icon: '⚔️',  tier: 'gold',   pts: 35, name: 'The Battle',
      desc: 'Win Adventure #8: The Battle',
      check: { type: 'win_with_field', field: 'scenario', value: '#8: The Battle' } },

    // ── Full campaign ──
    { id: 'wtm_campaign', icon: '🏆', tier: 'gold', pts: 75, name: 'Moon Conqueror',
      desc: 'Win all 8 adventures',
      check: { type: 'all_achievements', ids: [
        'wtm_s1','wtm_s2','wtm_s3','wtm_s4',
        'wtm_s5','wtm_s6','wtm_s7','wtm_s8'
      ]}},

    // ── Automata difficulty ──
    { id: 'wtm_auto3', icon: '🤖', tier: 'bronze', pts: 10, name: 'Better Than Margaret',
      desc: 'Beat Margaret (level 3) or higher',
      check: { type: 'win_field_gte', field: 'automataLevel', value: 3 } },
    { id: 'wtm_auto5', icon: '🛰️', tier: 'silver', pts: 20, name: 'Better Than Sergei',
      desc: 'Beat Sergei (level 5) or higher',
      check: { type: 'win_field_gte', field: 'automataLevel', value: 5 } },
    { id: 'wtm_auto8', icon: '👾', tier: 'gold',   pts: 40, name: 'Better Than Ada',
      desc: 'Beat Ada (level 8) — the hardest difficulty',
      check: { type: 'win_field_gte', field: 'automataLevel', value: 8 } },

    // ── Platinum ──
    { id: 'wtm_plat', icon: '💎', tier: 'plat', pts: 100, name: 'Welcome to the Moon — Complete',
      desc: 'Unlock all other Welcome to the Moon achievements',
      check: { type: 'all_achievements', ids: [
        'wtm_first','wtm_100','wtm_130','wtm_150','wtm_nosyserr',
        'wtm_s1','wtm_s2','wtm_s3','wtm_s4',
        'wtm_s5','wtm_s6','wtm_s7','wtm_s8','wtm_campaign',
        'wtm_auto3','wtm_auto5','wtm_auto8'
      ]}},
  ]
}
);
