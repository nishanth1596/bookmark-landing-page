import heroImg from "../../assets/images/illustration-hero.svg";

function HeroSection() {
  return (
    <section className="mx-8 mt-20">
      <img src={heroImg} alt="" />

      <article>
        <h1 className="text-Black mt-12 text-center text-[1.875rem] leading-10 font-medium tracking-[-0.09px]">
          A Simple Bookmark Manager
        </h1>
        <p className="mt-4 text-center">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <nav className="mt-8" aria-label="Download options">
          <ul className="flex items-center gap-3.5">
            <li className="bg-Blue hover:outline-Blue hover:text-Blue dropShadow cursor-pointer rounded-[5px] px-4 py-2.5 text-sm leading-7 font-medium tracking-[0.25px] text-white transition-all duration-300 ease-in-out hover:scale-[1.1] hover:bg-white hover:outline-1 active:scale-[0.9]">
              <a href="#download">Get it on chrome</a>
            </li>
            <li className="dropShadow hover:outline-Black cursor-pointer rounded-[5px] px-4 py-2.5 text-sm leading-7 font-medium tracking-[.25px] opacity-75 transition-all duration-300 ease-in-out hover:scale-[1.1] hover:outline-1 active:scale-[0.9]">
              <a href="#download">Get it on firefox</a>
            </li>
          </ul>
        </nav>
      </article>
    </section>
  );
}

export default HeroSection;
