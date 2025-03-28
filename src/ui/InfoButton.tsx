type InfoButtonProps = {
  isFaq: boolean;
};

function InfoButton({ isFaq }: InfoButtonProps) {
  return (
    <a
      className={`bg-Blue ${isFaq ? "mt-12" : "mt-[15px]"} dropShadow hover:text-Blue active:text-Blue hover:outline-Blue inline-block cursor-pointer rounded-[5px] px-6 py-2.5 text-sm leading-7 font-medium tracking-[0.25px] text-white transition-all duration-300 ease-in-out hover:scale-x-[1.2] hover:scale-y-[1.1] hover:bg-white hover:outline-1 active:scale-[0.9] active:bg-white`}
      href="#"
    >
      More Info
    </a>
  );
}

export default InfoButton;
