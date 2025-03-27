import Faq from "./Faq";

function FaqSection() {
  return (
    <section className="mx-8 mt-[8.75rem] text-center">
      <h3 className="text-2xl leading-[1.875rem] font-medium tracking-[-0.08px]">
        Frequently Asked Questions
      </h3>
      <p className="mt-4">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>

      <Faq />
    </section>
  );
}

export default FaqSection;
