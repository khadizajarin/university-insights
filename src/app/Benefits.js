// const Benefits = () => {
//     const benefits = [
//       "Affordable Tuition Fees",
//       "Globally Recognized Degrees",
//       "No Entrance Exams Required",
//       "World-Class Infrastructure",
//     ];
//     return (
//       <div className="py-16 bg-gray-100">
//         <h2 className="text-3xl font-bold text-center mb-8">Why Study MBBS Abroad?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
//           {benefits.map((benefit, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-lg text-center"
//             >
//               <p>{benefit}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default Benefits;
  

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// import { EffectCoverflow, Pagination } from "swiper";

// const Benefits = () => {
//   const benefits = [
//     "Affordable Tuition Fees",
//     "Globally Recognized Degrees",
//     "No Entrance Exams Required",
//     "World-Class Infrastructure",
//   ];

//   return (
//     <div className="py-16 bg-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-8">Why Study MBBS Abroad?</h2>
//       <div className="max-w-5xl mx-auto">
//         <Swiper
//           effect="coverflow"
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView="auto"
//           coverflowEffect={{
//             rotate: 30,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           pagination={{ clickable: true }}
//           modules={[EffectCoverflow, Pagination]}
//           className="mySwiper"
//         >
//           {benefits.map((benefit, index) => (
//             <SwiperSlide
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-lg text-center w-[300px]"
//             >
//               <p className="text-lg font-medium">{benefit}</p>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Benefits;

'use client';

import dynamic from 'next/dynamic';

const SwiperComponent = dynamic(() => import('./../components/shared/SwiperComponent'), { ssr: false });

const Benefits = () => {
  return (
    <div className="py-16 bg-[#3E5879]">
      <h2 className="lg:text-3xl text-xl font-bold text-center lg:mb-16 mb-10 lg:mt-10 text-[#D8C4B6] border-2 border-[#D8C4B6] lg:mx-[40rem] mx-[2rem] rounded-md lg:p-4 p-2 ">Why Study MBBS Abroad?</h2>
      <SwiperComponent />
    </div>
  );
};

export default Benefits;

