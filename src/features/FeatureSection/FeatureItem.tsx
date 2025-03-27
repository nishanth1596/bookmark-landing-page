import { useState } from "react";
import FeatureButton from "../../ui/FeatureButton";
import FeatureItemCard from "./FeatureItemCard";
import { featureData } from "../../data/data";
import InfoButton from "../../ui/InfoButton";

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
        >
          <InfoButton />
        </FeatureItemCard>
      </div>
    </article>
  );
}

export default FeatureItem;
