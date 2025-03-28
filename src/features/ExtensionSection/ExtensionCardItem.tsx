import ExtensionButton from "../../ui/ExtensionButton";

type ExtensionCardItemProps = {
  img: string;
  alt: string;
  browserName: string;
  version: number;
  index: number;
};

const marginClasses = ["lg:mt-0", "lg:mt-10", "lg:mt-20"];

function ExtensionCardItem({
  img,
  alt,
  browserName,
  version,
  index,
}: ExtensionCardItemProps) {
  return (
    <article
      className={`dropShadowExtenstionCard mt-10 ${marginClasses[index]} flex flex-col items-center rounded-2xl`}
    >
      <img src={img} alt={alt} className="mt-12" />
      <h3 className="text-Black mt-8 text-xl leading-6 font-medium tracking-[0.25px]">
        Add to {browserName}
      </h3>
      <p className="mt-1.5 text-[0.94rem] leading-7 opacity-50">
        Minimum version {version}
      </p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="280"
        height="4"
        className="mt-8"
      >
        <path
          fill="#495DCF"
          fillOpacity=".2"
          fillRule="evenodd"
          d="M0 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm280 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-17 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-18 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-17 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm122 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-70 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM88 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM70 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM53 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM35 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM18 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        />
      </svg>

      <ExtensionButton />
    </article>
  );
}

export default ExtensionCardItem;
