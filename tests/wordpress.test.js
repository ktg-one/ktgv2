import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getFeaturedImage, formatDate } from '../src/lib/wordpress.js';

test('getFeaturedImage returns source_url when valid embedded featured media exists', () => {
  const post = {
    _embedded: {
      'wp:featuredmedia': [
        { source_url: 'https://ktg.one/wp-content/uploads/2026/01/hero.png' }
      ]
    }
  };
  assert.equal(getFeaturedImage(post), 'https://ktg.one/wp-content/uploads/2026/01/hero.png');
});

test('getFeaturedImage handles missing or empty embedded media safely', () => {
  assert.equal(getFeaturedImage({}), null);
  assert.equal(getFeaturedImage({ _embedded: {} }), null);
  assert.equal(getFeaturedImage({ _embedded: { 'wp:featuredmedia': [] } }), null);
  assert.equal(getFeaturedImage({ _embedded: { 'wp:featuredmedia': [{}] } }), null);
});

test('getFeaturedImage handles null and undefined post safely without throwing', () => {
  assert.equal(getFeaturedImage(null), null);
  assert.equal(getFeaturedImage(undefined), null);
});

test('formatDate formats valid date strings correctly', () => {
  assert.equal(formatDate('2026-03-21T10:00:00'), 'March 21, 2026');
});

test('formatDate handles empty, invalid, null, and undefined date inputs safely', () => {
  assert.equal(formatDate('invalid-date'), '');
  assert.equal(formatDate(''), '');
  assert.equal(formatDate(null), '');
  assert.equal(formatDate(undefined), '');
  assert.equal(formatDate(12345), '');
});
