import React from "react";

const categories = [
  {
    name: "All Categories",
    icon: "/menu (1).png",
  },
  { name: "Offers" },
  { name: "Today's Deals" },
];

const HeroSection = () => {
  return (
    <div>
      <div>
        <div className="max-w-[1320px] mx-auto px-4 flex flex-wrap items-center gap-2 lg:gap-3 py-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`${
                index === 0 ? "bg-[#05A845] text-white" : "text-[#1B1B20]"
              } px-3 lg:px-4 py-2.5 lg:py-3.5 flex items-center gap-2 text-sm lg:text-[15px] font-medium rounded-md`}
            >
              {category.icon && (
                <img
                  src={category.icon}
                  alt={category.name}
                  className="h-4 w-4"
                />
              )}
              <span className="whitespace-nowrap">{category.name}</span>
            </button>
          ))}
        </div>
        <div
          className="bg-cover bg-center bg-no-repeat min-h-[550px]"
          style={{ backgroundImage: "url('/image 33.svg')" }}
        >
          <div className="max-w-[1320px] mx-auto py-10 px-4 flex flex-col items-start justify-center h-full min-h-[550px] gap-16">
            <div className="max-w-[630px] w-full">
              <h1 className="text-[32px] lg:text-[55px] font-bold text-[#1B1B20] leading-8 lg:leading-14">
                Your Local Market,
                <br className="hidden lg:flex"/> Now Just A Tap Away
              </h1>
              <p className="text-[#595959] mt-4">
                Browse real-time product prices, know what’s in stock, and save
                yourself the walk-around. Lomart brings your trusted market
                online.
              </p>
            </div>
            <div className="max-w-[548px] w-full">
              <div className="relative flex items-center   w-full">
                <input
                  type="text"
                  placeholder="Search for earch tomatoes, yam, pepper, vendor names..."
                  className="bg-white pl-4 pr-12 py-2 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#05A845] w-full h-fit"
                />
                <div className="absolute right-1 bg-[#05A845] rounded-[5px] w-12 h-full flex items-center justify-center">
                  <img
                    src="/search.png"
                    alt="Search Icon"
                    className="h-4 w-4"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <img src="/icon.png" alt="truck icon" className="h-5 w-5" />
                  <p className="text-[#4D4D4D]"> Explore Markets</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/icon (1).png"
                    alt="truck icon"
                    className="h-5 w-5"
                  />
                  <p className="text-[#4D4D4D]">Sell on Lomart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
