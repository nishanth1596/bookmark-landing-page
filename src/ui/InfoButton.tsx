type InfoButtonProps = {
  isFaq: boolean;
};

function InfoButton({ isFaq }: InfoButtonProps) {
  return (
    <a
      className={`bg-Blue ${isFaq ? "mt-12" : "mt-[15px]"} dropShadow inline-block rounded-[5px] px-6 py-2.5 text-sm leading-7 font-medium tracking-[0.25px] text-white`}
      href="#"
    >
      More Info
    </a>
  );
}

export default InfoButton;
