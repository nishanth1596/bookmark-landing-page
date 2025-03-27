import illustration1Img from "../assets/images/illustration-features-tab-1.svg";
import illustration2Img from "../assets/images/illustration-features-tab-2.svg";
import illustration3Img from "../assets/images/illustration-features-tab-3.svg";
import chromeIcon from "../assets/images/logo-chrome.svg";
import firefoxIcon from "../assets/images/logo-firefox.svg";
import operaIcon from "../assets/images/logo-opera.svg";

type FaqDataProps = {
  id: number;
  question: string;
  answer: string;
};

export const faqData: FaqDataProps[] = [
  {
    id: 1,
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornaremattis.",
  },
  {
    id: 2,
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.  imperdiet.",
  },
  {
    id: 3,
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    id: 4,
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit. More Info 35,000+ already joined Stay up-to-date with what we’re doing Contact Us Features Pricing Contact",
  },
];

type FeatureData = {
  id: 1 | 2 | 3;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const featureData: FeatureData[] = [
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

type ExtensionCardDataProps = {
  browserName: string;
  version: number;
  img: string;
  alt: string;
};

export const extensionCardData: ExtensionCardDataProps[] = [
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
