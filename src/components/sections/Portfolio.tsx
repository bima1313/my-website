import { Card } from "../Card";
import castoriceImg from "/src/assets/castorice.webp";

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className=" w-full my-16">
      <div className="container">
        <div className="py-16">
          <h2 className="font-montserrat font-bold tracking-wider text-4xl mb-12">
            Portfolio
          </h2>
            <Card imageSrc={castoriceImg} imageAlt="Castorice"/>
        </div>
      </div>
    </section>
  );
};
