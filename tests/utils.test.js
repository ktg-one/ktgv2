import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cn } from '../src/lib/utils.js';

test('cn merges single and multiple class name strings', () => {
  assert.equal(cn('px-2', 'py-4'), 'px-2 py-4');
  assert.equal(cn('flex items-center', 'justify-between'), 'flex items-center justify-between');
});

test('cn handles conditional boolean, null, and undefined class inputs', () => {
  assert.equal(cn('btn', true && 'btn-active', false && 'btn-disabled', null, undefined), 'btn btn-active');
});

test('cn resolves conflicting Tailwind CSS classes correctly', () => {
  assert.equal(cn('px-2', 'px-4'), 'px-4');
  assert.equal(cn('text-red-500', 'text-blue-500'), 'text-blue-500');
  assert.equal(cn('bg-black text-white', 'bg-white'), 'text-white bg-white');
});

test('cn handles array and object input formats', () => {
  assert.equal(cn(['px-2', 'py-2']), 'px-2 py-2');
  assert.equal(cn({ 'is-active': true, 'is-hidden': false }), 'is-active');
});
