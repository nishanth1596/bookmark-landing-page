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
    <article className="">
      {faqData.map((faq) => (
        <FaqItem
          key={faq.id}
          answer={faq.answer}
          question={faq.question}
          onHandleAnswer={() => handleAnswer(faq.id)}
          isAnswerOpen={faq.id === answerId}
        />
      ))}

      <InfoButton isFaq />
    </article>
  );
}

export default Faq;
