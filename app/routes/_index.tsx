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
    <div className="relative w-full h-screen flex flex-col justify-center items-center">
      <div className="w-full h-screen overflow-hidden absolute inset-0 bg-gradient-to-r from-[#f0005f] to-isred -z-20 blur-xl opacity-25"></div>
      <div className="w-96 p-8 bg-white rounded-lg shadow-xl">
        <div className="w-full flex flex-row justify-between">
          <Step step={1} currentStep={step} />
          <Step step={2} currentStep={step} />
          <Step step={3} currentStep={step} />
          <Step step={4} currentStep={step} />
        </div>
        <div className="w-full my-8 space-y-2">
          <h1 className="h-6 my-3 max-w-xs bg-slate-100 rounded-md"></h1>
          <p className="h-4 max-w-lg bg-slate-100 rounded-md"></p>
          <p className="h-4 max-w-md bg-slate-100 rounded-md"></p>
          <p className="h-4 max-w-sm bg-slate-100 rounded-md"></p>
        </div>
        <div className="flex flex-row justify-between">
          <button
            onClick={() => setStep((prev) => (step < 2 ? prev : prev - 1))}
            className="px-4 py-2 hover:bg-slate-50 hover:text-slate-500 text-slate-600 rounded-full"
          >
            Back
          </button>
          <button
            onClick={() => setStep((prev) => (step > 4 ? prev : prev + 1))}
            className="bg-isred px-4 py-2 hover:bg-[#ff4400] rounded-full text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
