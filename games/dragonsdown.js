// ── dragonsdown ──
window.GAME_DEFINITIONS = window.GAME_DEFINITIONS || [];
window.GAME_DEFINITIONS.push(
// ── Test Game ──────────────────────────────────────────────
{
  id: 'dragonsdown',           // unique string, used as localStorage key
  name: 'Dragons Down',
  bggId: 123456,           // BGG game ID (for BGStats import matching)
  color: '#4a7c6f',        // header/accent color
  icon: '🐉',
  // Fields shown in the Log Play modal
  logFields: [
    { id: 'win', label: 'Win?', type: 'toggle', trueLabel: 'Yes ✓', falseLabel: 'No ✗' },
    { id: 'score',    label: 'Score',    type: 'number' },
  //  { id: 'level',    label: 'Level',    type: 'select',      options: ['Easy', 'Normal', 'Hard'] },
    { id: 'solo',     label: 'Solo mode', type: 'toggle' },
    { id: 'avidReader', label: '3 Spells from 3 different scrolls?', type: 'toggle', trueLabel: 'Yes', falseLabel: 'No' },
  ],
  // Achievements list
  achievements: [
    {
      id: 'dd_avid_reader', icon: '📖', tier: 'bronze',
      name: 'Avid Reader',
      desc: 'Learn 3 spells from 3 different scrolls',
      pts: 5,
        check: { type: 'win_with_toggle', field: 'avidReader' },
    },

  ]
}
);
