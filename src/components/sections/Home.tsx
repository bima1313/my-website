import type { FC } from "react";
import castoriceImg from "/src/assets/castorice.webp";
export const Home: FC = () => {
  return (
    <section id="home" >
      <div className="container">
        <div className="w-full flex flex-wrap justify-between">
          <div className="w-1/2 ">
            <h4 className="font-poppins text-2xl tracking-wide">
              Hello, everyone
            </h4>
            <h1 className="py-4 font-poppins text-2xl tracking-wide">
              I'm{" "}
              <span className="font-montserrat font-bold tracking-wider">
                Bima Hamdhika Irfy
              </span>
            </h1>
            <h2 className="font-montserrat text-[28px] font-bold tracking-wider ">
              Frontend Web & Mobile Developer
            </h2>
            <p className="py-16 font-poppins text-xl tracking-wide">
              Spesialized in Frontend Web Development & Flutter Framework
            </p>
            <button className="px-8 py-4 bg-red-500 rounded-3xl font-montserrat text-xl font-bold hover:opacity-75">
              Connect
            </button>
          </div>
          {/* <div className="w-2xs bg-red-300 rounded-full overflow-hidden">
              <img src={img1} alt="image 1" className="w-full object-cover"/>
            </div> */}
          <div className="w-1/2">
            <div className="w-2xs rounded-full overflow-hidden">
              <img src={castoriceImg} alt="castorice" className="w-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
