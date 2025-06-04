import { techStackData } from "../../data/tech-stack-data";
import { Icon } from "../Icon";
import { TechStackSection } from "../TechStackSection";
import githubSvg from "/src/assets/github.svg";
import linkedInSvg from "/src/assets/linkedin.svg";

export const About: React.FC = () => {
  return (
    <section id="about" className="mt-64 pt-32 lg:mt-0">
      <h2 className="font-montserrat font-bold tracking-wider text-3xl md:text-4xl">
        About Me
      </h2>
      <p className="pt-8 pb-4 font-poppins tracking-wide  text-justify lg:text-lg 2xl:text-xl">
        Recent Informatics graduate from Harapan Medan University with a strong
        passion for Front-end Web and Android Development. Having experience
        developing Websites using React and Android apps using Flutter for
        personal projects. A strong problem-solver, adaptable, and continuous
        learner.
      </p>
      <div className="flex gap-4">
        <Icon
          imageSrc={githubSvg}
          imageAlt="Github Icon"
          link="https://github.com/bima1313"
        />
        <Icon
          imageSrc={linkedInSvg}
          imageAlt="LinkedIn Icon"
          link="https://www.linkedin.com/in/bima-hamdhika-irfy/"
        />
      </div>
      <h4 className="font-montserrat font-bold tracking-wider text-2xl md:text-[28px] pt-8">
        Tech Stack
      </h4>
      {techStackData.map((data) => (
        <TechStackSection key={data.title} techStack={data} />
      ))}
    </section>
  );
};
