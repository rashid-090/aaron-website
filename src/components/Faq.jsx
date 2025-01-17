import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqData = [
  {
    question: `What makes Aaron Elevators stand out among elevator companies in Kerala?`,
    answer: `Our 16+ years of expertise, comprehensive service portfolio, and commitment to quality make us a leading choice for elevators in Kerala. We combine innovative technology with superior customer service to deliver exceptional vertical transportation solutions.`,
  },
  {
    question: `How do you ensure the safety of your home elevators in Kerala?`,
    answer: `We implement rigorous safety protocols, use certified components, and conduct regular maintenance checks. Our home lifts in Kerala comply with international safety standards and undergo thorough testing before installation.`,
  },
  {
    question: `What types of maintenance services do you offer for elevators in Kerala?`,
    answer: `We provide comprehensive maintenance packages including 24/7 emergency support, preventive maintenance, and regular safety inspections to ensure your elevator's optimal performance and longevity.`,
  },
  {
    question: `How long does it typically take to install home lifts in Kerala?`,
    answer: `Installation timeframes vary based on the project complexity, but typically range from 3-7 days for standard home elevators. We ensure minimal disruption while maintaining our quality standards.`,
  },
  {
    question: `What factors should I consider when choosing the best elevator company in Kerala?`,
    answer: `Consider factors like experience, service quality, safety standards, maintenance support, and customer reviews. Look for companies offering comprehensive solutions and proven expertise in elevator manufacturing and installation.`,
  },
  {
    question: `Do you provide customization options for residential elevators in Kerala?`,
    answer: `Yes, we offer extensive customization options for home elevators, including design, capacity, safety features, and finishes to match your specific requirements and architectural preferences.`,
  },
 
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="w-11/12 xl:w-10/12 mx-auto grid grid-cols-1 xl:grid-cols-3 gap-10 text-mainclr">
            <div className="h-full flex justify-center items-start flex-col gap-5 mb-10">
                <h2 className="text-3xl xl:text-4xl font-semibold capitalize">
                FAQ
                </h2>
                <div className="h-1 w-14 -mt-1 bg-gradient-to-r from-mainbtn via-mainbtnhrv to-white"></div>
                <p className="text-sm">Find Answers to Common Questions.</p>
                <button className="border-2 border-mainbtn w-fit px-3 h-10 text-mainbtn hover:bg-mainbtn hover:text-white duration-150">
              Learn more
            </button>
          </div>
        <div className="xl:col-span-2 space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="  bg-gray-100 rounded-lg text-mainclr"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-5 py-3  font-medium"
              >
                <span className="text-xs font-medium md:text-base  ">
                  {faq.question}
                </span>
                <div
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <FiChevronDown className="text-lg" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="p-5 border-t-2 text-xs md:text-sm font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQAccordion;
