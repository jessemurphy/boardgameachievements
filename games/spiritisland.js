// ── spiritisland ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
// ── Spirit Island ─────────────────────────────────────────────
  {
    id:       'spiritisland',
    name:     'Spirit Island',
    icon:     '🏝️',
    genre:    'Cooperative · Area Control · Tower Defense',
    color:    '#2a6e4a',
    bgColor:  '#f0faf4',
    dimColor: '#80c4a0',

    logFields: [
      { id: 'win',        label: 'Win?',          type: 'toggle', trueLabel: 'Yes ✓',   falseLabel: 'No ✗'  },
      { id: 'spirit1',    label: 'Spirit 1',     type: 'select', options: ['A Spread of Rampant Green','Bringer of Dreams and Nightmares',"Lightning's Swift Strike","Ocean's Hungry Grasp",'River Surges in Sunlight','Shadows Flicker Like Flame',"Stone's Unyielding Defiance",'Vital Strength of the Earth','Keeper of the Forbidden Wilds','Sharp Fangs Behind the Leaves','Devouring Teeth Lurk Underfoot','Eyes Watch from the Trees','Fathomless Mud of the Swamp','Fractured Days Split the Sky','Grinning Trickster Stirs Up Trouble','Lure of the Deep Wilderness','Many Minds Move as One','Shifting Memory of Ages','Shroud of Silent Mist','Starlight Seeks Its Form',"Stone's Unyielding Defiance (Aspect)",'Thunderspeaker','Volcano Looming High','Dances Up Earthquakes','Finder of Paths Unseen','Hearth-Vigil','Relentless Gaze of the Sun','Wandering Voice Keens Desolation','Breath of Darkness Down Your Spine','Ember-Eyed Behemoth','Foreboding Dreams of the First People',"Rot and Renewal's Grasping Tide",'Vengeance as a Burning Plague','Wounded Waters Bleeding'] },
      { id: 'spirit2',    label: 'Spirit 2 (optional)', type: 'select', options: ['None','A Spread of Rampant Green','Bringer of Dreams and Nightmares',"Lightning's Swift Strike","Ocean's Hungry Grasp",'River Surges in Sunlight','Shadows Flicker Like Flame',"Stone's Unyielding Defiance",'Vital Strength of the Earth','Keeper of the Forbidden Wilds','Sharp Fangs Behind the Leaves','Devouring Teeth Lurk Underfoot','Eyes Watch from the Trees','Fathomless Mud of the Swamp','Fractured Days Split the Sky','Grinning Trickster Stirs Up Trouble','Lure of the Deep Wilderness','Many Minds Move as One','Shifting Memory of Ages','Shroud of Silent Mist','Starlight Seeks Its Form',"Stone's Unyielding Defiance (Aspect)",'Thunderspeaker','Volcano Looming High','Dances Up Earthquakes','Finder of Paths Unseen','Hearth-Vigil','Relentless Gaze of the Sun','Wandering Voice Keens Desolation','Breath of Darkness Down Your Spine','Ember-Eyed Behemoth','Foreboding Dreams of the First People',"Rot and Renewal's Grasping Tide",'Vengeance as a Burning Plague','Wounded Waters Bleeding'] },
      { id: 'adversary',  label: 'Adversary',    type: 'select', options: [
        'None',
        'Brandenburg-Prussia',
        'England',
        'Sweden',
        'France',
        'Habsburg Miners',
        'Russia',
        'Scotland',
        'Austria-Habsburg',
      ]},
      { id: 'level',      label: 'Adversary Level', type: 'number', min: 0, max: 6, default: 0 },
      { id: 'score',      label: 'Final Score',     type: 'number', min: 0, max: 120, default: 20 },
      { id: 'difficulty', label: 'Difficulty',      type: 'number', min: 0, max: 15, default: 0 },
      { id: 'invaders',   label: 'Invader Cards Remaining', type: 'number', min: 0, max: 12, default: 4 },
      { id: 'dahan',      label: 'Living Dahan',    type: 'number', min: 0, max: 20, default: 6 },
      { id: 'blight',     label: 'Blight on Island',type: 'number', min: 0, max: 15, default: 2 },
      { id: 'noBlight',   label: 'No Blight Placed',type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
    ],

    achievements: [
      // ── First steps ──
      { id: 'si_first',     icon: '🌟', tier: 'bronze', pts: 10, name: 'The Island Awakens',
        desc: 'Win your first game',
        check: { type: 'min_wins', count: 1 } },

      // ── Score milestones ──
      { id: 'si_score20',   icon: '⚔️',  tier: 'bronze', pts: 10, name: 'Spirits Rise',
        desc: 'Score 20+ points in a victory',
        check: { type: 'win_field_gte', field: 'score', value: 20 } },
      { id: 'si_score35',   icon: '🔥', tier: 'silver', pts: 20, name: 'Defenders of the Land',
        desc: 'Score 35+ points in a victory',
        check: { type: 'win_field_gte', field: 'score', value: 35 } },
      { id: 'si_score50',   icon: '💀', tier: 'silver', pts: 30, name: 'Dread Tide',
        desc: 'Score 50+ points in a victory',
        check: { type: 'win_field_gte', field: 'score', value: 50 } },
      { id: 'si_score65',   icon: '🌊', tier: 'gold',   pts: 45, name: 'Overwhelming Power',
        desc: 'Score 65+ points in a victory',
        check: { type: 'win_field_gte', field: 'score', value: 65 } },
      { id: 'si_score80',   icon: '✨', tier: 'gold',   pts: 60, name: 'Terror of the Deep',
        desc: 'Score 80+ points in a victory',
        check: { type: 'win_field_gte', field: 'score', value: 80 } },

      // ── Adversary victories ──
      { id: 'si_any_adv',   icon: '🏴', tier: 'silver', pts: 20, name: 'First Invader Routed',
        desc: 'Win against any adversary (level 1+)',
        check: { type: 'win_field_gte', field: 'level', value: 1 } },
      { id: 'si_adv3',      icon: '⚔️',  tier: 'silver', pts: 25, name: 'Hardened Resistance',
        desc: 'Win against any adversary at level 3+',
        check: { type: 'win_field_gte', field: 'level', value: 3 } },
      { id: 'si_adv6',      icon: '👑', tier: 'gold',   pts: 50, name: 'Maximum Resistance',
        desc: 'Win against any adversary at level 6',
        check: { type: 'win_field_gte', field: 'level', value: 6 } },

      // ── Difficulty milestones ──
      { id: 'si_diff5',     icon: '🌋', tier: 'silver', pts: 25, name: 'Rising Challenge',
        desc: 'Win a game at difficulty 5+',
        check: { type: 'win_field_gte', field: 'difficulty', value: 5 } },
      { id: 'si_diff8',     icon: '🌑', tier: 'gold',   pts: 40, name: 'Against All Odds',
        desc: 'Win a game at difficulty 8+',
        check: { type: 'win_field_gte', field: 'difficulty', value: 8 } },
      { id: 'si_diff10',    icon: '💀', tier: 'gold',   pts: 60, name: 'Island Incarnate',
        desc: 'Win a game at difficulty 10+',
        check: { type: 'win_field_gte', field: 'difficulty', value: 10 } },

      // ── Beat every adversary ──
      { id: 'si_all_adv',   icon: '🌍', tier: 'gold',   pts: 60, name: 'No Mercy for Colonists',
        desc: 'Win against all 8 adversaries (any level)',
        check: { type: 'win_all_values', field: 'adversary', values: [
          'Brandenburg-Prussia','England','Sweden','France',
          'Habsburg Miners','Russia','Scotland','Austria-Habsburg'
        ]}},

      // ── Spirit mastery: base game ──
      { id: 'si_base8',     icon: '🌿', tier: 'silver', pts: 30, name: 'Base Spirits Mastered',
        desc: 'Win with all 8 base game spirits',
        check: { type: 'win_all_values_multifield', fields: ['spirit1','spirit2'], values: [
          'A Spread of Rampant Green',
          'Bringer of Dreams and Nightmares',
          "Lightning's Swift Strike",
          "Ocean's Hungry Grasp",
          'River Surges in Sunlight',
          'Shadows Flicker Like Flame',
          "Stone's Unyielding Defiance",
          'Vital Strength of the Earth',
        ]}},

      // ── Spirit mastery: Branch & Claw ──
      { id: 'si_bc',        icon: '🐾', tier: 'silver', pts: 20, name: 'Branch & Claw Spirits',
        desc: 'Win with both Branch & Claw spirits',
        check: { type: 'win_all_values_multifield', fields: ['spirit1','spirit2'], values: [
          'Keeper of the Forbidden Wilds',
          'Sharp Fangs Behind the Leaves',
        ]}},

      // ── Spirit mastery: Jagged Earth ──
      { id: 'si_je',        icon: '🪨', tier: 'gold',   pts: 40, name: 'Jagged Earth Spirits',
        desc: 'Win with all 13 Jagged Earth spirits',
        check: { type: 'win_all_values_multifield', fields: ['spirit1','spirit2'], values: [
          'Devouring Teeth Lurk Underfoot',
          'Eyes Watch from the Trees',
          'Fathomless Mud of the Swamp',
          'Fractured Days Split the Sky',
          'Grinning Trickster Stirs Up Trouble',
          'Lure of the Deep Wilderness',
          'Many Minds Move as One',
          'Shifting Memory of Ages',
          'Shroud of Silent Mist',
          'Starlight Seeks Its Form',
          "Stone's Unyielding Defiance (Aspect)",
          'Thunderspeaker',
          'Volcano Looming High',
        ]}},

      // ── Spirit mastery: Horizons ──
      { id: 'si_horizons',  icon: '🌅', tier: 'silver', pts: 25, name: 'Horizons Spirits',
        desc: 'Win with all 5 Horizons spirits',
        check: { type: 'win_all_values_multifield', fields: ['spirit1','spirit2'], values: [
          'Dances Up Earthquakes',
          'Finder of Paths Unseen',
          'Hearth-Vigil',
          'Relentless Gaze of the Sun',
          'Wandering Voice Keens Desolation',
        ]}},

      // ── Spirit mastery: Nature Incarnate ──
      { id: 'si_ni',        icon: '🌌', tier: 'gold',   pts: 40, name: 'Nature Incarnate Spirits',
        desc: 'Win with all 6 Nature Incarnate spirits',
        check: { type: 'win_all_values_multifield', fields: ['spirit1','spirit2'], values: [
          'Breath of Darkness Down Your Spine',
          'Ember-Eyed Behemoth',
          'Foreboding Dreams of the First People',
          "Rot and Renewal's Grasping Tide",
          'Vengeance as a Burning Plague',
          'Wounded Waters Bleeding',
        ]}},

      // ── All spirits ──
      { id: 'si_all_spirits', icon: '✨', tier: 'gold', pts: 100, name: 'Every Spirit Rises',
        desc: 'Win at least once with all 34 spirits',
        check: { type: 'win_all_values_multifield', fields: ['spirit1','spirit2'], values: [
          'A Spread of Rampant Green',
          'Bringer of Dreams and Nightmares',
          "Lightning's Swift Strike",
          "Ocean's Hungry Grasp",
          'River Surges in Sunlight',
          'Shadows Flicker Like Flame',
          "Stone's Unyielding Defiance",
          'Vital Strength of the Earth',
          'Keeper of the Forbidden Wilds',
          'Sharp Fangs Behind the Leaves',
          'Devouring Teeth Lurk Underfoot',
          'Eyes Watch from the Trees',
          'Fathomless Mud of the Swamp',
          'Fractured Days Split the Sky',
          'Grinning Trickster Stirs Up Trouble',
          'Lure of the Deep Wilderness',
          'Many Minds Move as One',
          'Shifting Memory of Ages',
          'Shroud of Silent Mist',
          'Starlight Seeks Its Form',
          "Stone's Unyielding Defiance (Aspect)",
          'Thunderspeaker',
          'Volcano Looming High',
          'Dances Up Earthquakes',
          'Finder of Paths Unseen',
          'Hearth-Vigil',
          'Relentless Gaze of the Sun',
          'Wandering Voice Keens Desolation',
          'Breath of Darkness Down Your Spine',
          'Ember-Eyed Behemoth',
          'Foreboding Dreams of the First People',
          "Rot and Renewal's Grasping Tide",
          'Vengeance as a Burning Plague',
          'Wounded Waters Bleeding',
        ]}},

      // ── Constraint achievements ──
      { id: 'si_no_blight', icon: '🌺', tier: 'gold',   pts: 40, name: 'Pristine Island',
        desc: 'Win without any Blight being placed',
        check: { type: 'win_with_toggle', field: 'noBlight' } },
      { id: 'si_dahan10',   icon: '🏘️', tier: 'silver', pts: 25, name: 'Dahan Prevail',
        desc: 'Win with 10+ Dahan still living',
        check: { type: 'win_field_gte', field: 'dahan', value: 10 } },
      { id: 'si_invaders8', icon: '🃏', tier: 'silver', pts: 25, name: 'Quick Victory',
        desc: 'Win with 8+ Invader cards remaining in the deck',
        check: { type: 'win_field_gte', field: 'invaders', value: 8 } },

      // ── Play count ──
      { id: 'si_10plays',   icon: '🎮', tier: 'silver', pts: 20, name: 'Veteran Defender',
        desc: 'Play 10 games total',
        check: { type: 'min_plays', count: 10 } },
      { id: 'si_25wins',    icon: '🏆', tier: 'gold',   pts: 40, name: 'Spirit Council',
        desc: 'Win 25 games',
        check: { type: 'min_wins', count: 25 } },

      // ── Platinum ──
      { id: 'si_plat',      icon: '💎', tier: 'plat', pts: 100, name: 'The Island Endures',
        desc: 'Unlock all other Spirit Island achievements',
        check: { type: 'all_achievements', ids: [
          'si_first',
          'si_score20','si_score35','si_score50','si_score65','si_score80',
          'si_any_adv','si_adv3','si_adv6',
          'si_diff5','si_diff8','si_diff10',
          'si_all_adv',
          'si_base8','si_bc','si_je','si_horizons','si_ni','si_all_spirits',
          'si_no_blight','si_dahan10','si_invaders8',
          'si_10plays','si_25wins',
        ]}},
    ]
  }
);
