import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('BlogPreview component source contains clip-path reveal animation configuration', () => {
  const filePath = path.join(process.cwd(), 'src', 'components', 'BlogPreview.jsx');
  const source = fs.readFileSync(filePath, 'utf8');

  // Verify GSAP clipPath reveal configuration
  assert.match(source, /clipPath:\s*["']inset\(100% 0% 0% 0%\)["']/);
  assert.match(source, /clipPath:\s*["']inset\(0% 0% 0% 0%\)["']/);
});

test('BlogPreview component source respects prefers-reduced-motion preference', () => {
  const filePath = path.join(process.cwd(), 'src', 'components', 'BlogPreview.jsx');
  const source = fs.readFileSync(filePath, 'utf8');

  // Verify prefers-reduced-motion check
  assert.match(source, /prefers-reduced-motion/);
});

test('BlogPreview component source configures image scale animation and stagger', () => {
  const filePath = path.join(process.cwd(), 'src', 'components', 'BlogPreview.jsx');
  const source = fs.readFileSync(filePath, 'utf8');

  // Verify image scale animation setup
  assert.match(source, /scale:\s*1\.3/);
  assert.match(source, /stagger:/);
});
