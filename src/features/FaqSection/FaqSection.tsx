import Faq from "./Faq";

function FaqSection() {
  return (
    <section className="mx-8 mt-[8.75rem] text-center lg:mx-auto lg:mt-[9.31rem] lg:max-w-[33.75rem]">
      <h3 className="text-2xl leading-[1.875rem] font-medium tracking-[-0.08px] lg:text-[2rem] lg:leading-[3.25rem] lg:tracking-[-0.1px]">
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
