import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const SwiperComponent = () => {
  const cards = [
    {
      title: "Affordable Tuition Fees",
      image: "https://via.placeholder.com/600x400?text=Affordable+Tuition+Fees",
    },
    {
      title: "Globally Recognized Degrees",
      image: "https://via.placeholder.com/600x400?text=Globally+Recognized+Degrees",
    },
    {
      title: "World-Class Infrastructure",
      image: "https://via.placeholder.com/600x400?text=World-Class+Infrastructure",
    },
    {
      title: "Safe and Secure Campus Life",
      image: "https://via.placeholder.com/600x400?text=Safe+and+Secure+Campus+Life",
    },
    {
      title: "Multicultural Learning Environment",
      image: "https://via.placeholder.com/600x400?text=Multicultural+Learning+Environment",
    },
    {
      title: "English-Medium Programs",
      image: "https://via.placeholder.com/600x400?text=English-Medium+Programs",
    },
    {
      title: "High-Quality Education Standards",
      image: "https://via.placeholder.com/600x400?text=High-Quality+Education+Standards",
    },
    {
      title: "Opportunities for International Internships",
      image: "https://via.placeholder.com/600x400?text=International+Internships",
    },
    {
      title: "Simplified Admission Process",
      image: "https://via.placeholder.com/600x400?text=Simplified+Admission+Process",
    },
    {
      title: "Modern Medical Equipment and Facilities",
      image: "https://via.placeholder.com/600x400?text=Modern+Medical+Facilities",
    },
    {
      title: "Global Career Opportunities",
      image: "https://via.placeholder.com/600x400?text=Global+Career+Opportunities",
    },
    {
      title: "Comprehensive Curriculum",
      image: "https://via.placeholder.com/600x400?text=Comprehensive+Curriculum",
    },
    {
      title: "Exposure to Diverse Healthcare Systems",
      image: "https://via.placeholder.com/600x400?text=Diverse+Healthcare+Systems",
    },
    {
      title: "Affordable Living Costs",
      image: "https://via.placeholder.com/600x400?text=Affordable+Living+Costs",
    },
    {
      title: "Scholarships and Financial Assistance",
      image: "https://via.placeholder.com/600x400?text=Scholarships+and+Assistance",
    },
    {
      title: "Experienced and Qualified Faculty",
      image: "https://via.placeholder.com/600x400?text=Qualified+Faculty",
    },
    {
      title: "Strong Alumni Network Worldwide",
      image: "https://via.placeholder.com/600x400?text=Strong+Alumni+Network",
    },
    {
      title: "Focus on Practical Training",
      image: "https://via.placeholder.com/600x400?text=Practical+Training",
    },
    {
      title: "Global Networking Opportunities",
      image: "https://via.placeholder.com/600x400?text=Networking+Opportunities",
    },
    {
      title: "Innovative Research Opportunities",
      image: "https://via.placeholder.com/600x400?text=Research+Opportunities",
    },
  ];

  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      loop={true} // Enable looping
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile devices
        640: { slidesPerView: 2, spaceBetween: 15 }, // Small tablets
        1024: { slidesPerView: 3, spaceBetween: 20 }, // Desktop
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper"
    >
      {cards.map((card, index) => (
        <SwiperSlide
          key={index}
          className="rounded-lg overflow-hidden shadow-lg bg-white flex flex-col justify-center items-center text-center p-4"
        >
          <img
            src={card.image}
            alt={card.title}
            className="object-cover w-full h-48 mb-4 rounded-lg"
          />
          <p className="text-lg font-medium text-[#D8C4B6]">{card.title}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
