import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import crypto from "node:crypto";

test("ThreeUI integration files exist with exact required SHA-256 hashes", () => {
  const expectedHashes = {
    "src/shaders/neuform-isolated/NeuformCraftEffects.tsx":
      "0a1680c3c119dba8c61d946322afa0b64d36dfd80956fb5e7c3fd017d7bfa450",
    "src/shaders/neuform-isolated/sources/nexus-unified-flow.html":
      "fa1a015ae407dc2091c3c96239d28107e973cbc03aa7abef37dd5da791d5428b",
    "src/shaders/threeui.css":
      "efe4447139f1358dd8e9be68edf6fa46cbefbd1de423a4d6c439ca61d2c8eccf",
  };

  for (const [filePath, expectedHash] of Object.entries(expectedHashes)) {
    assert.equal(fs.existsSync(filePath), true, `File missing: ${filePath}`);
    const fileBuffer = fs.readFileSync(filePath);
    const hash = crypto.createHash("sha256").update(fileBuffer).digest("hex");
    assert.equal(hash, expectedHash, `SHA256 mismatch for ${filePath}`);
  }
});

test("Scene component file imports PredictiveArcCanvas from @designcodeio/threeui", () => {
  const scenePath = "src/components/Scene.jsx";
  assert.equal(fs.existsSync(scenePath), true, "Scene component file should exist");
  const content = fs.readFileSync(scenePath, "utf-8");
  assert.match(content, /import\s+\{\s*PredictiveArcCanvas\s*\}\s+from\s+["']@designcodeio\/threeui["']/);
  assert.match(content, /import\s+["']@designcodeio\/threeui\/style\.css["']/);
  assert.match(content, /variant="halftone-flow"/);
});
