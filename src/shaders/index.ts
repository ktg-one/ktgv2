import React from "react";
import { HalftoneFlow, type NeuformCraftEffectProps } from "./neuform-isolated/NeuformCraftEffects";

export type PredictiveArcCanvasProps = NeuformCraftEffectProps & {
  variant?: "halftone-flow" | string;
};

export function PredictiveArcCanvas({
  variant = "halftone-flow",
  ...props
}: PredictiveArcCanvasProps) {
  if (variant === "halftone-flow") {
    return <HalftoneFlow {...props} />;
  }
  return <HalftoneFlow {...props} />;
}

export { HalftoneFlow } from "./neuform-isolated/NeuformCraftEffects";
export * from "./neuform-isolated/NeuformCraftEffects";
