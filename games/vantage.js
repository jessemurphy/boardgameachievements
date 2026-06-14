// ── vantage ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
// ── Vantage ───────────────────────────────────────────────────
  {
    id:       'vantage',
    name:     'Vantage',
    icon:     '🔭',
    genre:    'Cooperative · Sci-Fi · Card Game',
    color:    '#2a5faa',
    bgColor:  '#f0f4fc',
    dimColor: '#8aaad8',

    logFields: [
      { id: 'win',        label: 'Outcome',       type: 'toggle', trueLabel: 'Victory ✓', falseLabel: 'Loss ✗' },
      { id: 'epicVictory',label: 'Epic Victory?', type: 'toggle', trueLabel: 'Yes (Mission + Destiny)', falseLabel: 'No' },
      { id: 'character',  label: 'Character',     type: 'select',
        options: ['Jules, the Captain', 'Soren, the Navigator', 'Emilien, the Scholar', 'Ira, the Medic', 'Ariel, the Engineer', 'Tina, the Marine'] },

      // ── Character achievements ──
      { id: 'char_jules_mission',   label: 'Jules — Mission Victory',   type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_jules_destiny',   label: 'Jules — Destiny Victory',   type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_jules_epic',      label: 'Jules — Epic Victory',      type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_jules_gain',      label: 'Jules — Gain 1441',         type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_jules_complete',  label: 'Jules — Complete 1621',     type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },

      { id: 'char_soren_mission',   label: 'Soren — Mission Victory',   type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_soren_destiny',   label: 'Soren — Destiny Victory',   type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_soren_epic',      label: 'Soren — Epic Victory',      type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_soren_gain',      label: 'Soren — Gain 1442',         type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_soren_complete',  label: 'Soren — Complete 1622',     type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },

      { id: 'char_emilien_mission',  label: 'Emilien — Mission Victory',  type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_emilien_destiny',  label: 'Emilien — Destiny Victory',  type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_emilien_epic',     label: 'Emilien — Epic Victory',     type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_emilien_gain',     label: 'Emilien — Gain 1443',        type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_emilien_complete', label: 'Emilien — Complete 1623',    type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },

      { id: 'char_ira_mission',   label: 'Ira — Mission Victory',   type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_ira_destiny',   label: 'Ira — Destiny Victory',   type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_ira_epic',      label: 'Ira — Epic Victory',      type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_ira_gain',      label: 'Ira — Gain 1444',         type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_ira_complete',  label: 'Ira — Complete 1624',     type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },

      { id: 'char_ariel_mission',   label: 'Ariel — Mission Victory',   type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_ariel_destiny',   label: 'Ariel — Destiny Victory',   type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_ariel_epic',      label: 'Ariel — Epic Victory',      type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_ariel_gain',      label: 'Ariel — Gain 1445',         type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_ariel_complete',  label: 'Ariel — Complete 1625',     type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },

      { id: 'char_tina_mission',   label: 'Tina — Mission Victory',   type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_tina_destiny',   label: 'Tina — Destiny Victory',   type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_tina_epic',      label: 'Tina — Epic Victory',      type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_tina_gain',      label: 'Tina — Gain 1446',         type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'char_tina_complete',  label: 'Tina — Complete 1626',     type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },

      // ── Mission checklist ──
      { id: 'mission_1577', label: 'Mission 1577', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1578', label: 'Mission 1578', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1579', label: 'Mission 1579', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1580', label: 'Mission 1580', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1581', label: 'Mission 1581', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1582', label: 'Mission 1582', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1583', label: 'Mission 1583', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1584', label: 'Mission 1584', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1585', label: 'Mission 1585', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1586', label: 'Mission 1586', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1587', label: 'Mission 1587', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1588', label: 'Mission 1588', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1589', label: 'Mission 1589', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1590', label: 'Mission 1590', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1591', label: 'Mission 1591', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1592', label: 'Mission 1592', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1593', label: 'Mission 1593', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1594', label: 'Mission 1594', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1595', label: 'Mission 1595', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1596', label: 'Mission 1596', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },
      { id: 'mission_1597', label: 'Mission 1597', type: 'toggle', trueLabel: 'Done', falseLabel: '—' },

      // ── Spoiler pack ──
      { id: 'spoiler_count', label: 'Spoiler Pack Items Accessed', type: 'number', min: 0, max: 20, default: 0 },
    ],

    customStatsTitle: 'Campaign Stats',
    customStats: [
      { label: 'Losses',              type: 'count_where',  field: 'win', value: false },
      { label: 'Missions Completed',  type: 'count_toggle', fields: [
          'char_jules_mission','char_soren_mission','char_emilien_mission',
          'char_ira_mission','char_ariel_mission','char_tina_mission'] },
      { label: 'Destinies Fulfilled', type: 'count_toggle', fields: [
          'char_jules_destiny','char_soren_destiny','char_emilien_destiny',
          'char_ira_destiny','char_ariel_destiny','char_tina_destiny'] },
      { label: 'Epic Victories',      type: 'count_toggle', fields: [
          'char_jules_epic','char_soren_epic','char_emilien_epic',
          'char_ira_epic','char_ariel_epic','char_tina_epic'] },
    ],

    achievements: [
      // ── First steps ──
      { id: 'vt_first_win', icon: '🌟', tier: 'bronze', pts: 10, name: 'First Contact',
        desc: 'Win your first game',
        check: { type: 'min_wins', count: 1 } },
      { id: 'vt_first_epic', icon: '✨', tier: 'silver', pts: 20, name: 'Perfect Run',
        desc: 'Achieve an Epic Victory (complete both a Mission and a Destiny)',
        check: { type: 'win_with_toggle', field: 'epicVictory' } },

      // ── Jules, the Captain ──
      { id: 'vt_jules_mission',   icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Jules: Mission Victory',
        desc: 'Win a Mission as Jules, the Captain',
        check: { type: 'win_with_toggle', field: 'char_jules_mission' } },
      { id: 'vt_jules_destiny',   icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Jules: Destiny Victory',
        desc: 'Achieve a Destiny Victory as Jules, the Captain',
        check: { type: 'win_with_toggle', field: 'char_jules_destiny' } },
      { id: 'vt_jules_epic',      icon: '⚡', tier: 'silver', pts: 20, name: 'Jules: Epic Victory',
        desc: 'Achieve an Epic Victory as Jules, the Captain',
        check: { type: 'win_with_toggle', field: 'char_jules_epic' } },
      { id: 'vt_jules_gain',      icon: '🔒', tier: 'silver', pts: 15, name: 'Jules: Gain 1441',
        desc: 'Gain card 1441 as Jules, the Captain',
        check: { type: 'win_with_toggle', field: 'char_jules_gain' } },
      { id: 'vt_jules_complete',  icon: '🔒', tier: 'gold',   pts: 30, name: 'Jules: Complete 1621',
        desc: 'Complete card 1621 as Jules, the Captain',
        check: { type: 'win_with_toggle', field: 'char_jules_complete' } },

      // ── Soren, the Navigator ──
      { id: 'vt_soren_mission',   icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Soren: Mission Victory',
        desc: 'Win a Mission as Soren, the Navigator',
        check: { type: 'win_with_toggle', field: 'char_soren_mission' } },
      { id: 'vt_soren_destiny',   icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Soren: Destiny Victory',
        desc: 'Achieve a Destiny Victory as Soren, the Navigator',
        check: { type: 'win_with_toggle', field: 'char_soren_destiny' } },
      { id: 'vt_soren_epic',      icon: '⚡', tier: 'silver', pts: 20, name: 'Soren: Epic Victory',
        desc: 'Achieve an Epic Victory as Soren, the Navigator',
        check: { type: 'win_with_toggle', field: 'char_soren_epic' } },
      { id: 'vt_soren_gain',      icon: '🔒', tier: 'silver', pts: 15, name: 'Soren: Gain 1442',
        desc: 'Gain card 1442 as Soren, the Navigator',
        check: { type: 'win_with_toggle', field: 'char_soren_gain' } },
      { id: 'vt_soren_complete',  icon: '🔒', tier: 'gold',   pts: 30, name: 'Soren: Complete 1622',
        desc: 'Complete card 1622 as Soren, the Navigator',
        check: { type: 'win_with_toggle', field: 'char_soren_complete' } },

      // ── Emilien, the Scholar ──
      { id: 'vt_emilien_mission',   icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Emilien: Mission Victory',
        desc: 'Win a Mission as Emilien, the Scholar',
        check: { type: 'win_with_toggle', field: 'char_emilien_mission' } },
      { id: 'vt_emilien_destiny',   icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Emilien: Destiny Victory',
        desc: 'Achieve a Destiny Victory as Emilien, the Scholar',
        check: { type: 'win_with_toggle', field: 'char_emilien_destiny' } },
      { id: 'vt_emilien_epic',      icon: '⚡', tier: 'silver', pts: 20, name: 'Emilien: Epic Victory',
        desc: 'Achieve an Epic Victory as Emilien, the Scholar',
        check: { type: 'win_with_toggle', field: 'char_emilien_epic' } },
      { id: 'vt_emilien_gain',      icon: '🔒', tier: 'silver', pts: 15, name: 'Emilien: Gain 1443',
        desc: 'Gain card 1443 as Emilien, the Scholar',
        check: { type: 'win_with_toggle', field: 'char_emilien_gain' } },
      { id: 'vt_emilien_complete',  icon: '🔒', tier: 'gold',   pts: 30, name: 'Emilien: Complete 1623',
        desc: 'Complete card 1623 as Emilien, the Scholar',
        check: { type: 'win_with_toggle', field: 'char_emilien_complete' } },

      // ── Ira, the Medic ──
      { id: 'vt_ira_mission',   icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Ira: Mission Victory',
        desc: 'Win a Mission as Ira, the Medic',
        check: { type: 'win_with_toggle', field: 'char_ira_mission' } },
      { id: 'vt_ira_destiny',   icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Ira: Destiny Victory',
        desc: 'Achieve a Destiny Victory as Ira, the Medic',
        check: { type: 'win_with_toggle', field: 'char_ira_destiny' } },
      { id: 'vt_ira_epic',      icon: '⚡', tier: 'silver', pts: 20, name: 'Ira: Epic Victory',
        desc: 'Achieve an Epic Victory as Ira, the Medic',
        check: { type: 'win_with_toggle', field: 'char_ira_epic' } },
      { id: 'vt_ira_gain',      icon: '🔒', tier: 'silver', pts: 15, name: 'Ira: Gain 1444',
        desc: 'Gain card 1444 as Ira, the Medic',
        check: { type: 'win_with_toggle', field: 'char_ira_gain' } },
      { id: 'vt_ira_complete',  icon: '🔒', tier: 'gold',   pts: 30, name: 'Ira: Complete 1624',
        desc: 'Complete card 1624 as Ira, the Medic',
        check: { type: 'win_with_toggle', field: 'char_ira_complete' } },

      // ── Ariel, the Engineer ──
      { id: 'vt_ariel_mission',   icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Ariel: Mission Victory',
        desc: 'Win a Mission as Ariel, the Engineer',
        check: { type: 'win_with_toggle', field: 'char_ariel_mission' } },
      { id: 'vt_ariel_destiny',   icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Ariel: Destiny Victory',
        desc: 'Achieve a Destiny Victory as Ariel, the Engineer',
        check: { type: 'win_with_toggle', field: 'char_ariel_destiny' } },
      { id: 'vt_ariel_epic',      icon: '⚡', tier: 'silver', pts: 20, name: 'Ariel: Epic Victory',
        desc: 'Achieve an Epic Victory as Ariel, the Engineer',
        check: { type: 'win_with_toggle', field: 'char_ariel_epic' } },
      { id: 'vt_ariel_gain',      icon: '🔒', tier: 'silver', pts: 15, name: 'Ariel: Gain 1445',
        desc: 'Gain card 1445 as Ariel, the Engineer',
        check: { type: 'win_with_toggle', field: 'char_ariel_gain' } },
      { id: 'vt_ariel_complete',  icon: '🔒', tier: 'gold',   pts: 30, name: 'Ariel: Complete 1625',
        desc: 'Complete card 1625 as Ariel, the Engineer',
        check: { type: 'win_with_toggle', field: 'char_ariel_complete' } },

      // ── Tina, the Marine ──
      { id: 'vt_tina_mission',   icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Tina: Mission Victory',
        desc: 'Win a Mission as Tina, the Marine',
        check: { type: 'win_with_toggle', field: 'char_tina_mission' } },
      { id: 'vt_tina_destiny',   icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Tina: Destiny Victory',
        desc: 'Achieve a Destiny Victory as Tina, the Marine',
        check: { type: 'win_with_toggle', field: 'char_tina_destiny' } },
      { id: 'vt_tina_epic',      icon: '⚡', tier: 'silver', pts: 20, name: 'Tina: Epic Victory',
        desc: 'Achieve an Epic Victory as Tina, the Marine',
        check: { type: 'win_with_toggle', field: 'char_tina_epic' } },
      { id: 'vt_tina_gain',      icon: '🔒', tier: 'silver', pts: 15, name: 'Tina: Gain 1446',
        desc: 'Gain card 1446 as Tina, the Marine',
        check: { type: 'win_with_toggle', field: 'char_tina_gain' } },
      { id: 'vt_tina_complete',  icon: '🔒', tier: 'gold',   pts: 30, name: 'Tina: Complete 1626',
        desc: 'Complete card 1626 as Tina, the Marine',
        check: { type: 'win_with_toggle', field: 'char_tina_complete' } },

      // ── Cross-character ──
      { id: 'vt_all_mission', icon: '🌍', tier: 'gold', pts: 40, name: 'All Hands on Deck',
        desc: 'Achieve a Mission Victory with all 6 characters',
        check: { type: 'all_achievements', ids: [
          'vt_jules_mission','vt_soren_mission','vt_emilien_mission',
          'vt_ira_mission','vt_ariel_mission','vt_tina_mission'
        ]} },
      { id: 'vt_all_epic', icon: '🚀', tier: 'gold', pts: 60, name: 'Crew of Legends',
        desc: 'Achieve an Epic Victory with all 6 characters',
        check: { type: 'all_achievements', ids: [
          'vt_jules_epic','vt_soren_epic','vt_emilien_epic',
          'vt_ira_epic','vt_ariel_epic','vt_tina_epic'
        ]} },

      // ── Missions ──
      { id: 'vt_missions_half', icon: '📋', tier: 'silver', pts: 20, name: 'Halfway There',
        desc: 'Complete at least 11 different missions',
        check: { type: 'any_toggle_count_gte', fields: [
          'mission_1577','mission_1578','mission_1579','mission_1580','mission_1581',
          'mission_1582','mission_1583','mission_1584','mission_1585','mission_1586',
          'mission_1587','mission_1588','mission_1589','mission_1590','mission_1591',
          'mission_1592','mission_1593','mission_1594','mission_1595','mission_1596',
          'mission_1597'
        ], count: 11 } },
      { id: 'vt_missions_all', icon: '📁', tier: 'gold', pts: 50, name: 'Mission Complete',
        desc: 'Complete all 21 missions',
        check: { type: 'any_toggle_count_gte', fields: [
          'mission_1577','mission_1578','mission_1579','mission_1580','mission_1581',
          'mission_1582','mission_1583','mission_1584','mission_1585','mission_1586',
          'mission_1587','mission_1588','mission_1589','mission_1590','mission_1591',
          'mission_1592','mission_1593','mission_1594','mission_1595','mission_1596',
          'mission_1597'
        ], count: 21 } },

      // ── Spoiler pack ──
      { id: 'vt_spoiler_5', icon: '📦', tier: 'silver', pts: 20, name: 'Curiosity Rewarded',
        desc: 'Access 3 or more spoiler pack items in a single game',
        check: { type: 'field_gte', field: 'spoiler_count', value: 3 } },

      // ── Platinum ──
      { id: 'vt_plat', icon: '💎', tier: 'plat', pts: 100, name: 'Vantage: Complete',
        desc: 'Unlock all other Vantage achievements',
        check: { type: 'all_achievements', ids: [
          'vt_first_win','vt_first_epic',
          'vt_jules_mission','vt_jules_destiny','vt_jules_epic','vt_jules_gain','vt_jules_complete',
          'vt_soren_mission','vt_soren_destiny','vt_soren_epic','vt_soren_gain','vt_soren_complete',
          'vt_emilien_mission','vt_emilien_destiny','vt_emilien_epic','vt_emilien_gain','vt_emilien_complete',
          'vt_ira_mission','vt_ira_destiny','vt_ira_epic','vt_ira_gain','vt_ira_complete',
          'vt_ariel_mission','vt_ariel_destiny','vt_ariel_epic','vt_ariel_gain','vt_ariel_complete',
          'vt_tina_mission','vt_tina_destiny','vt_tina_epic','vt_tina_gain','vt_tina_complete',
          'vt_all_mission','vt_all_epic',
          'vt_missions_half','vt_missions_all',
          'vt_spoiler_5'
        ]} },
    ]
  }
);
