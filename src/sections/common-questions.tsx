import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faqs } from "../assets/data";

const CommonQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-[1320px] mx-auto px-4 py-8">
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="font-bold text-2xl lg:text-4xl text-[#2DCC70]">
          Common Questions
        </h2>
      </div>
      <div className="max-w-[100vw] mx-auto">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={
              idx == 0
                ? "pt-3 border-t mb-4 border-b border-gray-300"
                : "mb-4 border-b border-gray-300"
            }
          >
            <button
              className="w-full text-left py-3 font-semibold flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(idx)}
            >
              <span>{faq.question}</span>
              <span>
                {openIndex === idx ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </span>
            </button>
            {openIndex === idx && (
              <div className="py-2 text-gray-600 animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-10 bg-[#fefaf1] py-10 px-10 rounded-lg">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
          <div className="mb-5">
            <h4 className="text-xl font-bold mb-3">Still Have Questions?</h4>
            <p>
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <div>
            <button className="btn bg-green-700 text-white px-5 py-2 rounded-md">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonQuestions;
