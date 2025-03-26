type FeatureButtonProps = {
  title: string;
  onHandleIndex: (id: 1 | 2 | 3) => void;
  id: 1 | 2 | 3;
};

function FeatureButton({ title, onHandleIndex, id }: FeatureButtonProps) {
  return (
    <button
      onClick={() => onHandleIndex(id)}
      className="border-BlueSecond/20 block w-full cursor-pointer border-t-[1px] py-5"
    >
      {title}
    </button>
  );
}

export default FeatureButton;
