import React from "react";
import { PackageCheck } from 'lucide-react';
import { Handbag } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';



const Footer = () => {
  const deliveryFeatures = [
    {
      icon: <PackageCheck />,
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
    <div className="bg-blue-100 h-100 p-10 m-10 rounded-3xl flex justify-between flex-col items-center">
      <div className="font-bold tracking-widest leading-7">
        <h1>Experience Streamlined <br/> shopping with Echonix</h1>
      </div>
      <div className="flex justify-around gap-2">
        {deliveryFeatures.map((item, idx) => {
          return (
            <div
              className="flex flex-col gap-2 items-center justify-center"
              key={idx}
            >
              <div>{item.icon}</div>
              <h1 className="font-bold">{item.title}</h1>
              <p className="text-center">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <button className="bg-blue-600 text-white px-3 py-2 mr-3 rounded-2xl flex gap-1 justify-center items-center">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Footer;
