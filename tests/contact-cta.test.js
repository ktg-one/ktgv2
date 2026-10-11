import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

test("ContactCTA component has accessible form labels and focus ring styling", () => {
  const ctaPath = "src/components/ContactCTA.jsx";
  assert.equal(fs.existsSync(ctaPath), true, "ContactCTA file should exist");
  const content = fs.readFileSync(ctaPath, "utf-8");

  // Verify visual required indicators and aria-required
  assert.match(content, /aria-required="true"/);
  assert.match(content, /<span className="text-\[#00f0ff\]" aria-hidden="true">\*<\/span>/);

  // Verify focus-visible styling
  assert.match(content, /focus-visible:ring-2/);
  assert.match(content, /focus-visible:ring-offset-2/);
});
