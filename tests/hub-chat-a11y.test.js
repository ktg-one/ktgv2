import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('HubChat loadout modifiers have accessible role, labels, pressed states, and keyboard focus rings', () => {
  const filePath = path.join(process.cwd(), 'src/app/hub/chat/page.jsx');
  const code = fs.readFileSync(filePath, 'utf8');

  // Verify toolbar semantics
  assert.ok(
    code.includes('role="toolbar" aria-label="Prompt modifiers"'),
    'Modifier loadout must have toolbar role and descriptive aria-label'
  );

  // Verify modifier slots have accessible label and pressed state
  assert.ok(
    code.includes('aria-label={isLoaded ? `Modifier slot ${slotNum}: ${slot.label} (${isActive ? \'active\' : \'inactive\'})` : `Modifier slot ${slotNum}: empty, click to create`}'),
    'Modifier slot buttons must include comprehensive aria-label describing status'
  );

  assert.ok(
    code.includes('aria-pressed={isLoaded ? isActive : undefined}'),
    'Loaded modifier slot buttons must convey toggle state via aria-pressed'
  );

  // Verify keyboard focus styles on modifier slots
  assert.ok(
    code.includes('focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00f0ff]'),
    'Modifier slots must have visible keyboard focus ring'
  );

  // Verify clear slot button has accessible label and visible focus styles
  assert.ok(
    code.includes('aria-label={`Clear modifier slot ${slotNum}: ${slot.label}`}'),
    'Clear slot button must have descriptive aria-label'
  );
  assert.ok(
    code.includes('focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00f0ff]'),
    'Clear slot button must become visible and outline on keyboard focus'
  );

  // Verify cancel preset button
  assert.ok(
    code.includes('aria-label="Cancel saving preset"'),
    'Cancel preset button must have aria-label'
  );
});
