const Benefits = () => {
    const benefits = [
      "Affordable Tuition Fees",
      "Globally Recognized Degrees",
      "No Entrance Exams Required",
      "World-Class Infrastructure",
    ];
    return (
      <div className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Why Study MBBS Abroad?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Benefits;
  