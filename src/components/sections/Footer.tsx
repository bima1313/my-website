import { Icon } from "../Icon";
import githubSvg from "/src/assets/github.svg";
import linkedInSvg from "/src/assets/linkedin.svg";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-700 px-8 py-8 3xl:px-[96px] 3xl:py-12">
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-wrap justify-around">
            <div>
              <h5 className="font-montserrat font-semibold tracking-wider text-white">
                Navigation
              </h5>
              <ul className="my-4">
                <li className="font-poppins tracking-wide mt-2 text-white hover:text-primary">
                  <a href="#">Home</a>
                </li>
                <li className="font-poppins tracking-wide mt-2 text-white hover:text-primary">
                  <a href="#about">About</a>
                </li>
                <li className="font-poppins tracking-wide mt-2 text-white hover:text-primary">
                  <a href="#portfolio">Portfolio</a>
                </li>
              </ul>
            </div>
            <div className="ml-12">
              <h5 className="font-montserrat font-semibold tracking-wider text-white">
                Social Media
              </h5>
              <ul className="my-4">
                <li className="font-poppins tracking-wide mt-2 text-white hover:text-primary">
                  <a href="">LinkedIn</a>
                </li>
                <li className="font-poppins tracking-wide mt-2 text-white hover:text-primary">
                  <a href="">Github</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="pt-6 text-center font-montserrat font-bold text-4xl tracking-wider text-white mx-auto xl:text-[40px]">
              Let's Connect
            </h4>
            <div className="pt-4 flex gap-4 justify-center">
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
          </div>
        </div>
      </section>
    </footer>
  );
};
