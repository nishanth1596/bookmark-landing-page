import { useForm } from "react-hook-form";
import { validateEmail } from "../utils/utils";

import NavBar from "./NavBar";

import Logo from "./Logo";
import errorIcon from "../assets/images/icon-error.svg";

type FormValues = {
  email: string;
};

function Footer() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>();

  function onSubmit(data: FormValues) {
    if (!validateEmail(data.email)) {
      setError("email", {
        message: "Whoops, make sure it's an email",
      });
    }

    return;
  }

  return (
    <footer className="mt-[7.69rem] text-center text-white lg:mt-[9.94rem]">
      <section className="bg-Blue px-8 py-[3.75rem] lg:pt-[3.625rem] lg:pb-[3.25rem]">
        <h3 className="text-xs leading-10 font-medium tracking-[4.62px] lg:mx-auto lg:max-w-[26.44rem] lg:text-[13px] lg:tracking-[5px]">
          <span className="uppercase">35,000+ already joined</span>
          <span className="block text-2xl leading-7 font-medium tracking-[-0.08px] lg:text-[2rem] lg:leading-10 lg:tracking-[-0.1px]">
            Stay up-to-date with what we're doing
          </span>
        </h3>

        <form
          className="mt-8 md:flex md:max-w-[27.63rem] md:items-start md:justify-center md:gap-4 lg:mx-auto lg:mt-9"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative md:w-full">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              className={`text-Black ${errors.email ? "outline-Orange focus:outline-Orange active:outline-Orange outline-2" : ""} active:outline-Blue focus:outline-Blue w-full rounded-[5px] bg-white px-5 py-2.5 pr-8 text-sm leading-7 font-normal tracking-[0.25px]`}
              type="text"
              placeholder="Enter your email address"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <>
                <p className="bg-Orange outline-Orange mt-0 rounded-b-[5px] px-3 pt-1 pb-1.5 text-left text-[10px] font-medium text-white italic opacity-100 outline-2">
                  {errors.email.message}
                </p>
                <span className="absolute top-[24px] right-4 -translate-y-1/2">
                  <img src={errorIcon} alt="Valid email is not provided" />
                </span>
              </>
            )}
          </div>

          <button className="bg-Orange hover:text-Orange active:text-Orange mx-auto mt-4 block w-full cursor-pointer rounded-[5px] py-2.5 text-sm leading-7 font-medium tracking-[0.25px] transition-all duration-300 ease-in-out hover:scale-x-[1.2] hover:scale-y-[1.1] hover:bg-white hover:outline active:scale-[0.9] active:bg-white sm:max-w-32 md:mx-0 md:mt-0">
            Contact us
          </button>
        </form>
      </section>

      <section className="bg-Black lg:bg-Orange flex flex-col items-center">
        <Logo variant="footer" />
        <NavBar variant="footer" islargeScreen />
      </section>
    </footer>
  );
}

export default Footer;
