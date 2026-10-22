import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cn } from '../src/lib/utils.js';

test('cn merges plain class strings correctly', () => {
  assert.equal(cn('px-2', 'py-1'), 'px-2 py-1');
});

test('cn handles conditional and falsy inputs safely', () => {
  assert.equal(cn('text-red-500', null, undefined, false, 0, ''), 'text-red-500');
});

test('cn resolves conflicting Tailwind CSS classes', () => {
  assert.equal(cn('px-2', 'px-4'), 'px-4');
  assert.equal(cn('bg-red-500', 'bg-blue-500'), 'bg-blue-500');
});

test('cn accepts object and array inputs', () => {
  assert.equal(
    cn(['font-bold', 'text-sm'], { 'opacity-50': true, 'hidden': false }),
    'font-bold text-sm opacity-50'
  );
});
