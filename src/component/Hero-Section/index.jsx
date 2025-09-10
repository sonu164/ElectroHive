import React from "react";
import Heroimg from "../../assets/hero.jpg";
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-slate-800 via-slate-700 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold ">
            Power Your World with{" "}
            <span className="text-blue-400">ElectroHive</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Smart electronics for modern living – shop the latest gadgets,
            reliable appliances, and innovative solutions all in one place.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold">
              Shop Now
            </button>
            <button className="border border-gray-400 px-6 py-3 rounded-xl hover:bg-gray-700 font-semibold">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={Heroimg}
            alt="ElectroHive Gadgets"
            className="w-80 md:w-[400px] drop-shadow-2xl rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
