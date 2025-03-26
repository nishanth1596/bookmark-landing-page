import ExtensionCardItem from "./ExtensionCardItem";
import chromeIcon from "../../assets/images/logo-chrome.svg";

function ExtensionSection() {
  return (
    <section className="mx-8 mt-[4.81rem] text-center">
      <h2>Download the extension</h2>
      <p className="text-Black text-[0.94rem] leading-[1.56rem] opacity-50">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>

      <ExtensionCardItem
        browserName="Chrome"
        version={62}
        img={chromeIcon}
        alt="Chrome Logo"
      />
    </section>
  );
}

export default ExtensionSection;

//  Add to Chrome Minimum version 62 Add
// & Install Extension Add to Firefox Minimum version 55  Add to Opera Minimum version 46 Add & Install Extension Frequently
// Asked Questions Here are some of our FAQs. If you have any other questions
// you’d like answered please feel free to email us.
