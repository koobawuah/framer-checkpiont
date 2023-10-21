import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import Step from "~/components/Step";

export const meta: MetaFunction = () => {
  return [
    { title: "Checkpoint Framer Motion Playground" },
    {
      name: "description",
      content: "A checkpoint simple UI to test out framer moton animations.",
    },
  ];
};

export default function Index() {
  const [step, setStep] = useState(1);

  return (
    <div className="relative w-full h-screen">
      <div className="w-full h-screen overflow-hidden absolute inset-0 bg-gradient-to-r from-[#f0005f] to-isred -z-20 blur-xl opacity-25"></div>
      <div className="p-8 flex flex-col max-w-lg bg-white rounded-lg shadow-xl mx-auto">
        <div className="flex flex-row justfy-between">
          <Step step={1} currentStep={step} />
          <Step step={2} currentStep={step} />
          <Step step={3} currentStep={step} />
          <Step step={4} currentStep={step} />
        </div>
        <div>
          <h1></h1>
          <p></p>
          <p></p>
        </div>
        <div className="flex flex-row justify-between">
          <button className="p-2 hover:bg-slate-200 text-slate-600">
            Back
          </button>
          <button className="bg-isred p-2 rounded full text-white">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
