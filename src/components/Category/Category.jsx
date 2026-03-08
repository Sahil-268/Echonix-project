import React from "react";
import { CircleArrowLeft } from "lucide-react";
import { CircleArrowRight } from "lucide-react";
import Charger from "../../assets/chrgr.png";
import WirelessCharger from "../../assets/wrlss-chrgr.png";

const Category = () => {
  const categoryData = [
    {
      title: "Speakers",
      desc: "Powerful room-filling sound with deep bass and crystal clear highs.",
      linkText: "View Speakers",
      image: "/spkr.png",
    },
    {
      title: "Accessories",
      desc: "Premium cases and cables designed to protect and power your gear.",
      linkText: "View Accessories",
      image: Charger,
    },
    {
      title: "Wireless Chargers",
      desc: "Fast, effortless charging for your headphones and mobile devices.",
      linkText: "View Chargers",
      image: WirelessCharger,
    },
  ];
  return (
    <div>
      <div className="p-10 mt-10 mb-24 h-100 ">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shop By Category</h1>
          <div>
            <button>
              <CircleArrowLeft />
            </button>
            <button>
              <CircleArrowRight />
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-10 items-center">
          {categoryData.map((category, idx) => {
            return (
              <div
                className="h-full flex flex-col items-center bg-[#dce0e4] p-3 gap-4 rounded-2xl"
                key={idx}
              >
                <div className="text-2xl font-semibold">{category.title}</div>
                <h1 className="">{category.desc}</h1>
                <h2>{category.linkText}</h2>
                <div className="w-40 h-40 flex items-center justify-center">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
