import { CheckIcon } from "@heroicons/react/24/solid";

const Step = ({ step, currentStep }: { step: number; currentStep: number }) => {
  let status =
    currentStep == step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";

  return (
    <div className="w-8 h-8">
      {status === "complete" ? (
        <CheckIcon className="w-6 h-5 text-white" />
      ) : (
        <span>{step}</span>
      )}
    </div>
  );
};

export default Step;
