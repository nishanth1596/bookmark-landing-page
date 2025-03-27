import { useState } from "react";
import FaqItem from "./FaqItem";
import { faqData } from "../../data/data";

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
    </article>
  );
}

export default Faq;
