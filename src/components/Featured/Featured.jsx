import React from "react";
import Headphone from "../../assets/hdphn.png";
import Bag from "../../assets/bag.png";
import Buds from "../../assets/erbds.png";

const Featured = () => {
  const beatsProducts = [
    {
      image: Headphone, // Replace with your actual asset paths
      category: "Wireless",
      name: "Echonix Pro-X Headphones",
      price: "$299.00",
    },
    {
      image: Buds,
      category: "Earbuds",
      name: "Sonic Buds Elite",
      price: "$149.00",
    },
    {
      image: Bag,
      category: "Accessories",
      name: "Leather Carry Case",
      price: "$45.00",
    },
  ];

  return (
    <div className="p-10 mt-10 mb-10 h-100 ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Featured Products</h1>
        <button className="bg-[#2563EB] text-white px-3 py-2 mr-3 rounded-2xl flex gap-1 justify-center items-center">
          See All Products
        </button>
      </div>
      <div className="flex justify-between mt-10 items-center">
        {beatsProducts.map((products, idx) => {
          return (
            <div
              className="h-full flex flex-col items-center bg-[#dce0e4] p-3 gap-4 rounded-2xl"
              key={idx}
            >
              <div className="w-40 h-40 flex items-center justify-center">
                <img src={products.image} alt={products.name} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="text-gray-600 w-full text-left text-sm">{products.category}</div>
              <h1 className="text-2xl font-semibold font-brand">{products.name}t</h1>
              <h2 className="text-blue-600 w-full text-left font-bold text-lg font-brand">{products.price}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
