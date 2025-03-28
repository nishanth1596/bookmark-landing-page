type FeatureButtonProps = {
  title: string;
  onHandleIndex: (id: 1 | 2 | 3) => void;
  id: 1 | 2 | 3;
  isActive: boolean;
};

function FeatureButton({
  title,
  id,
  isActive,
  onHandleIndex,
}: FeatureButtonProps) {
  return (
    <button
      onClick={() => onHandleIndex(id)}
      className={`border-BlueSecond/20 ${isActive ? "text-Black font-medium opacity-100" : "opacity-75"} lg:hover:text-Orange relative block w-full cursor-pointer border-t-[1px] py-5 leading-[17px] transition-all duration-1000 ease-in-out lg:border-t-0`}
    >
      {title}
      <span
        className="absolute bottom-0 left-1/2 inline-block h-[4px] w-[35%] -translate-x-1/2 bg-[var(--color-Orange)] transition-all duration-1000 ease-in-out md:w-[11%] lg:w-[40%]"
        style={{
          transform: isActive ? "scaleX(1)" : "scaleX(0)",
        }}
      ></span>
    </button>
  );
}

export default FeatureButton;
