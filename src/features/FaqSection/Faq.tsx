import { useState } from "react";
import FaqItem from "./FaqItem";
import { faqData } from "../../data/data";
import InfoButton from "../../ui/InfoButton";

function Faq() {
  const [answerId, setAnswerId] = useState<null | number>();

  function handleAnswer(id: number) {
    setAnswerId((prevId) => (prevId === id ? null : id));
  }

  return (
    <article>
      <div className="lg:border-Black/15 mt-16 space-y-5 lg:mt-14 lg:space-y-0 lg:border-t-[1px]">
        {faqData.map((faq) => (
          <FaqItem
            key={faq.id}
            answer={faq.answer}
            question={faq.question}
            onHandleAnswer={() => handleAnswer(faq.id)}
            isAnswerOpen={faq.id === answerId}
          />
        ))}
      </div>

      <InfoButton isFaq />
    </article>
  );
}

export default Faq;
