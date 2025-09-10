import React from "react";

const History = () => {
  const timeline = [
    {
      year: "2018",
      title: "ElectroHive Founded",
      description:
        "ElectroHive started with a small vision — making quality electronics accessible and affordable for everyone.",
    },
    {
      year: "2020",
      title: "Expansion of Product Range",
      description:
        "We expanded our catalog to include smartphones, wearables, smart home devices, and more.",
    },
    {
      year: "2022",
      title: "15,000+ Happy Customers",
      description:
        "ElectroHive became a trusted platform with thousands of satisfied customers across India.",
    },
    {
      year: "2024",
      title: "Innovation & Future",
      description:
        "Our journey continues with a focus on innovation, customer satisfaction, and global reach.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-slate-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Journey So Far
      </h2>

      <div className="relative border-l border-slate-400 max-w-3xl mx-auto">
        {timeline.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2"></div>
            <h3 className="text-xl font-semibold text-blue-600">{item.year}</h3>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default History;
