import { useEffect } from "react";
import { metrics } from "../assets/data";

const WhyLeomart = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-4 py-8" data-aos="fade-up">
      <div
        className="text-center mb-8 lg:mb-12"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <h2 className="font-bold text-2xl lg:text-4xl text-[#2DCC70]">
          Why Choose Lomart?
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex items-start"
            data-aos="fade-up"
            data-aos-delay={150 + index * 100}
          >
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
              <div
                className="hidden lg:flex items-center justify-center ml-4"
                data-aos="fade-left"
                data-aos-delay={200 + index * 100}
              >
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
