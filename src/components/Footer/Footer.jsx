import React from "react";
import { PackageCheck } from "lucide-react";
import { Handbag } from "lucide-react";
import { ShieldCheck } from "lucide-react";

const Footer = () => {
  const deliveryFeatures = [
    {
      icon: <PackageCheck />,
      title: "Free Delivery",
      desc: "No hidden costs, delivered straight to your doorstep within 2-3 business days.",
    },
    {
      icon: <Handbag />,
      title: "Self Pickup",
      desc: "Pick up your beats from our nearest experience center at your convenience.",
    },
    {
      icon: <ShieldCheck />,
      title: "Warranty",
      desc: "1-year limited warranty covering all manufacturing defects for peace of mind.",
    },
  ];

  return (
    <footer className="px-6 md:px-10 py-12">
      <div className="bg-[#f8fafc] border border-gray-200 p-12 rounded-[3rem] flex flex-col items-center shadow-sm">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Experience Streamlined <br />
            <span className="text-blue-600">Shopping with Echonix</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl mb-16">
          {deliveryFeatures.map((item, idx) => {
            return (
              <div
                className="group p-6 flex flex-col gap-2 items-center rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2"
                key={idx}
              >
                <div className="mb-6 p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-center border-t border-gray-200 pt-10">
          <button className="bg-[#2563EB] hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold transition-all transform active:scale-95 shadow-lg shadow-blue-100 flex items-center gap-2">
            Start Shopping Now
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
