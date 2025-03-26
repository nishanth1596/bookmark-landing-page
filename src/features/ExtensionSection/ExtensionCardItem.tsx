type ExtensionCardItemProps = {
  img: string;
  alt: string;
  browserName: string;
  version: number;
};

function ExtensionCardItem({
  img,
  alt,
  browserName,
  version,
}: ExtensionCardItemProps) {
  return (
    <div className="">
      <img src={img} alt={alt} />
      <h3>Add to {browserName}</h3>
      <p>Minimum version {version}</p>
    </div>
  );
}

export default ExtensionCardItem;
