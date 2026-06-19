// ── cascadia ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
// ── Cascadia ─────────────────────────────────────────────────
  {
    id:       'cascadia',
    name:     'Cascadia',
    icon:     '🌲',
    genre:    'Tile Laying · Wildlife & Habitat',
    color:    '#3a8a4a',
    bgColor:  '#f0faf2',
    dimColor: '#90c89a',

    logFields: [
      { id: 'win',            label: 'Win?',                    type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
      { id: 'score',          label: 'Total Score',             type: 'number', min: 0,  max: 150, default: 80 },
      { id: 'natureTokens',   label: 'Nature Tokens at End',    type: 'number', min: 0,  max: 25,  default: 0 },
      { id: 'natureSpent',    label: 'Nature Tokens Spent',     type: 'number', min: 0,  max: 25,  default: 3 },

      // Wildlife placed (toggle: did you place ANY of this animal?)
      { id: 'hadBears',       label: 'Placed Bears',            type: 'toggle', trueLabel: 'Yes', falseLabel: 'No (0 bears)' },
      { id: 'hadElk',         label: 'Placed Elk',              type: 'toggle', trueLabel: 'Yes', falseLabel: 'No (0 elk)' },
      { id: 'hadSalmon',      label: 'Placed Salmon',           type: 'toggle', trueLabel: 'Yes', falseLabel: 'No (0 salmon)' },
      { id: 'hadHawks',       label: 'Placed Hawks',            type: 'toggle', trueLabel: 'Yes', falseLabel: 'No (0 hawks)' },
      { id: 'hadFoxes',       label: 'Placed Foxes',            type: 'toggle', trueLabel: 'Yes', falseLabel: 'No (0 foxes)' },

      // Wildlife scores
      { id: 'scoreBears',     label: 'Bear Score',              type: 'number', min: 0,  max: 40,  default: 0 },
      { id: 'scoreElk',       label: 'Elk Score',               type: 'number', min: 0,  max: 40,  default: 0 },
      { id: 'scoreSalmon',    label: 'Salmon Score',            type: 'number', min: 0,  max: 40,  default: 0 },
      { id: 'scoreHawks',     label: 'Hawk Score',              type: 'number', min: 0,  max: 40,  default: 0 },
      { id: 'scoreFoxes',     label: 'Fox Score',               type: 'number', min: 0,  max: 40,  default: 0 },

      // Best single wildlife count (tokens of one type)
      { id: 'maxWildlifeCount', label: 'Most of One Wildlife (count)', type: 'number', min: 0, max: 20, default: 5 },

      // Wildlife types used
      { id: 'wildlifeTypes',  label: 'Wildlife Types Used',     type: 'number', min: 1,  max: 5,   default: 5 },

      // Habitat scores
      { id: 'bestHabitatScore',  label: 'Best Single Habitat Score',  type: 'number', min: 0, max: 30, default: 8 },
      { id: 'habitatsOver5',     label: 'Habitats Scoring 5+',        type: 'number', min: 0, max: 5,  default: 2 },
      { id: 'habitatMajorities', label: 'Habitat Majorities Won',     type: 'number', min: 0, max: 5,  default: 1 },

      // Keystone habitats completed
      { id: 'keystonesCompleted', label: 'Keystone Habitats Completed', type: 'number', min: 0, max: 5, default: 1 },
    ],

    completenessFields: ['scoreBears'],

    achievements: [
      // ── Official scoring titles (any play, no win required) ──
      { id: 'ca_65',   icon: '🥾', tier: 'bronze', pts: 5,  name: 'Naturalist',
        desc: 'Score 65+ points (official scoring tier)',
        check: { type: 'field_gte', field: 'score', value: 65 } },
      { id: 'ca_80',   icon: '🌿', tier: 'bronze', pts: 10, name: 'Experienced Naturalist',
        desc: 'Score 80+ points (official scoring tier)',
        check: { type: 'field_gte', field: 'score', value: 80 } },
      { id: 'ca_90',   icon: '🐦', tier: 'silver', pts: 15, name: 'Expert Naturalist',
        desc: 'Score 90+ points (official scoring tier)',
        check: { type: 'field_gte', field: 'score', value: 90 } },
      { id: 'ca_100',  icon: '🌲', tier: 'silver', pts: 25, name: 'Master Naturalist',
        desc: 'Score 100+ points (official scoring tier)',
        check: { type: 'field_gte', field: 'score', value: 100 } },
      { id: 'ca_110',  icon: '🌳', tier: 'gold',   pts: 40, name: 'Legendary Naturalist',
        desc: 'Score 110+ points (official scoring tier)',
        check: { type: 'field_gte', field: 'score', value: 110 } },

      // ── Nature Tokens ──
      { id: 'ca_no_tokens',  icon: '🍂', tier: 'silver', pts: 15, name: 'Natural Spender',
        desc: 'Win a game with no Nature Tokens remaining',
        check: { type: 'win_field_eq', field: 'natureTokens', value: 0 } },
      { id: 'ca_5_tokens',   icon: '🌰', tier: 'silver', pts: 15, name: 'Cone Collector',
        desc: 'Win a game with 5+ Nature Tokens remaining',
        check: { type: 'win_field_gte', field: 'natureTokens', value: 5 } },
      { id: 'ca_10_tokens',  icon: '🌲', tier: 'gold',   pts: 30, name: 'Forester',
        desc: 'Win a game with 10+ Nature Tokens remaining',
        check: { type: 'win_field_gte', field: 'natureTokens', value: 10 } },

      // ── Wildlife absence (win without placing a type) ──
      { id: 'ca_no_bears',   icon: '🐻', tier: 'silver', pts: 20, name: 'Unbearable',
        desc: 'Win without placing any Bears',
        check: { type: 'win_toggle_false', field: 'hadBears' } },
      { id: 'ca_no_elk',     icon: '🦌', tier: 'silver', pts: 20, name: 'Unherd Of',
        desc: 'Win without placing any Elk',
        check: { type: 'win_toggle_false', field: 'hadElk' } },
      { id: 'ca_no_salmon',  icon: '🐟', tier: 'silver', pts: 20, name: 'Gone Fishing',
        desc: 'Win without placing any Salmon',
        check: { type: 'win_toggle_false', field: 'hadSalmon' } },
      { id: 'ca_no_hawks',   icon: '🦅', tier: 'silver', pts: 20, name: 'Fowl Play',
        desc: 'Win without placing any Hawks',
        check: { type: 'win_toggle_false', field: 'hadHawks' } },
      { id: 'ca_no_foxes',   icon: '🦊', tier: 'silver', pts: 20, name: 'Outfoxed',
        desc: 'Win without placing any Foxes',
        check: { type: 'win_toggle_false', field: 'hadFoxes' } },

      // ── Wildlife count & score ──
      { id: 'ca_species',    icon: '🔬', tier: 'gold',   pts: 40, name: 'Species Specialist',
        desc: 'Place 11+ tokens of a single Wildlife type in one game',
        check: { type: 'any_field_max_gte', fields: ['maxWildlifeCount'], value: 11 } },
      { id: 'ca_wildlife10', icon: '🌏', tier: 'gold',   pts: 40, name: 'Thriving Ecosystem',
        desc: 'Score 10+ points for each of the 5 Wildlife types in one game',
        check: { type: 'all_fields_gte', fields: ['scoreBears','scoreElk','scoreSalmon','scoreHawks','scoreFoxes'], value: 10 } },
      { id: 'ca_wildlife20', icon: '🤝', tier: 'silver', pts: 25, name: 'Balanced Ecosystem',
        desc: 'Score 20+ points for two or more Wildlife types in one game',
        check: { type: 'n_fields_gte', fields: ['scoreBears','scoreElk','scoreSalmon','scoreHawks','scoreFoxes'], value: 20, count: 2 } },
      { id: 'ca_wildlife30', icon: '👑', tier: 'gold',   pts: 35, name: 'Dominant Species',
        desc: 'Score 30+ points for a single Wildlife type in one game',
        check: { type: 'any_field_max_gte', fields: ['scoreBears','scoreElk','scoreSalmon','scoreHawks','scoreFoxes'], value: 30 } },

      // ── Habitat ──
      { id: 'ca_majorities', icon: '🗺️', tier: 'bronze', pts: 10, name: 'Grand Vistas',
        desc: 'Win majority for 3+ Habitats in one game',
        check: { type: 'win_field_gte', field: 'habitatMajorities', value: 3 } },
      { id: 'ca_balanced',   icon: '⚖️', tier: 'silver', pts: 25, name: 'Balanced Scenery',
        desc: 'Win with 5+ points in every Habitat',
        check: { type: 'win_field_eq', field: 'habitatsOver5', value: 5 } },
      { id: 'ca_hab12',      icon: '🏔️', tier: 'silver', pts: 20, name: 'Scenic Overlook',
        desc: 'Score 12+ points for a single Habitat in one game',
        check: { type: 'field_gte', field: 'bestHabitatScore', value: 12 } },
      { id: 'ca_hab15',      icon: '🌄', tier: 'gold',   pts: 30, name: 'Natural Wonder',
        desc: 'Score 15+ points for a single Habitat in one game',
        check: { type: 'field_gte', field: 'bestHabitatScore', value: 15 } },

      // ── Constraint wins ──
      { id: 'ca_keystone',   icon: '🪨', tier: 'gold',   pts: 35, name: 'Shaky Foundation',
        desc: 'Win without completing any Keystone Habitats',
        check: { type: 'win_field_eq', field: 'keystonesCompleted', value: 0 } },
      { id: 'ca_diversity',  icon: '🧬', tier: 'gold',   pts: 35, name: 'Focused Collection',
        desc: 'Win using only 3 Wildlife types',
        check: { type: 'win_field_lte', field: 'wildlifeTypes', value: 3 } },
      { id: 'ca_microbiomes',icon: '🔭', tier: 'gold',   pts: 35, name: 'Off the Beaten Path',
        desc: 'Win without claiming any Habitat majority bonuses',
        check: { type: 'win_field_eq', field: 'habitatMajorities', value: 0 } },

      // ── Multi-play ──
      { id: 'ca_5wins',      icon: '📸', tier: 'silver', pts: 20, name: 'Photo Competition',
        desc: 'Win 5 games',
        check: { type: 'min_wins', count: 5 } },
      { id: 'ca_10wins',     icon: '🏆', tier: 'gold',   pts: 35, name: 'Conservation Champion',
        desc: 'Win 10 games',
        check: { type: 'min_wins', count: 10 } },

      // ── Platinum ──
      { id: 'ca_plat',       icon: '💎', tier: 'plat',   pts: 100, name: 'Legendary Naturalist — Complete',
        desc: 'Unlock all other Cascadia achievements',
        check: { type: 'all_achievements', ids: [
          'ca_65','ca_80','ca_90','ca_100','ca_110',
          'ca_no_tokens','ca_5_tokens','ca_10_tokens',
          'ca_no_bears','ca_no_elk','ca_no_salmon','ca_no_hawks','ca_no_foxes',
          'ca_species','ca_wildlife10','ca_wildlife20','ca_wildlife30',
          'ca_majorities','ca_balanced','ca_hab12','ca_hab15',
          'ca_keystone','ca_diversity','ca_microbiomes',
          'ca_5wins','ca_10wins'
        ]} },
    ]
  }
);
