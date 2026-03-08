import React from "react";
import { ArrowRight, ShoppingBag } from "lucide-react";

const Featured = () => {
  const beatsProducts = [
    {
      name: "Echonix Pro-X Headphones",
      category: "Wireless",
      price: "$299.00",
      image: "/hdphn.png",
    },
    {
      name: "Sonic Buds Elite",
      category: "Earbuds",
      price: "$149.00",
      image: "/erbds.png",
    },
    {
      name: "Leather Carry Case",
      category: "Accessories",
      price: "$45.00",
      image: "/bag.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex justify-between items-end mb-12 border-b border-gray-100 pb-6">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
            Featured Products
          </h2>
        </div>
        <button className="group flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all duration-300">
          See All Products <ArrowRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {beatsProducts.map((product, idx) => (
          <div
            key={idx}
            className="group relative bg-[#f8fafc] rounded-[2rem] p-6 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 border border-transparent hover:border-blue-50"
          >
            <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-white flex items-center justify-center p-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />

              <button className="absolute bottom-4 right-4 bg-blue-600 text-white p-3 rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                <ShoppingBag size={20} />
              </button>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                {product.category}
              </p>
              <h3 className="text-xl font-bold text-gray-800 leading-tight group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>
              <div className="pt-2 flex justify-between items-center">
                <span className="text-2xl font-black text-gray-900">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
