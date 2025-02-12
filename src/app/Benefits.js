
'use client';

import dynamic from 'next/dynamic';

const SwiperComponent = dynamic(() => import('./../components/shared/SwiperComponent'), { ssr: false });

const Benefits = () => {
  return (
    <div className="py-16 bg-[#3E5879] ">
      <h2 className="lg:text-3xl text-xl font-bold text-center lg:mb-16 mb-10 lg:mt-10 text-[#D8C4B6] border-2 border-[#D8C4B6] lg:mx-[40rem] mx-[2rem] rounded-md lg:p-4 p-2 ">Why Study MBBS Abroad?</h2>
      <SwiperComponent />
    </div>
  );
};

export default Benefits;

