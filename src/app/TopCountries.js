import ExploreIcon from '@mui/icons-material/Explore';

const TopCountries = () => {
  const countries = [
    "Russia", "Uzbekistan", "Philippines",
    "Georgia", "Kyrgyzstan", "Egypt",
  ];
  return (
    <div className="py-16 bg-gradient-to-r from-[#F5EFE7] to-[#D8C4B6]">
      <h2 className="lg:text-3xl text-xl font-bold text-center lg:mb-16 mb-10 lg:mt-10 text-[#3E5879] border-2 border-[#3E5879] lg:mx-[40rem] mx-[2rem] rounded-md lg:p-4 p-2 relative">
        Top Countries
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {countries.map((country, index) => (
          <div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-[#D8C4B6] text-[#3E5879] border-[#213555] border-[0.1rem] rounded-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#3E5879] hover:text-white"
          >
            <img
              src={`https://flagcdn.com/w320/${country.toLowerCase().slice(0, 2)}.png`}
              alt={country}
              className="w-10 h-5 inline-block mr-2"
            />
            <p className="inline">{country}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-20">
        <button className="bg-[#F5EFE7] border-[#213555] border-2 text-[#213555] font-semibold px-6 py-3 rounded-md hover:bg-opacity-60 ">
            <div className='flex flex-row justify-center items-center gap-2'>
                Explore More <ExploreIcon></ExploreIcon>
            </div>
         
        </button>
      </div>
    </div>
  );
};

export default TopCountries;
