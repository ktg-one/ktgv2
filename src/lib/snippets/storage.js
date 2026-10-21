import { put, get } from "@vercel/blob";

/**
 * Upload a snippet markdown file to Vercel Blob
 * @param {string} filename - Name of the file (e.g., "success-criteria-lock.md")
 * @param {string} content - Markdown content
 * @returns {Promise<{url: string}>} Blob URL
 */
export async function uploadSnippet(filename, content) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("BLOB_READ_WRITE_TOKEN environment variable is not set");
  }

  const blob = await put(`snippets/${filename}`, content, {
    access: "public",
    contentType: "text/markdown",
  });

  return blob;
}

// OPTIMIZATION: Module-level in-memory cache to store snippet markdown contents by Blob URL.
// Eliminates duplicate network requests to Vercel Blob storage during component re-renders
// and page navigation, reducing latency from ~100-300ms down to 0ms for cached URLs.
const snippetCache = new Map();

/**
 * Get snippet content from Vercel Blob with in-memory caching
 * @param {string} url - Blob URL
 * @returns {Promise<string>} Markdown content
 */
export async function getSnippetContent(url) {
  if (!url) return "";

  if (snippetCache.has(url)) {
    return snippetCache.get(url);
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch snippet: ${response.statusText}`);
  }
  const content = await response.text();
  snippetCache.set(url, content);
  return content;
}

/**
 * Helper to clear the snippet cache (useful for testing)
 */
export function clearSnippetCache() {
  snippetCache.clear();
}
