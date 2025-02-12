const TopCountries = () => {
    const countries = [
      "Russia", "Uzbekistan", "Kazakhstan", "Philippines",
      "Georgia", "Kyrgyzstan", "Egypt",
    ];
    return (
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Top Countries</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {countries.map((country, index) => (
            <div
              key={index}
              className="p-6 bg-blue-100 rounded-lg text-center"
            >
              <p>{country}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TopCountries;
  