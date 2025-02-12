const AdmissionProcess = () => {
    const steps = [
      {
        number: 1,
        title: "Research Universities",
        description:
          "Choose a country and university that fits your budget and requirements.",
      },
      {
        number: 2,
        title: "Check Eligibility",
        description:
          "Ensure you meet the eligibility criteria such as grades, language proficiency, and required documents.",
      },
      {
        number: 3,
        title: "Submit Application",
        description:
          "Complete the application form and submit it along with necessary documents.",
      },
      {
        number: 4,
        title: "Receive Offer Letter",
        description:
          "Wait for the university to review your application and issue an offer letter.",
      },
      {
        number: 5,
        title: "Pay Fees & Apply for Visa",
        description:
          "Pay the required fees and start your visa application process.",
      },
      {
        number: 6,
        title: "Fly to Your Destination",
        description: "Book your flight and get ready to start your MBBS journey.",
      },
    ];
  
    const eligibilityCriteria = [
      "Must have completed high school with a minimum grade of 50% in Physics, Chemistry, and Biology.",
      "Must have passed an English language proficiency test (e.g., IELTS, TOEFL) if required.",
      "Must meet the minimum age requirement (usually 17 years).",
      "Must have a valid passport and other necessary travel documents.",
    ];
  
    return (
      <div className="py-16 bg-[#3E5879]">
        <div className=" mx-auto px-4">
          {/* Header */}
          <h2 className="lg:text-3xl text-xl font-bold text-center lg:mb-16 mb-10 lg:mt-10 text-[#D8C4B6] border-2 border-[#D8C4B6] lg:mx-[40rem] mx-[2rem] rounded-md lg:p-4 p-2 ">Admission Process</h2>
  
          {/* Steps Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  Step {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
  
          {/* Eligibility Criteria Section */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">
              Eligibility Criteria
            </h2>
            <ul className="list-disc list-inside bg-white rounded-lg shadow-lg p-8">
              {eligibilityCriteria.map((criteria, index) => (
                <li key={index} className="text-gray-700 mb-4">
                  {criteria}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default AdmissionProcess;
  