import React from "react";
import CountUp from "react-countup";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <section className="bg-slate-700 text-white py-15 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">About ElectroHive </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Empowering you with the latest in electronics at unbeatable prices.
        </p>
      </section>

      <section className=" py-12 px-6 md:px-20 text-center md:text-left">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto md:mx-0">
              ElectroHive started with a vision to make technology accessible
              and affordable for everyone. From smartphones to smart homes, we
              deliver top-notch electronic products with quality, trust, and
              customer satisfaction at the heart of everything we do.
            </p>
          </div>

          <div className=" text-2xl md:text-5xl text-center font-extrabold font-serif p-6">
            <CountUp end={15000} duration={15} suffix="+" />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Mission & Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-6 shadow rounded-lg bg-gray-100">
            <h3 className="text-xl font-semibold">Customer First</h3>
            <p className="mt-2 text-gray-600">
              Your satisfaction is our priority.
            </p>
          </div>
          <div className="p-6 shadow rounded-lg bg-gray-100">
            <h3 className="text-xl font-semibold">Innovation</h3>
            <p className="mt-2 text-gray-600">
              Bringing you the latest technology.
            </p>
          </div>
          <div className="p-6 shadow rounded-lg bg-gray-100">
            <h3 className="text-xl font-semibold">Quality Assurance</h3>
            <p className="mt-2 text-gray-600">
              Only the best products for you.
            </p>
          </div>
          <div className="p-6 shadow rounded-lg bg-gray-100">
            <h3 className="text-xl font-semibold">Fast Delivery</h3>
            <p className="mt-2 text-gray-600">Speedy and reliable shipping.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-800 text-center text-white">
        <h2 className="text-3xl font-bold">Join the ElectroHive Family</h2>
        <p className="mt-4 text-lg">
          Discover, shop, and upgrade your tech today!
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400">
          Shop Now
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
