import { createContext, useContext } from "react";

type Card = {
  // tabIndex: number;
  image: string;
  alt: string;
  title: string;
  description: string;
};

type FeatureItemCardContextProps = {
  card: Card;
};

type FeatureItemCardProps = {
  card: Card;
};

const FeatureItemCardContext =
  createContext<FeatureItemCardContextProps | null>(null);

function useFeatureItemCardContext() {
  const context = useContext(FeatureItemCardContext);
  if (!context) {
    throw new Error(
      "useFeatureItemCardContext must be used within a FeatureItemCard",
    );
  }

  return context;
}

function FeatureItemCard({ card }: FeatureItemCardProps) {
  return (
    <FeatureItemCardContext.Provider value={{ card }}>
      <FeatureItemCard.Image />
      <FeatureItemCard.Title />
      <FeatureItemCard.description />
      <FeatureItemCard.Button />
    </FeatureItemCardContext.Provider>
  );
}

export default FeatureItemCard;

FeatureItemCard.Image = function FeatureItemCardImage() {
  const { card } = useFeatureItemCardContext();

  return <img src={card.image} alt={card.alt} />;
};

FeatureItemCard.Title = function FeatureItemCardTitle() {
  const { card } = useFeatureItemCardContext();

  return <h2 className="mt-[4.31rem]">{card.title}</h2>;
};

FeatureItemCard.description = function FeatureItemCardDescription() {
  const { card } = useFeatureItemCardContext();

  return (
    <p className="text-Black text-[.94rem] leading-[1.56rem] font-normal opacity-50">
      {card.description}
    </p>
  );
};

FeatureItemCard.Button = function FeatureItemCardButton() {
  return (
    <a
      className="bg-Blue mt-[15px] inline-block rounded-[5px] px-6 py-2.5 text-sm leading-7 font-medium tracking-[0.25px] text-white"
      href="#"
    >
      More Info
    </a>
  );
};
