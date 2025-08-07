import { useEffect } from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-[1320px] mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div
            className="flex items-center gap-6"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <button className="bg-[#2DCC70] text-white py-3 px-2 md:px-4 md:py-4 h-fit text-xs md:text-sm font-medium flex items-center gap-2">
              <img
                src="/menu (1).png"
                alt="menu icon"
                className="h-4 w-4 md:h-5 md:w-5"
              />
              All Categories
            </button>
            <button className="text-gray-700 text-xs md:text-sm font-medium">
              Offers
            </button>
            <button className="text-gray-700 text-xs md:text-sm font-medium">
              Today's Deals
            </button>
          </div>

          <div className="text-sm" data-aos="fade-left" data-aos-delay="200">
            <span className="text-gray-600">Need help? </span>
            <span className="text-[#05A845] font-medium">
              contact@lomart.com
            </span>
          </div>
        </div>
      </div>

      <div className=" lg:min-h-[600px]">
        <div className="max-w-[1320px] mx-auto px-4 py-6 lg:py-2 flex flex-col lg:flex-row items-center justify-between">
          <div
            className="w-full lg:pr-12 max-w-[520px]"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h1 className="text-4xl lg:text-[55px] font-bold text-[#1B1B20] leading-tight lg:leading-[65px] mb-6">
              Your Local Market, Now Just A Tap Away
            </h1>

            <p className="text-[#666666] text-base lg:text-lg mb-8 leading-relaxed">
              Browse real-time product prices, know what's in stock, and save
              yourself the walk-around. Lomart brings your trusted market
              online.
            </p>

            <div className="mb-8" data-aos="fade-up" data-aos-delay="400">
              <div className="relative flex items-center w-full max-w-[500px]">
                <input
                  type="text"
                  placeholder="Search for oarch tomatoes, yam, pepper, vendor names..."
                  className="bg-white pl-4 pr-16 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#05A845] w-full text-sm lg:text-base"
                />
                <button className="absolute right-2 bg-[#05A845] rounded-md w-12 h-10 flex items-center justify-center">
                  <img
                    src="/search.png"
                    alt="Search Icon"
                    className="h-4 w-4"
                  />
                </button>
              </div>
            </div>

            <div
              className="flex flex-col sm:flex-row  gap-3"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <button className="bg-[#2DCC70] text-[#323232] px-6 py-3 rounded-4xl flex items-center gap-2  text-sm lg:text-base w-full sm:w-auto justify-center">
                <img src="/icon1.svg" alt="explore icon" className="h-5 w-5" />
                Explore Markets
              </button>
              <button className="bg-[#2DCC70] text-[#323232] border-2 border-[#05A845] px-6 py-3 rounded-4xl flex items-center gap-2 text-sm lg:text-base w-full sm:w-auto justify-center">
                <img src="/icon2.svg" alt="sell icon" className="h-5 w-5" />
                Sell on Lomart
              </button>
            </div>
          </div>

          <div
            className="w-full lg:w-1/2 mt-12 lg:mt-0 hidden lg:block"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div className="relative w-full">
              <img
                src="/hero image.png"
                alt="Woman with fresh vegetables"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-white/50 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
