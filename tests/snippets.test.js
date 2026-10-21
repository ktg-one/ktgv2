import { test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { getSnippetContent, clearSnippetCache } from '../src/lib/snippets/storage.js';

let originalFetch;

beforeEach(() => {
  clearSnippetCache();
  originalFetch = global.fetch;
});

afterEach(() => {
  global.fetch = originalFetch;
  clearSnippetCache();
});

test('getSnippetContent returns empty string when url is empty or null', async () => {
  assert.equal(await getSnippetContent(''), '');
  assert.equal(await getSnippetContent(null), '');
  assert.equal(await getSnippetContent(undefined), '');
});

test('getSnippetContent fetches from network on first call and caches response for subsequent calls', async () => {
  let fetchCount = 0;
  global.fetch = async (url) => {
    fetchCount++;
    return {
      ok: true,
      text: async () => `# Snippet Content for ${url}`,
    };
  };

  const url = 'https://blob.vercel-storage.com/snippets/test.md';

  // First call should trigger fetch
  const content1 = await getSnippetContent(url);
  assert.equal(content1, '# Snippet Content for https://blob.vercel-storage.com/snippets/test.md');
  assert.equal(fetchCount, 1);

  // Second call should return cached content without calling fetch again
  const content2 = await getSnippetContent(url);
  assert.equal(content2, '# Snippet Content for https://blob.vercel-storage.com/snippets/test.md');
  assert.equal(fetchCount, 1);
});
