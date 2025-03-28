type NavBarProps = {
  variant: "header" | "footer";
  islargeScreen: boolean;
};

function NavBar({ variant, islargeScreen }: NavBarProps) {
  return (
    <nav
      aria-label={
        variant === "header" ? "Primary Navigation" : "Footer Navigation"
      }
      className={`mx-8 mb-12 flex ${variant === "header" ? "h-screen lg:mx-0 lg:mb-0 lg:h-auto lg:flex-row" : "gap-12 pb-11"} ${islargeScreen && variant === "header" ? "hidden lg:block" : ""} flex-col justify-between text-center lg:mb-0 lg:flex-row lg:pb-0`}
    >
      <ul className="lg:text-Black mt-10 text-xl leading-[1.06rem] tracking-[2.31px] text-white uppercase lg:mt-0 lg:flex lg:items-center lg:gap-12">
        <li
          className={`${variant === "header" ? "NavListHeader" : "NavListFooter"}`}
        >
          <a href="#">features</a>
        </li>
        <li
          className={`${variant === "header" ? "NavListHeader" : "NavListFooter"}`}
        >
          <a href="#">pricing</a>
        </li>
        <li
          className={`${variant === "header" ? "NavListHeader border-b-[1px] border-white/15" : "NavListFooter"}`}
        >
          <a href="#">contact</a>
        </li>

        {variant === "header" && (
          <li
            className={`hover:text-Black active:border-Orange active:text-Orange mt-6 w-full cursor-pointer rounded-[5px] border-2 py-4 font-medium transition-all duration-300 ease-in hover:border-2 hover:border-black hover:bg-white lg:mt-0 ${islargeScreen && "lg:hover:border-Orange lg:active:border-Orange lg:active:text-Orange lg:hover:text-Orange lg:px-8 lg:py-3 lg:hover:border-2"} `}
          >
            <a href="#">login</a>
          </li>
        )}
      </ul>

      <div className="flex items-center justify-center gap-10">
        <a className="group" href="#" aria-label="Check on Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              className="group-hover:fill-Orange duration-300 ease-in group-hover:transition-colors"
              fill="#FFF"
              fillRule="evenodd"
              d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
            />
          </svg>
        </a>

        <a className="group" href="#" aria-label="Check on Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
            <path
              className="group-hover:fill-Orange duration-300 ease-in group-hover:transition-colors"
              fill="#FFF"
              fillRule="evenodd"
              d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
