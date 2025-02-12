
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
const HeroSection = () => {

    return (
      <div className="bg-gradient-to-r from-[#F5EFE7] to-[#D8C4B6] text-[#213555] lg:py-28 py-14 text-center">
        <h1 className="text-6xl font-bold mb-4">Study MBBS Abroad</h1>
        <p className="text-lg mb-6">Start your journey to become a world-class doctor!</p>
        <button className="bg-[#F5EFE7] border-[#213555] border-2 text-[#213555] font-semibold px-6 py-3 rounded-md hover:bg-opacity-60 ">
            <div className='flex flex-row justify-center items-center gap-2'>
                Apply Now <KeyboardTabIcon></KeyboardTabIcon>
            </div>
         
        </button>
      </div>
    );
  };
  
  export default HeroSection;
