import React from "react";

const categories = [
  {
    title: "Fruits & Vegetables",
    description: "fresh picks, daily updated",
    image: "/pngwing 2.png",
    bgColor: "bg-[#FBF3EE]",
    borderColor: "#FBF3EE",
    size: "large",
  },
  {
    title: "Meat & Fish",
    description: "sourced locally, vendor-verified",
    image: "/Ellipse 4.png",
    bgColor: "bg-[#FCE0CA]",
    borderColor: "#FCE0CA",
    size: "small",
  },
  {
    title: "Cooking Essentials",
    description: "oils, spices, seasonings",
    image: "/Ellipse 4 (1).png",
    bgColor: "bg-[#D6F2F3]",
    borderColor: "#D6F2F3",
    size: "small",
  },
  {
    title: "Grains & Staples",
    description: "garri, rice, beans, and more",
    image: "/Ellipse 4 (2).png",
    bgColor: "bg-[#FFECB4]",
    borderColor: "#FFECB4",
    size: "small",
  },
  {
    title: "Home & Cleaning",
    description: "soaps, detergents, and more",
    image: "/Ellipse 4 (3).png",
    bgColor: "bg-[#FFEDF1]",
    borderColor: "#FFEDF1",
    size: "small",
  },
  {
    title: "Pest Control",
    description: "40 items",
    image: "/Ellipse 4 (4).png",
    bgColor: "bg-[#E0D8C9]",
    borderColor: "#E0D8C9",
    size: "small",
  },
  {
    title: "Stationery & Office",
    description: "office supplies, school kits",
    image: "/Ellipse 4 (5).png",
    bgColor: "bg-[#FEE7D7]",
    borderColor: "#FEE7D7",
    size: "small",
  },
];

const PopularCategories = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-4 py-8">
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="font-bold text-2xl lg:text-4xl text-[#2DCC70]">
          Popular Categories
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 auto-rows-[320px] lg:auto-rows-[320px]">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`
              ${category.bgColor}
              ${category.size === "large" ? "lg:row-span-2" : ""}
              ${index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
              ${
                category.size === "small" &&
                "justify-center items-center text-center gap-4 lg:gap-6"
              }
              rounded-2xl flex flex-col justify-between hover:shadow-lg transition-shadow cursor-pointer relative overflow-hidden
            `}
          >
            {category.size === "large" ? (
              <>
                <div className="z-10 relative text-center py-6 lg:py-10">
                  <h3 className="font-bold text-base lg:text-xl text-[#1B1B20] mb-2 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-[#595959] text-sm">
                    {category.description}
                  </p>
                </div>
                <div className="flex-1 flex items-end justify-center">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full object-cover"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="w-40 h-40 bg-transparent rounded-full flex items-center justify-center shadow-sm border-2 border-dashed border-white">
                  <div
                    className="w-full h-full bg-transparent rounded-full flex items-center justify-center border-6"
                    style={{ borderColor: category.borderColor }}
                  >
                    <img
                      src={category.image}
                      alt={category.title}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="z-10 relative">
                  <h3 className="font-bold text-base lg:text-xl text-[#1B1B20] mb-2 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-[#595959] text-sm">
                    {category.description}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
