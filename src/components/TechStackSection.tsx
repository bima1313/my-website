import { useEffect, useRef } from "react";
import type { TechStack } from "../models/tech-stack";
import type { ImageData } from "../models/image-data";

interface props {
  techStack: TechStack;
}
export const TechStackSection: React.FC<props> = ({ techStack }) => {
  const imageSpacing = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (techStack.images.length > 2) {
      imageSpacing.current?.classList.add("justify-evenly");      
    } else {
      imageSpacing.current?.classList.add("justify-center");
    }
  });
  return (
    <>
      <h5 className="font-montserrat font-bold tracking-wider text-xl md:text-2xl py-8">
        {techStack.title}
      </h5>
      <ul ref={imageSpacing} className="flex flex-wrap gap-5 xl:justify-start">
        {techStack.images.map((data: ImageData) => (
          <li key={data.imageAlt} className="opacity-100 transition duration-300 lg:opacity-50 hover:opacity-100">
            <a href={data.link} target="_blank">
              <img
                src={data.imageSource}
                alt={data.imageAlt}
                className="h-12 md:h-16 2xl:h-[4.5rem]"
              />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};