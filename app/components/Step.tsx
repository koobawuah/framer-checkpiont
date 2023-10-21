import { motion } from "framer-motion";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

const Step = ({ step, currentStep }: { step: number; currentStep: number }) => {
  let status =
    currentStep == step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";

  return (
    <motion.div
      initial={false}
      animate={status}
      variants={{
        inactive: {
          backgroundColor: "var(--white)",
          borderColor: "var(--slate-200)",
          color: "var(--slate-400)",
        },
        active: {
          backgroundColor: "var(--white)",
          borderColor: "var(--isred)",
          color: "var(--isred)",
        },
        complete: {
          backgroundColor: "var(--isred)",
          borderColor: "var(--isred)",
          color: "var(--white)",
        },
      }}
      transition={{ duration: 0.3 }}
      className={`flex h-10 w-10 justify-center items-center rounded-full border-2 font-semibold`}
    >
      {status === "complete" ? (
        <CheckIcon className="w-6 h-6 text-white" />
      ) : (
        <span>{step}</span>
      )}
    </motion.div>
  );
};

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.8}
      stroke="currentColor"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.2 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export default Step;
