import { Icon } from "../Icon";
import githubSvg from "/src/assets/github.svg";
import linkedInSvg from "/src/assets/linkedin.svg";

export const About: React.FC = () => {
  return (
    <section id="about" className="my-20">
      <div className="container">
        <h2 className="font-montserrat font-bold tracking-wider text-4xl">
          About Me
        </h2>
        <p className="font-poppins tracking-wide text-xl text-justify pt-8 pb-4">
          Recent Informatics graduate from Harapan Medan University with a
          strong passion for Front-end Web and Android Development. Having
          experience developing Websites using React and Android apps using
          Flutter for personal projects. A strong problem-solver, adaptable, and
          continuous learner.
        </p>
        <div className="flex">
          <Icon imageSrc={githubSvg} imageAlt="Github Icon"/>
          <Icon imageSrc={linkedInSvg} imageAlt="LinkedIn Icon"/>
        </div>
        <h4 className="font-montserrat font-bold tracking-wider text-[28px] pt-8">
          Tech Stack
        </h4>
        <h5 className="font-montserrat font-bold tracking-wider text-2xl py-8">
          Programming Languanges & Frameworks
        </h5>
        <h5 className="font-montserrat font-bold tracking-wider text-2xl py-8">
          Databases & Backend as a Service (BaaS)
        </h5>
        <h5 className="font-montserrat font-bold tracking-wider text-2xl py-8">
          Tools
        </h5>
      </div>
    </section>
  );
};
