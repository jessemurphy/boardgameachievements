// ── skyteam ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
{
  id: 'skyteam',
  name: 'Sky Team',
  icon: '✈️',
  genre: 'Aviation',
  bggId: 373106,
  color: '#3dd1cf',
  logFields: [
    { id: 'win', label: 'Win?', type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
    { id: 'scenario', label: 'Scenario', type: 'select', options: ['YUL (Green)', 'LHR (Green)', 'HND (Green)', 'OSL (Green)', 'ATL (Green)', 'PRG (Green)', 'CTP (Green)', 'SYD (Green)', 'PEK (Green)', 'LHR (Yellow)', 'TGU (Yellow)', 'GIG (Yellow)', 'KEF (Yellow)', 'PRG (Yellow)', 'KUL (Yellow)', 'ATL (Yellow)', 'KBP (Yellow)', 'TER (Yellow)', 'SXM (Yellow)', 'DUS (Yellow)', 'MAD (Yellow)', 'WAW (Yellow)', 'PBH (Red)', 'HND (Red)', 'GIG (Red)', 'OSL (Red)', 'TGU (Red)', 'SXM (Red)', 'SYD (Red)', 'WAW (Red)', 'DUS (Red)', 'NZIR (Red)', 'PEK (Red)', 'KEF (Black)', 'KUL (Black)', 'PBH (Black)', 'CPT (Black)', 'MAD (Black)', 'TER (Black)', 'KBP (Black)', 'NZIR (Black)'] },
  ],
  achievements: [
    { id: 'sky_base_green', icon: '🏆', tier: 'bronze', pts: 10,
      name: 'Student Pilot',
      desc: 'Land at all the base green airports',
      check: { type: 'win_all_values', field: 'scenario', values: ['YUL (Green)', 'LHR (Green)', 'HND (Green)', 'OSL (Green)', 'ATL (Green)', 'PRG (Green)'] } },
    { id: 'sky_turb_green', icon: '🏆', tier: 'bronze', pts: 10,
      name: 'Private Pilot',
      desc: 'Land at all the Turbulence green airports',
      check: { type: 'win_all_values', field: 'scenario', values: ['CTP (Green)', 'SYD (Green)', 'PEK (Green)'] } },
  ]
}
);
