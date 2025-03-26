import { useState } from "react";
import FeatureButton from "../../ui/FeatureButton";
import FeatureItemCard from "./FeatureItemCard";

import illustration1Img from "../../assets/images/illustration-features-tab-1.svg";
import illustration2Img from "../../assets/images/illustration-features-tab-2.svg";
import illustration3Img from "../../assets/images/illustration-features-tab-3.svg";

type FeatureData = {
  id: 1 | 2 | 3;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const featureData: FeatureData[] = [
  {
    id: 1,
    title: "Simple Bookmarking",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: illustration1Img,
    alt: "illustration1Img",
  },
  {
    id: 2,
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: illustration2Img,
    alt: "illustration1Img",
  },
  {
    id: 3,
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: illustration3Img,
    alt: "illustration1Img",
  },
];

function FeatureItem() {
  const [tabIndex, setTabIndex] = useState<1 | 2 | 3>(1);

  function handleTabIndex(id: 1 | 2 | 3) {
    setTabIndex(id);
  }

  const selectedFeatureData = featureData.find((item) => item.id === tabIndex);

  return (
    <article>
      <div className="border-BlueSecond/20 mt-10 border-b-[1px]">
        {featureData.map((item) => (
          <FeatureButton
            title={item.title}
            id={item.id}
            onHandleIndex={handleTabIndex}
            key={item.id}
          />
        ))}
      </div>

      <div className="mt-[4.5rem]">
        <FeatureItemCard
          card={{
            image: selectedFeatureData?.image ?? "",
            alt: selectedFeatureData?.alt ?? "",
            title: selectedFeatureData?.title ?? "Unkown",
            description:
              selectedFeatureData?.description ?? "No description available",
          }}
        />
      </div>
    </article>
  );
}

export default FeatureItem;
