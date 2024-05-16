import Image from "next/image";
import React from "react";
import Button from "../Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 md:flex-row">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col  xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88"> Putuk Truno Camp Area</h1>
        <p className="reguler-16 mt-6 text-gray-500 xl:mx-w-[520px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          cupiditate repudiandae ex blanditiis reiciendis nisi soluta vel
          inventore minus consequuntur?
        </p>
        <div className="my-11 flex items-center gap-5">
          <div className="flexCenter gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-900 pt-0.5">
            210k
            <span className="regular-16 lg:regular-20 ml-1">Good Reviews</span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How We Work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-gray-900 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-200">Location</p>
              <Image src="/point.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calentias</p>
          </div>
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="reguler-16 text-gray-200">Distance</p>
              <p className="bold-20 text-white">200.10 mil</p>
            </div>
            <div className="flex flex-col">
              <p className="reguler-16 text-gray-200">Elevation</p>
              <p className="bold-20 text-white">2.040 KM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
