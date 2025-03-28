import { motion } from "framer-motion";

type FaqItemProps = {
  question: string;
  answer: string;
  isAnswerOpen: boolean;
  onHandleAnswer: () => void;
};

function FaqItem({
  question,
  answer,
  isAnswerOpen,
  onHandleAnswer,
}: FaqItemProps) {
  return (
    <div className="border-b-Black/15 group border-b-[1px] pb-7 lg:pt-5 lg:pr-6 lg:pb-3">
      <button
        onClick={onHandleAnswer}
        className="hover:text-Orange flex w-full items-center justify-between leading-8 font-normal opacity-100 transition-all duration-300 ease-in-out group-hover:cursor-pointer lg:text-lg lg:leading-7"
      >
        {question}
        <span className="block">
          <svg
            className={`${isAnswerOpen ? "rotate-180" : ""} transition-all duration-1000 ease-in-out`}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="12"
          >
            <path
              fill="none"
              stroke={isAnswerOpen ? "#fa5959" : "#5267DF"}
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
        </span>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isAnswerOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="mt-[26px] text-left leading-[1.875rem] opacity-75 transition-all duration-1000 ease-in-out lg:mt-8 lg:leading-9 lg:tracking-[0.15px]">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export default FaqItem;
