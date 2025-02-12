import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#F5EFE7] to-[#D8C4B6] text-[#213555] lg:py-32 py-14 text-center">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#213555]/30 to-transparent opacity-20 -z-10"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 lg:leading-0 leading-[3.5rem]">
          Study <span className="text-[#D8C4B6] border-[0.1rem] px-2 rounded-md bg-[#213555] border-[#213555]">MBBS</span> Abroad
        </h1>
        <p className="text-lg lg:text-xl font-medium mb-8 max-w-2xl mx-auto">
          Start your journey to become a world-class doctor and achieve your dreams today!
        </p>
        
        {/* Button */}
        <button className="bg-[#213555] hover:bg-[#F5EFE7] border-2 border-[#213555] text-[#F5EFE7] hover:text-[#213555] font-semibold px-8 py-3 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105">
          <div className="flex flex-row justify-center items-center gap-2">
            Apply Now 
            <KeyboardTabIcon className="transition-transform duration-300 transform group-hover:translate-x-2" />
          </div>
        </button>
      </div>

      {/* Decorative Bottom Element */}
      <div className="mt-12">
        <p className="text-sm text-[#213555] font-medium">Explore opportunities in top international universities.</p>
      </div>
    </div>
  );
};

export default HeroSection;
