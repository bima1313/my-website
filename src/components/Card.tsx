interface props {
  imageSrc: string;
  imageAlt: string;
}
export const Card: React.FC<props> = ({ imageSrc, imageAlt }) => {
  return (
    <button className="w-[304px] rounded-4xl overflow-hidden">
      <img src={imageSrc} alt={imageAlt} />
    </button>
  );
};
