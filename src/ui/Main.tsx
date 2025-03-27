import ExtensionSection from "../features/ExtensionSection/ExtensionSection";
import FaqSection from "../features/FaqSection/FaqSection";
import FeatureSection from "../features/FeatureSection/FeatureSection";
import HeroSection from "../features/HeroSection/HeroSection";

function Main() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <ExtensionSection />
      <FaqSection />
    </main>
  );
}

export default Main;
