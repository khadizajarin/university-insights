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
      image: "https://static.wixstatic.com/media/93defe_5ef1a410b76c43d699cc4812168888e0~mv2.png/v1/fill/w_568,h_608,al_c,lg_1,q_85,enc_auto/93defe_5ef1a410b76c43d699cc4812168888e0~mv2.png",
    },
    {
      title: "Globally Recognized Degrees",
      image: "https://studyabroadlife.org/wp-content/uploads/2021/03/Benefits-of-Getting-Bachelors-Degree-from-Australia.jpg",
    },
    {
      title: "World-Class Infrastructure",
      image: "https://www.iowafarmbureau.com/Article/Live/TitleImage/15908/031119-095742",
    },
    {
      title: "Safe and Secure Campus Life",
      image: "https://www.lynn.edu/uploads/img/main-images/_img480x480/Campus_Safety_3200x1800.jpg",
    },
    {
      title: "Multicultural Learning Environment",
      image: "https://esdubai.com/wp-content/uploads/2023/04/multicultural-environment-blog.jpg",
    },
    {
      title: "English-Medium Programs",
      image: "https://i.ytimg.com/vi/HGpr9iHluik/sddefault.jpg",
    },
    {
      title: "High-Quality Education Standards",
      image: "https://slideplayer.com/slide/755731/2/images/4/High+Quality+Standards.jpg",
    },
    {
      title: "Opportunities for International Internships",
      image: "https://www.scholarshipregion.com/wp-content/uploads/2024/03/International-Undergraduate-Internship.jpg",
    },
    {
      title: "Simplified Admission Process",
      image: "https://www.researchgate.net/profile/Octavian-Dospinescu/publication/306040734/figure/fig3/AS:393872908800005@1470918027641/BPMN-for-Admission-Process-We-have-suggested-a-somehow-simplified-version-of-this-generic.png",
    },
    {
      title: "Modern Medical Equipment and Facilities",
      image: "https://businessmoves.com/media/0mxpj5ue/hospital.jpg",
    },
    {
      title: "Global Career Opportunities",
      image: "https://media.licdn.com/dms/image/D5612AQEwYhMPjfm30A/article-cover_image-shrink_720_1280/0/1700115265070?e=2147483647&v=beta&t=FNzXbpbV5_DA_huiwUq4lCrZoP8krNbkDWfGb6_LpzA",
    },
    {
      title: "Comprehensive Curriculum",
      image: "https://cdn.prod.website-files.com/61f7efd44d01cc87c88dc6f3/66d0c0ceb0f02ef0381bf51d_6628b9e970c63f9ab1a4f9f5_The%2520Role%2520of%2520Curriculum%2520in%2520Cognitive%2520Development.png",
    },
    {
      title: "Exposure to Diverse Healthcare Systems",
      image: "https://cdn-clmkg.nitrocdn.com/jZJIONKWXmglJtuZWYfLRXrdMKSdTsmW/assets/images/optimized/rev-9645755/www.eaglegatecollege.edu/wp-content/uploads/2024/08/shutterstock_2264932641-scaled.jpg",
    },
    {
      title: "Affordable Living Costs",
      image: "https://livability.com/wp-content/uploads/2016/02/Affordable_Housing.jpg.webp",
    },
    {
      title: "Scholarships and Financial Assistance",
      image: "https://educationconnect.com.au/wp-content/uploads/2024/05/SCHOLARSHIPS-AND-FINANCIAL-ASSISTANCE-2-scaled.webp",
    },
    {
      title: "Experienced and Qualified Faculty",
      image: "https://media.licdn.com/dms/image/v2/D5612AQFiO_LuNTmaXA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1718346564025?e=2147483647&v=beta&t=HVHNwbIJn3C9KrOegx9NU-amRy2NzKU7LeMgVeU7_UM",
    },
    {
      title: "Strong Alumni Network Worldwide",
      image: "https://collegenroll.com/wp-content/uploads/2023/05/shutterstock_1959040864-550x280.jpg",
    },
    {
      title: "Focus on Practical Training",
      image: "https://blogs.chapman.edu/wp-content/uploads/sites/19/2013/10/Gibbs2a-580x463.jpg",
    },
    {
      title: "Global Networking Opportunities",
      image: "https://149357281.v2.pressablecdn.com/wp-content/uploads/2022/08/2019-05-27-JesseTaylor-161-1024x683.jpg",
    },
    {
      title: "Innovative Research Opportunities",
      image: "https://live.staticflickr.com/65535/52938125511_0f19987f4a_b.jpg",
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
          className="rounded-lg overflow-hidden shadow-lg bg-[#F5EFE7] flex flex-col justify-center items-center text-center p-4"
        >
          <img
            src={card.image}
            alt={card.title}
            className="object-cover w-full h-48 mb-4 rounded-lg"
          />
          <p className="text-lg font-medium text-[#213555]">{card.title}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
