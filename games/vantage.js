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
      { id: 'win',             label: 'Outcome',          type: 'toggle', trueLabel: 'Victory ✓', falseLabel: 'Loss ✗' },
      { id: 'character',       label: 'Character',        type: 'select',
        options: ['Jules, the Captain', 'Soren, the Navigator', 'Emilien, the Scholar', 'Ira, the Medic', 'Ariel, the Engineer', 'Tina, the Marine'] },
      { id: 'mission',         label: 'Mission',          type: 'select',
        options: ['1577','1578','1579','1580','1581','1582','1583','1584','1585','1586','1587','1588','1589','1590','1591','1592','1593','1594','1595','1596','1597'] },
      { id: 'missionComplete', label: 'Mission Complete', type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'destinyVictory',  label: 'Destiny Victory',  type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'epicVictory',     label: 'Epic Victory',     type: 'toggle', trueLabel: 'Yes (Mission + Destiny)', falseLabel: 'No' },

      // ── Per-character card achievements (showIf character selected) ──
      { id: 'char_jules_gain',      label: 'Gain 1441',    type: 'toggle', trueLabel: 'Yes', falseLabel: 'No', showIf: { field: 'character', value: 'Jules, the Captain' } },
      { id: 'char_jules_complete',  label: 'Complete 1621',type: 'toggle', trueLabel: 'Yes', falseLabel: 'No', showIf: { field: 'character', value: 'Jules, the Captain' } },
      { id: 'char_soren_gain',      label: 'Gain 1442',    type: 'toggle', trueLabel: 'Yes', falseLabel: 'No', showIf: { field: 'character', value: 'Soren, the Navigator' } },
      { id: 'char_soren_complete',  label: 'Complete 1622',type: 'toggle', trueLabel: 'Yes', falseLabel: 'No', showIf: { field: 'character', value: 'Soren, the Navigator' } },
      { id: 'char_emilien_gain',    label: 'Gain 1443',    type: 'toggle', trueLabel: 'Yes', falseLabel: 'No', showIf: { field: 'character', value: 'Emilien, the Scholar' } },
      { id: 'char_emilien_complete',label: 'Complete 1623',type: 'toggle', trueLabel: 'Yes', falseLabel: 'No', showIf: { field: 'character', value: 'Emilien, the Scholar' } },
      { id: 'char_ira_gain',        label: 'Gain 1444',    type: 'toggle', trueLabel: 'Yes', falseLabel: 'No', showIf: { field: 'character', value: 'Ira, the Medic' } },
      { id: 'char_ira_complete',    label: 'Complete 1624',type: 'toggle', trueLabel: 'Yes', falseLabel: 'No', showIf: { field: 'character', value: 'Ira, the Medic' } },
      { id: 'char_ariel_gain',      label: 'Gain 1445',    type: 'toggle', trueLabel: 'Yes', falseLabel: 'No', showIf: { field: 'character', value: 'Ariel, the Engineer' } },
      { id: 'char_ariel_complete',  label: 'Complete 1625',type: 'toggle', trueLabel: 'Yes', falseLabel: 'No', showIf: { field: 'character', value: 'Ariel, the Engineer' } },
      { id: 'char_tina_gain',       label: 'Gain 1446',    type: 'toggle', trueLabel: 'Yes', falseLabel: 'No', showIf: { field: 'character', value: 'Tina, the Marine' } },
      { id: 'char_tina_complete',   label: 'Complete 1626',type: 'toggle', trueLabel: 'Yes', falseLabel: 'No', showIf: { field: 'character', value: 'Tina, the Marine' } },

      // ── Spoiler pack ──
      { id: 'spoiler_count', label: 'Spoiler Pack Items Accessed', type: 'number', min: 0, max: 20, default: 0 },
    ],

    customStatsTitle: 'Campaign Stats',
    customStats: [
      { label: 'Losses',              type: 'count_where',  field: 'win',            value: false },
      { label: 'Missions Completed',  type: 'count_toggle', field: 'missionComplete' },
      { label: 'Destinies Fulfilled', type: 'count_toggle', field: 'destinyVictory'  },
      { label: 'Epic Victories',      type: 'count_toggle', field: 'epicVictory'     },
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
      { id: 'vt_jules_mission',  icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Jules: Mission Victory',
        desc: 'Complete a Mission as Jules, the Captain',
        check: { type: 'win_two_fields', field1: 'character', value1: 'Jules, the Captain', field2: 'missionComplete', value2: 'true' } },
      { id: 'vt_jules_destiny',  icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Jules: Destiny Victory',
        desc: 'Achieve a Destiny Victory as Jules, the Captain',
        check: { type: 'win_two_fields', field1: 'character', value1: 'Jules, the Captain', field2: 'destinyVictory', value2: 'true' } },
      { id: 'vt_jules_epic',     icon: '⚡', tier: 'silver', pts: 20, name: 'Jules: Epic Victory',
        desc: 'Achieve an Epic Victory as Jules, the Captain',
        check: { type: 'win_two_fields', field1: 'character', value1: 'Jules, the Captain', field2: 'epicVictory', value2: 'true' } },
      { id: 'vt_jules_gain',     icon: '🔒', tier: 'silver', pts: 15, name: 'Jules: Gain 1441',
        desc: 'Gain card 1441 as Jules, the Captain',
        check: { type: 'win_with_toggle', field: 'char_jules_gain' } },
      { id: 'vt_jules_complete', icon: '🔒', tier: 'gold',   pts: 30, name: 'Jules: Complete 1621',
        desc: 'Complete card 1621 as Jules, the Captain',
        check: { type: 'win_with_toggle', field: 'char_jules_complete' } },

      // ── Soren, the Navigator ──
      { id: 'vt_soren_mission',  icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Soren: Mission Victory',
        desc: 'Complete a Mission as Soren, the Navigator',
        check: { type: 'win_two_fields', field1: 'character', value1: 'Soren, the Navigator', field2: 'missionComplete', value2: 'true' } },
      { id: 'vt_soren_destiny',  icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Soren: Destiny Victory',
        desc: 'Achieve a Destiny Victory as Soren, the Navigator',
        check: { type: 'win_two_fields', field1: 'character', value1: 'Soren, the Navigator', field2: 'destinyVictory', value2: 'true' } },
      { id: 'vt_soren_epic',     icon: '⚡', tier: 'silver', pts: 20, name: 'Soren: Epic Victory',
        desc: 'Achieve an Epic Victory as Soren, the Navigator',
        check: { type: 'win_two_fields', field1: 'character', value1: 'Soren, the Navigator', field2: 'epicVictory', value2: 'true' } },
      { id: 'vt_soren_gain',     icon: '🔒', tier: 'silver', pts: 15, name: 'Soren: Gain 1442',
        desc: 'Gain card 1442 as Soren, the Navigator',
        check: { type: 'win_with_toggle', field: 'char_soren_gain' } },
      { id: 'vt_soren_complete', icon: '🔒', tier: 'gold',   pts: 30, name: 'Soren: Complete 1622',
        desc: 'Complete card 1622 as Soren, the Navigator',
        check: { type: 'win_with_toggle', field: 'char_soren_complete' } },

      // ── Emilien, the Scholar ──
      { id: 'vt_emilien_mission',  icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Emilien: Mission Victory',
        desc: 'Complete a Mission as Emilien, the Scholar',
        check: { type: 'win_two_fields', field1: 'character', value1: 'Emilien, the Scholar', field2: 'missionComplete', value2: 'true' } },
      { id: 'vt_emilien_destiny',  icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Emilien: Destiny Victory',
        desc: 'Achieve a Destiny Victory as Emilien, the Scholar',
        check: { type: 'win_two_fields', field1: 'character', value1: 'Emilien, the Scholar', field2: 'destinyVictory', value2: 'true' } },
      { id: 'vt_emilien_epic',     icon: '⚡', tier: 'silver', pts: 20, name: 'Emilien: Epic Victory',
        desc: 'Achieve an Epic Victory as Emilien, the Scholar',
        check: { type: 'win_two_fields', field1: 'character', value1: 'Emilien, the Scholar', field2: 'epicVictory', value2: 'true' } },
      { id: 'vt_emilien_gain',     icon: '🔒', tier: 'silver', pts: 15, name: 'Emilien: Gain 1443',
        desc: 'Gain card 1443 as Emilien, the Scholar',
        check: { type: 'win_with_toggle', field: 'char_emilien_gain' } },
      { id: 'vt_emilien_complete', icon: '🔒', tier: 'gold',   pts: 30, name: 'Emilien: Complete 1623',
        desc: 'Complete card 1623 as Emilien, the Scholar',
        check: { type: 'win_with_toggle', field: 'char_emilien_complete' } },

      // ── Ira, the Medic ──
      { id: 'vt_ira_mission',  icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Ira: Mission Victory',
        desc: 'Complete a Mission as Ira, the Medic',
        check: { type: 'win_two_fields', field1: 'character', value1: 'Ira, the Medic', field2: 'missionComplete', value2: 'true' } },
      { id: 'vt_ira_destiny',  icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Ira: Destiny Victory',
        desc: 'Achieve a Destiny Victory as Ira, the Medic',
        check: { type: 'win_two_fields', field1: 'character', value1: 'Ira, the Medic', field2: 'destinyVictory', value2: 'true' } },
      { id: 'vt_ira_epic',     icon: '⚡', tier: 'silver', pts: 20, name: 'Ira: Epic Victory',
        desc: 'Achieve an Epic Victory as Ira, the Medic',
        check: { type: 'win_two_fields', field1: 'character', value1: 'Ira, the Medic', field2: 'epicVictory', value2: 'true' } },
      { id: 'vt_ira_gain',     icon: '🔒', tier: 'silver', pts: 15, name: 'Ira: Gain 1444',
        desc: 'Gain card 1444 as Ira, the Medic',
        check: { type: 'win_with_toggle', field: 'char_ira_gain' } },
      { id: 'vt_ira_complete', icon: '🔒', tier: 'gold',   pts: 30, name: 'Ira: Complete 1624',
        desc: 'Complete card 1624 as Ira, the Medic',
        check: { type: 'win_with_toggle', field: 'char_ira_complete' } },

      // ── Ariel, the Engineer ──
      { id: 'vt_ariel_mission',  icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Ariel: Mission Victory',
        desc: 'Complete a Mission as Ariel, the Engineer',
        check: { type: 'win_two_fields', field1: 'character', value1: 'Ariel, the Engineer', field2: 'missionComplete', value2: 'true' } },
      { id: 'vt_ariel_destiny',  icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Ariel: Destiny Victory',
        desc: 'Achieve a Destiny Victory as Ariel, the Engineer',
        check: { type: 'win_two_fields', field1: 'character', value1: 'Ariel, the Engineer', field2: 'destinyVictory', value2: 'true' } },
      { id: 'vt_ariel_epic',     icon: '⚡', tier: 'silver', pts: 20, name: 'Ariel: Epic Victory',
        desc: 'Achieve an Epic Victory as Ariel, the Engineer',
        check: { type: 'win_two_fields', field1: 'character', value1: 'Ariel, the Engineer', field2: 'epicVictory', value2: 'true' } },
      { id: 'vt_ariel_gain',     icon: '🔒', tier: 'silver', pts: 15, name: 'Ariel: Gain 1445',
        desc: 'Gain card 1445 as Ariel, the Engineer',
        check: { type: 'win_with_toggle', field: 'char_ariel_gain' } },
      { id: 'vt_ariel_complete', icon: '🔒', tier: 'gold',   pts: 30, name: 'Ariel: Complete 1625',
        desc: 'Complete card 1625 as Ariel, the Engineer',
        check: { type: 'win_with_toggle', field: 'char_ariel_complete' } },

      // ── Tina, the Marine ──
      { id: 'vt_tina_mission',  icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Tina: Mission Victory',
        desc: 'Complete a Mission as Tina, the Marine',
        check: { type: 'win_two_fields', field1: 'character', value1: 'Tina, the Marine', field2: 'missionComplete', value2: 'true' } },
      { id: 'vt_tina_destiny',  icon: '🎖️', tier: 'bronze', pts: 5,  name: 'Tina: Destiny Victory',
        desc: 'Achieve a Destiny Victory as Tina, the Marine',
        check: { type: 'win_two_fields', field1: 'character', value1: 'Tina, the Marine', field2: 'destinyVictory', value2: 'true' } },
      { id: 'vt_tina_epic',     icon: '⚡', tier: 'silver', pts: 20, name: 'Tina: Epic Victory',
        desc: 'Achieve an Epic Victory as Tina, the Marine',
        check: { type: 'win_two_fields', field1: 'character', value1: 'Tina, the Marine', field2: 'epicVictory', value2: 'true' } },
      { id: 'vt_tina_gain',     icon: '🔒', tier: 'silver', pts: 15, name: 'Tina: Gain 1446',
        desc: 'Gain card 1446 as Tina, the Marine',
        check: { type: 'win_with_toggle', field: 'char_tina_gain' } },
      { id: 'vt_tina_complete', icon: '🔒', tier: 'gold',   pts: 30, name: 'Tina: Complete 1626',
        desc: 'Complete card 1626 as Tina, the Marine',
        check: { type: 'win_with_toggle', field: 'char_tina_complete' } },

      // ── Cross-character ──
      { id: 'vt_all_mission', icon: '🌍', tier: 'gold', pts: 40, name: 'All Hands on Deck',
        desc: 'Complete a Mission with all 6 characters',
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
        check: { type: 'unique_win_values', field: 'mission', count: 11,
          filter: { field: 'missionComplete', value: true } } },
      { id: 'vt_missions_all', icon: '📁', tier: 'gold', pts: 50, name: 'Mission Complete',
        desc: 'Complete all 21 missions',
        check: { type: 'unique_win_values', field: 'mission', count: 21,
          filter: { field: 'missionComplete', value: true } } },

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
