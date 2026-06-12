// ── frosthaven ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
// ── Frosthaven ────────────────────────────────────────────────
  {
    id: 'frosthaven', name: 'Frosthaven', personalBestField: 'difficulty', icon: '❄️', genre: 'Campaign · Dungeon Crawler',
    color: '#2a5a8a', bgColor: '#f0f6ff', dimColor: '#7ab0e0',
    logFields: [
      { id: 'win',        label: 'Win?',          type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
      { id: 'character1', label: 'Character 1',   type: 'select', options: ['Drifter','Deathwalker','Boneshaper','Banner Spear','Geminate','Blinkblade','Frozen Fist','Infuser','Pain Conduit','Pyroclast','Shackles','Snowdancer'] },
      { id: 'character2', label: 'Character 2',   type: 'select', options: ['None','Drifter','Deathwalker','Boneshaper','Banner Spear','Geminate','Blinkblade','Frozen Fist','Infuser','Pain Conduit','Pyroclast','Shackles','Snowdancer'] },
      { id: 'scenario',   label: 'Scenario #',    type: 'number', min: 0, max: 138, default: 1 },
      { id: 'difficulty', label: 'Difficulty',    type: 'number', min: 0, max: 5, default: 1 },
    ],
    achievements: [
      { id: 'fh_first',   icon: '🌟', tier: 'bronze', pts: 10, name: 'Into the Cold',
        desc: 'Win your first scenario',
        check: { type: 'min_wins', count: 1 } },
      { id: 'fh_diff2',   icon: '🧊', tier: 'silver', pts: 20, name: 'Hardened',
        desc: 'Win a scenario on difficulty 2+',
        check: { type: 'win_field_gte', field: 'difficulty', value: 2 } },
      { id: 'fh_diff3',   icon: '❄️',  tier: 'gold',   pts: 35, name: 'Frostbitten',
        desc: 'Win a scenario on difficulty 3+',
        check: { type: 'win_field_gte', field: 'difficulty', value: 3 } },
      { id: 'fh_10scen',  icon: '🗺️', tier: 'silver', pts: 25, name: 'Deep Expedition',
        desc: 'Win 10 scenarios',
        check: { type: 'min_wins', count: 10 } },
      { id: 'fh_drifter', icon: '🌀', tier: 'silver', pts: 15, name: 'The Drifter',
        desc: 'Win a scenario with the Drifter',
        check: { type: 'win_all_values_multifield', fields: ['character1','character2'], values: ['Drifter'] } },
      { id: 'fh_death',   icon: '💀', tier: 'silver', pts: 15, name: 'The Deathwalker',
        desc: 'Win a scenario with the Deathwalker',
        check: { type: 'win_all_values_multifield', fields: ['character1','character2'], values: ['Deathwalker'] } },
      { id: 'fh_5diff',   icon: '🗺️', tier: 'silver', pts: 20,  name: 'Explorer',
        desc: 'Win 5 different scenarios',
        check: { type: 'unique_win_values', field: 'scenario', count: 5 } },
      { id: 'fh_allchars',icon: '👥', tier: 'gold',   pts: 40,  name: 'Full Party',
        desc: 'Win at least once with 4 different characters',
        check: { type: 'unique_win_values_multifield', fields: ['character1','character2'], count: 4 } },
      { id: 'fh_streak3', icon: '🔥', tier: 'silver', pts: 25,  name: 'Victory Streak',
        desc: 'Win 3 scenarios in a row',
        check: { type: 'win_streak_game', count: 3 } },
      { id: 'fh_15plays', icon: '🎮', tier: 'silver', pts: 20, name: 'Outpost Regular',
        desc: 'Play 15 scenarios',
        check: { type: 'min_plays', count: 15 } },
      { id: 'fh_plat',    icon: '💎', tier: 'plat',   pts: 100, name: 'Frosthaven Veteran',
        desc: 'Unlock all other Frosthaven achievements',
        check: { type: 'all_achievements', ids: ['fh_first','fh_diff2','fh_diff3','fh_10scen','fh_drifter','fh_death','fh_15plays','fh_5diff','fh_allchars','fh_streak3'] } },
    ]
  }
);
