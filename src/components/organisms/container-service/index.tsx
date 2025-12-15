import React from 'react';

type Props = {};

const ContainerService = (props: Props) => {
  const service = [
    { title: 'Digital Ads (MetaAds)', image: '', desc: '' },
    { title: 'Web Development & UI/UX Design', image: '', desc: '' },
    { title: 'Graphic & Brand Design', image: '', desc: '' },
  ];
  return (
    <div className="relative mx-3">
      <h1 className="text-center uppercase text-[8em] -mb-16 font-bold ">
        Apa Yang Kami Sediakan
      </h1>
      <div className="rounded-lg mx-5 flex flex-col  justify-center h-full min-h-80 items-center bg-white ">
        <div className="flex gap-5 my-auto">
          <div className="p-20 bg-amber-600">asdad</div>
          <div className="p-20 bg-amber-600">asdasd</div>
        </div>
        <div className="p-20 bg-amber-600">ssss</div>
      </div>
    </div>
  );
};

export default ContainerService;
