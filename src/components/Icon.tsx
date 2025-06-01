interface props {
  imageSrc: string;
  imageAlt: string;
}
export const Icon: React.FC<props> = ({ imageSrc, imageAlt }) => {
  return (
    <button className="w-10 h-10 bg-amber-900 rounded-full flex items-center justify-center">
      <img src={imageSrc} alt={imageAlt} className="w-8 h-8" />
    </button>
  );
};
