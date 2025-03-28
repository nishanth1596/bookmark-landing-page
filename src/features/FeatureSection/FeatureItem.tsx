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
    <article className="lg:text-left">
      <div className="border-BlueSecond/20 mx-auto mt-10 border-b-[1px] lg:mt-[4.69rem] lg:grid lg:max-w-[45.625rem] lg:grid-cols-3">
        {featureData.map((item) => (
          <FeatureButton
            title={item.title}
            id={item.id}
            onHandleIndex={handleTabIndex}
            key={item.id}
            isActive={item.id === tabIndex}
          />
        ))}
      </div>

      <div className="mt-[4.5rem] lg:mt-[4.31rem] lg:grid lg:grid-cols-2 lg:gap-[7.81rem]">
        <FeatureItemCard
          card={{
            image: selectedFeatureData?.image ?? "",
            alt: selectedFeatureData?.alt ?? "",
            title: selectedFeatureData?.title ?? "Unkown",
            description:
              selectedFeatureData?.description ?? "No description available",
          }}
        >
          <InfoButton isFaq={false} />
        </FeatureItemCard>
      </div>
    </article>
  );
}

export default FeatureItem;
