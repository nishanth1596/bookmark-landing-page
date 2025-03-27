import FeatureItem from "./FeatureItem";

function FeatureSection() {
  return (
    <section className="mx-8 mt-36 text-center">
      <h2>Features</h2>
      <p>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <FeatureItem />
    </section>
  );
}

export default FeatureSection;
