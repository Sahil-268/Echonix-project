import React from "react";
import { CircleArrowLeft, CircleArrowRight, ArrowUpRight } from "lucide-react";
import Charger from "../../assets/chrgr.png";
import WirelessCharger from "../../assets/wrlss-chrgr.png";

const Category = () => {
  const categoryData = [
    {
      title: "Speakers",
      desc: "Powerful room-filling sound with deep bass and crystal clear highs.",
      linkText: "View Speakers",
      image: "/spkr.png",
      color: "bg-blue-50",
    },
    {
      title: "Accessories",
      desc: "Premium cases and cables designed to protect and power your gear.",
      linkText: "View Accessories",
      image: Charger,
      color: "bg-slate-100",
    },
    {
      title: "Wireless Chargers",
      desc: "Fast, effortless charging for your headphones and mobile devices.",
      linkText: "View Chargers",
      image: WirelessCharger,
      color: "bg-cyan-50",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            Shop By Category
          </h2>
          <p className="text-gray-500 mt-2 font-medium text-lg">
            Find exactly what your audio setup needs.
          </p>
        </div>
        <div className="flex gap-3 mb-1">
          <button className="text-gray-400 hover:text-[#2563EB] transition-colors p-1">
            <CircleArrowLeft size={36} strokeWidth={1.5} />
          </button>
          <button className="text-gray-400 hover:text-[#2563EB] transition-colors p-1">
            <CircleArrowRight size={36} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categoryData.map((category, idx) => (
          <div
            key={idx}
            className={`group relative flex flex-col justify-between overflow-hidden p-8 rounded-[2.5rem] ${category.color} transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100 border border-transparent hover:border-white`}
          >
            <div className="z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#2563EB] transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-[200px]">
                {category.desc}
              </p>

              <button className="flex items-center gap-2 font-bold text-sm text-[#2563EB] group-hover:underline underline-offset-4">
                {category.linkText} <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="relative mt-8 flex justify-end">
              <div className="absolute inset-0 bg-white/40 blur-3xl rounded-full scale-75 group-hover:scale-110 transition-transform duration-700" />

              <img
                src={category.image}
                alt={category.title}
                className="w-48 h-48 object-contain transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
