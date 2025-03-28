import Logo from "./Logo";
import NavBar from "./NavBar";

function Footer() {
  return (
    <footer className="mt-[123px] text-center text-white">
      <section className="bg-Blue px-8 py-[3.75rem]">
        <h3 className="text-xs leading-10 font-medium tracking-[4.62px]">
          <span className="uppercase">35,000+ already joined</span>
          <span className="block text-2xl leading-7 font-medium tracking-[-0.08px]">
            Stay up-to-date with what we're doing
          </span>
        </h3>

        <form className="mt-8">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            className="text-Black w-full rounded-[5px] bg-white px-5 py-2.5 text-sm leading-7 font-normal tracking-[0.25px]"
            type="text"
            placeholder="Enter your email address"
          />
          <button className="bg-Orange mt-4 block w-full rounded-[5px] py-2.5 text-sm leading-7 font-medium tracking-[0.25px]">
            Contact us
          </button>
        </form>
      </section>

      <section className="bg-Black flex flex-col items-center">
        <Logo variant="footer" />
        <NavBar variant="footer" />
      </section>
    </footer>
  );
}

export default Footer;
