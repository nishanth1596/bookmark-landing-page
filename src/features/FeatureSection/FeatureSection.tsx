import FeatureItem from "./FeatureItem";

function FeatureSection() {
  return (
    <section className="mx-8 mt-36 text-center lg:mt-28 xl:mt-[11.25rem]">
      <h2 className="mx-auto lg:max-w-[33.74rem]">Features</h2>
      <p className="mx-auto lg:mt-4 lg:max-w-[33.74rem]">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <FeatureItem />
    </section>
  );
}

export default FeatureSection;
