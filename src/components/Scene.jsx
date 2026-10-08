import { PredictiveArcCanvas } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <PredictiveArcCanvas
        variant="halftone-flow"
        hue={0}
        saturation={0.16}
        brightness={0.55}
      />
    </div>
  );
}
