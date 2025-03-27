import ExtensionCardItem from "./ExtensionCardItem";
import chromeIcon from "../../assets/images/logo-chrome.svg";
import firefoxIcon from "../../assets/images/logo-firefox.svg";
import operaIcon from "../../assets/images/logo-opera.svg";

type ExtensionCardDataProps = {
  browserName: string;
  version: number;
  img: string;
  alt: string;
};

const extensionCardData: ExtensionCardDataProps[] = [
  {
    browserName: "Chrome",
    version: 62,
    alt: "Chrome Logo",
    img: chromeIcon,
  },
  {
    browserName: "Firefox",
    version: 55,
    alt: "Firefox logo",
    img: firefoxIcon,
  },
  {
    browserName: "Opera",
    version: 46,
    alt: "Opera logo",
    img: operaIcon,
  },
];

function ExtensionSection() {
  return (
    <section className="mx-8 mt-[4.81rem] text-center">
      <h2>Download the extension</h2>
      <p className="text-Black text-[0.94rem] leading-[1.56rem] opacity-50">
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
