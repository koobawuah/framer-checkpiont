import { CheckIcon } from "@heroicons/react/24/solid";

const Step = ({ step, currentStep }: { step: number; currentStep: number }) => {
  let status =
    currentStep == step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";

  return (
    <div
      className={`${
        status === "active"
          ? "text-isred border-isred bg-white"
          : status === "complete"
          ? "bg-isred border-isred text-white"
          : "border-slate-200 bg-white text-slate-400"
      } flex h-10 w-10 justify-center items-center rounded-full border-2 font-semibold`}
    >
      {status === "complete" ? (
        <CheckIcon className="w-6 h-6 text-white" />
      ) : (
        <span>{step}</span>
      )}
    </div>
  );
};

export default Step;
