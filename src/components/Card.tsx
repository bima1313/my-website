import { useRef } from "react";
import { Chip } from "./Chip";
import type { Portfolio } from "../models/portfolio";

interface props {
  portfolioData: Portfolio;
}
export const Card: React.FC<props> = ({ portfolioData }) => {
  const hover = useRef<HTMLInputElement | null>(null);
  function handleHover() {
    hover.current?.classList.add("-translate-y-[5.5rem]");    
  }
  function handleOver() {
    hover.current?.classList.remove("-translate-y-[5.5rem]");    
  }
  return (
    <a href={portfolioData.image.link} target="_blank">
      <div className="w-full rounded-4xl bg-primary sm:w-4/5 md:w-[304px] mx-auto">
        <div
          className="rounded-4xl overflow-hidden md:w-[304px] md:h-48"
          onMouseEnter={handleHover}
          onMouseLeave={handleOver}
          aria-label="Card Button"
        >
          <img
            src={portfolioData.image.imageSource}
            alt={portfolioData.image.imageAlt}
            className="object-cover md:h-full"
          />
          <div
            ref={hover}
            className="w-full h-[88px] transition duration-[400ms] hidden lg:block"
          >
            <div className="px-4 glass h-full rounded-b-4xl">
              <ul className="flex flex-wrap gap-1">
                {portfolioData.categories.map((category) => (
                  <li key={category}>
                    <Chip text={category} />
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-between py-0.5">
                <h2 className="font-montserrat font-semibold text-xl text-dark">
                  {portfolioData.title}
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  fill="#000000"
                  className="mr-2"
                >
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <h2 className="px-6 pt-4 font-montserrat font-semibold text-2xl text-white md:px-4">
            {portfolioData.title}
          </h2>
          <ul className="px-6 pt-4 pb-8 flex flex-wrap gap-3 md:px-4">
            {portfolioData.categories.map((category) => (
              <li key={category}>
                <Chip text={category} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
};
