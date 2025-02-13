'use client';

import dynamic from 'next/dynamic';

const SwiperComponent = dynamic(() => import('./../components/shared/SwiperComponent'), { ssr: false });

const Benefits = () => {
  return (
    <div className="py-16 bg-[#3E5879]">
      <div className='flex justify-center items-center'>
        <h2 className="lg:text-3xl text-xl font-bold text-center lg:mb-16 mb-10 lg:mt-10 text-[#D8C4B6] border-2 border-[#D8C4B6] rounded-md px-10 py-2 inline-block mx-auto">
        Why Study MBBS Abroad?
        </h2>
      </div>
      <SwiperComponent />
    </div>
  );
};

export default Benefits;
