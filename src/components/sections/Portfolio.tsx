import { Card } from "../Card";
import castoriceImg from "/src/assets/castorice.webp";

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="w-full pt-32 pb-16 xl:pb-0">
      <h2 className="font-montserrat font-bold tracking-wider mb-12 text-3xl md:text-4xl">
        Portfolio
      </h2>
      <div className="flex flex-wrap gap-8 3xl:gap-8 md:justify-center lg:justify-start">
        <Card imageSrc={castoriceImg} imageAlt="Castorice" />
        <Card imageSrc={castoriceImg} imageAlt="Castorice" />
        <Card imageSrc={castoriceImg} imageAlt="Castorice" />
      </div>
    </section>
  );
};
