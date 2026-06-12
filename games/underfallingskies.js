// ── underfallingskies ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
// ── Under Falling Skies ──────────────────────────────────────
  {
    id:     'skies',
    bggId:  306735,
    name:   'Under Falling Skies',
    icon:   '🌆',
    genre:  'Dice Placement · Sci-Fi Defense',
    color:  '#2a7ae0',
    bgColor:'#f0f5ff',
    dimColor:'#80aef0',

    logFields: [
      { id: 'win', label: 'Win?', type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
      { id: 'city',           label: 'City',               type: 'select', options: ['Any / Unknown','London','New York','Tokyo','Berlin','Sydney','Moscow','Rio de Janeiro','Cairo'] },
      { id: 'hardSky',        label: 'Hard Sky Tiles',     type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'roundsLeft',     label: 'Rounds Remaining',   type: 'number', min: 0, max: 10, default: 0 },
      { id: 'shipsDestroyed', label: 'Ships Destroyed',    type: 'number', min: 0, max: 30, default: 5 },
    ],

    achievements: [
      { id: 's_first_win',  icon: '🌟', tier: 'bronze', pts: 10,  name: 'Earth Defender',      desc: 'Win your first city',
        check: { type: 'min_wins', count: 1 } },
      { id: 's_hard_win',   icon: '🌪️', tier: 'gold',   pts: 50,  name: 'Against All Odds',    desc: 'Win with hard sky tiles active',
        check: { type: 'win_with_toggle', field: 'hardSky' } },
      { id: 's_4cities',    icon: '🌍', tier: 'gold',   pts: 40,  name: 'Global Response',     desc: 'Win with 4 different cities',
        check: { type: 'unique_win_values', field: 'city', count: 4 } },
      { id: 's_efficiency', icon: '🎯', tier: 'gold',   pts: 60,  name: 'Efficient Defense',   desc: 'Win with 5+ rounds remaining',
        check: { type: 'win_field_gte', field: 'roundsLeft', value: 5 } },
      { id: 's_destroyer',  icon: '💥', tier: 'silver', pts: 40,  name: 'Total Annihilation',  desc: 'Destroy 20+ ships in a single game',
        check: { type: 'field_gte', field: 'shipsDestroyed', value: 20 } },
      { id: 's_5wins',      icon: '🏙️', tier: 'silver', pts: 25,  name: 'Last Line of Defense',desc: 'Win 5 cities',
        check: { type: 'min_wins', count: 5 } },
      { id: 's_allcities', icon: '🌐', tier: 'gold',   pts: 50,  name: 'World Tour',
        desc: 'Win with 6 different cities',
        check: { type: 'unique_win_values', field: 'city', count: 6 } },
      { id: 's_3streak',  icon: '🔥', tier: 'silver', pts: 25,  name: 'Defender Streak',
        desc: 'Win 3 games in a row',
        check: { type: 'win_streak_game', count: 3 } },
      { id: 's_10ships',  icon: '💥', tier: 'bronze', pts: 10,  name: 'First Blood',
        desc: 'Destroy 10+ ships in a single game',
        check: { type: 'field_gte', field: 'shipsDestroyed', value: 10 } },
      { id: 's_10plays',    icon: '🎮', tier: 'silver', pts: 20,  name: 'War Veteran',         desc: 'Play 10 games total',
        check: { type: 'min_plays', count: 10 } },
      { id: 's_plat',       icon: '💎', tier: 'plat',   pts: 100, name: 'Savior of Earth',     desc: 'Unlock all other Under Falling Skies achievements',
        check: { type: 'all_achievements', ids: ['s_first_win','s_hard_win','s_4cities','s_efficiency','s_destroyer','s_5wins','s_10plays','s_allcities','s_3streak','s_10ships'] } },
    ]
  }
);
