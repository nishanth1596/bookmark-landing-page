import { extensionCardData } from "../../data/data";
import ExtensionCardItem from "./ExtensionCardItem";

function ExtensionSection() {
  return (
    <section id="download" className="mx-8 mt-[4.81rem] text-center lg:mt-60">
      <h2>Download the extension</h2>
      <p className="lg:mx-auto lg:mt-4 lg:max-w-[33.75rem]">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>

      <div className="lg:mx-auto lg:mt-12 lg:grid lg:max-w-[56.94rem] lg:grid-cols-3 lg:gap-x-[2.13rem]">
        {extensionCardData.map((item, index) => (
          <ExtensionCardItem
            browserName={item.browserName}
            alt={item.alt}
            img={item.img}
            version={item.version}
            key={item.browserName}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default ExtensionSection;
