

import PublishIcon from '@mui/icons-material/Publish';

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
    <div className="py-16 bg-gradient-to-r from-[#3E5879] to-[#2C3D4F]">
      <div className=" mx-auto px-4">
        {/* Header */}
        <div className='flex justify-center items-center'>
          <h2 className="lg:text-3xl text-xl font-bold text-center lg:mb-16 mb-10 lg:mt-10 text-[#D8C4B6] border-2 border-[#D8C4B6] rounded-md px-10 py-2 inline-block mx-auto">
          Admission Process
          </h2>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 lg:max-w-7xl lg:mx-auto">
          {steps.map((step) => (
            <div
            className="bg-[#F5EFE7] rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105"
          >
            <div className="text-2xl font-bold text-[#3E5879] mb-4">
              Step {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#213555]">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
          
          ))}
        </div>

        {/* Eligibility Criteria Section */}
        <div>
          <div className='flex justify-center items-center'>
            <h2 className="lg:text-3xl text-xl font-bold text-center lg:mb-16 mb-10 lg:mt-10 text-[#D8C4B6] border-2 border-[#D8C4B6] rounded-md px-10 py-2 inline-block mx-auto">
            Eligibility Criteria
            </h2>
          </div>
          <ul className="list-disc list-inside bg-[#F5EFE7] rounded-lg shadow-lg p-8 space-y-4 max-w-7xl mx-auto">
            {eligibilityCriteria.map((criteria, index) => (
              <li
                key={index}
                className="text-gray-700 flex items-start space-x-2"
              >
                <span className="text-[#3E5879]">✔️</span>
                <span>{criteria}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-[#F5EFE7] border-[#213555] border-2 text-[#213555] font-semibold px-6 py-3 rounded-md hover:bg-opacity-60 ">
              <div className='flex flex-row justify-center items-center gap-2'>
                  Submit Application <PublishIcon></PublishIcon>
              </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;

  