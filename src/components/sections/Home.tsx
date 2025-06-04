import { useEffect, useRef, type FC } from "react";
import profileImg from "/src/assets/profile.jpg";

export const Home: FC = () => {
  const titleAnimation = useRef<HTMLHeadingElement | null>(null);
  const imageAnimation = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    titleAnimation.current?.classList.add("translate-x-0");
    titleAnimation.current?.classList.remove("-translate-x-[40rem]");
    imageAnimation.current?.classList.add("translate-x-0");
    imageAnimation.current?.classList.remove("translate-x-[40rem]");
  });
  return (
    <section id="home" className="relative lg:static">
      <div className="w-full flex flex-wrap items-center">
        <div
          ref={titleAnimation}
          className="absolute top-full w-full transition duration-700 -translate-x-[40rem] lg:w-3/4 lg:static 3xl:w-1/2"
        >
          <h4 className="text-xl font-poppins tracking-wide lg:text-2xl">
            Hello, everyone
          </h4>
          <h1 className="text-xl py-1 font-poppins tracking-wide lg:py-4 lg:text-2xl">
            I'm{" "}
            <span className="font-montserrat font-bold text-primary tracking-wider">
              Bima Hamdhika Irfy
            </span>
          </h1>
          <h2 className="text-2xl font-montserrat font-bold tracking-wider lg:text-[28px]">
            Frontend Web & Mobile Developer
          </h2>
          <p className="py-8 font-poppins text-xl tracking-wide 2xl:py-16">
            Spesialized in Frontend Web Development & Flutter
          </p>
          <a
            href="https://wa.me/6285261997775"
            target="_blank"
            className="px-6 py-2 inline-block bg-primary rounded-3xl font-montserrat text-white font-bold hover:opacity-75 transition duration-300 2xl:px-8 2xl:py-4 2xl:text-xl"
          >
            Contact
          </a>
        </div>
        <img
          ref={imageAnimation}
          src={profileImg}
          alt="Bima Photo Profile"
          className="mb-5 mx-auto w-52 h-52 rounded-full object-cover shadow-lg transition duration-700 translate-x-[40rem] 2xl:w-2xs 2xl:h-72 lg:mb-0 3xl:mr-40"
        />
      </div>
    </section>
  );
};
