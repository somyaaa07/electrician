import React, { useState } from 'react';
import { Zap, FileText, Wrench, CheckCircle } from 'lucide-react';

export default function ProcessSteps() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Book Online",
      icon: <FileText className="w-6 h-6" />,
      content: "Reach out to us via phone or online, and connect directly with our expert team.We’re always ready to understand your specific panel requirements and technical needs.From consultation to solution, we ensure reliable support and tailored guidance at every step."
    },
    {
      id: 2,
      title: "Detailed Estimate",
      icon: <Wrench className="w-6 h-6" />,
      content: "We provide a comprehensive breakdown of the project scope, defined timelines, and transparent cost estimates.Every detail is carefully tailored to match your exact specifications, ensuring clarity and confidence from the start."
    },
    {
      id: 3,
      title: "Work Planning",
      icon: <Zap className="w-6 h-6" />,
      content: "From design and procurement to rigorous testing and final dispatch, we manage every stage seamlessly.Our end-to-end in-house process ensures quality control, efficiency, and timely delivery at every step."
    },
    {
      id: 4,
      title: "Quality Assurance",
      icon: <CheckCircle className="w-6 h-6" />,
      content: "From inspection approval to compliance documents and customer guidance — we deliver safe, certified, and dependable electrical solutions. Our commitment to quality ensures your complete satisfaction and peace of mind."
    }
  ];

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  const progressPercentage = (currentStep / (steps.length - 1)) * 100;

  return (
    <div className="min-h-screen bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4 font-serif">
            Our <span className="text-[#5dc1d7]">Process</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Follow our simple 4-step process for professional electrical services
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="relative">
            {/* Progress Bar Background */}
            <div className="absolute top-8 left-0 right-0 h-2 bg-gray-200 rounded-full mx-8 sm:mx-12"></div>
            
            {/* Progress Bar Fill */}
            <div 
              className="absolute top-8 left-0 h-2 bg-[#5dc1d7] rounded-full mx-8 sm:mx-12 transition-all duration-500 ease-in-out"
              style={{ width: `calc(${progressPercentage}% - 4rem)` }}
            ></div>

            {/* Step Buttons */}
            <div className="relative flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center z-10">
                  <button
                    onClick={() => handleStepClick(index)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 bg-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 ${
                      index <= currentStep
                        ? 'border-[#5dc1d7] bg-[#5dc1d7] text-white'
                        : 'border-gray-300 text-gray-400 hover:border-[#5dc1d7]/50'
                    } ${
                      index === currentStep ? 'w-20 h-20 sm:w-24 sm:h-24 shadow-2xl' : ''
                    }`}
                  >
                    {index < currentStep ? (
                      <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
                    ) : (
                      <span className="text-2xl sm:text-3xl font-bold">{step.id}</span>
                    )}
                  </button>
                  
                  <div className="mt-4 text-center">
                    <p className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${
                      index <= currentStep ? 'text-[#5dc1d7]' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10">
            {/* Step Icon and Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#5dc1d7]/10 rounded-lg flex items-center justify-center">
                <div className="text-[#5dc1d7]">
                  {steps[currentStep].icon}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Step {currentStep + 1} of {steps.length}</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
                  {steps[currentStep].title}
                </h2>
              </div>
            </div>

            {/* Step Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {steps[currentStep].content}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  currentStep === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white border-2 border-[#5dc1d7] text-[#5dc1d7] hover:bg-[#5dc1d7] hover:text-white shadow-md hover:shadow-lg'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>

              <button
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                disabled={currentStep === steps.length - 1}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  currentStep === steps.length - 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-[#5dc1d7] text-white hover:bg-[#1a9994] shadow-md hover:shadow-lg'
                }`}
              >
                Next
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Feature Points */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {steps.map((step, index) => (
            <div
              key={step.id}
              onClick={() => handleStepClick(index)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                index === currentStep
                  ? 'border-[#5dc1d7] bg-[#5dc1d7]/5 shadow-lg'
                  : 'border-gray-200 hover:border-[#5dc1d7]/50 hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  index === currentStep ? 'bg-[#5dc1d7] text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {step.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500">Step {index + 1}</p>
                  <p className={`text-sm font-semibold ${
                    index === currentStep ? 'text-[#5dc1d7]' : 'text-gray-700'
                  }`}>
                    {step.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}