import { extensionCardData } from "../../data/data";
import ExtensionCardItem from "./ExtensionCardItem";

function ExtensionSection() {
  return (
    <section className="mx-8 mt-[4.81rem] text-center">
      <h2>Download the extension</h2>
      <p>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>

      {extensionCardData.map((item) => (
        <ExtensionCardItem
          browserName={item.browserName}
          alt={item.alt}
          img={item.img}
          version={item.version}
          key={item.browserName}
        />
      ))}
    </section>
  );
}

export default ExtensionSection;
