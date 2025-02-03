"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            The secret lies within—unlock the box, reveal the truth.
          </p>
        }
        className="h-[40rem] border rounded-md"
      >
        Name the vessel  <span className="text-red-500">of the 2 black pirates</span> 
      </MaskContainer>
    </div>
  );
}
