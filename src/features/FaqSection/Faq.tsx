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
      <div className="mt-16 space-y-5">
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
