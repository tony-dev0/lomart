import React from "react";

const metrics = [
  {
    title: "Verified Vendors",
    text: "Every seller on Lomart is carefully vetted. Shop confidently, knowing you’re dealing with real, trusted market vendors.",
    icon: "/QA engineers-bro 2.png",
    arrow: "/__after.png",
  },
  {
    title: "Real-Time Pricing & Availability",
    text: "See up-to-date prices and stock levels. no more guesswork or surprises when you arrive.",
    icon: "/Delivery-cuate 2.png",
    arrow: "/__after (1).png",
  },
  {
    title: "Direct Connection, No Hassles",
    text: "Chat directly with sellers to ask questions, reserve products, or confirm details—all within Lomart.",
    icon: "/Wallet-rafiki 2.png",
  },
];

const WhyLeomart = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-4 py-12 lg:py-16">
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="font-bold text-2xl lg:text-4xl text-[#1B1B20]">
          Why Choose Lomart?
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center text-center max-w-[305px] w-full">
              <div className="mb-4 lg:mb-6">
                <img
                  src={metric.icon}
                  alt={metric.title}
                  className="w-32 h-32 lg:w-48 lg:h-48 object-contain"
                />
              </div>
              <div className="max-w-sm">
                <h3 className="font-bold text-base lg:text-xl text-[#1B1B20] mb-2 lg:mb-3">
                  {metric.title}
                </h3>
                <p className="text-[#6C6C6E] text-sm lg:text-base leading-relaxed">
                  {metric.text}
                </p>
              </div>
            </div>
            {metric.arrow && index < metrics.length - 1 && (
              <div className="hidden lg:flex items-center justify-center ml-4">
                <img
                  src={metric.arrow}
                  alt="Arrow"
                  className="object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyLeomart;
