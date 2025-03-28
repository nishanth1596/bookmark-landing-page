import { createContext, ReactNode, useContext } from "react";

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
  children: ReactNode;
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

function FeatureItemCard({ card, children }: FeatureItemCardProps) {
  return (
    <FeatureItemCardContext.Provider value={{ card }}>
      <FeatureItemCard.Image />
      <FeatureItemCard.Title />
      <FeatureItemCard.description />
      {children}
    </FeatureItemCardContext.Provider>
  );
}

export default FeatureItemCard;

FeatureItemCard.Image = function FeatureItemCardImage() {
  const { card } = useFeatureItemCardContext();

  return <img className="mx-auto" src={card.image} alt={card.alt} />;
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
