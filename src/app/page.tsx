'use client';
import { Boxes } from '@/components/atoms/common/background-boxes';
import InfinityWalkingLogo from '@/components/molecules/brand-logos';
import ContainerIntro from '@/components/organisms/container-1';
import ContainerAbout from '@/components/organisms/container-about';
import MainLayout from '@/components/templates/main-layout';

export default function Home() {
  return (
    <MainLayout isFull>
      <div className="fixed inset-0 z-0">
        {/* <img src={'/cx-logo.png'} className="absolute w-[100em] " alt="" /> */}
        <Boxes />
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <ContainerIntro />
      </div>
      <div className="">
        <InfinityWalkingLogo />
      </div>
      {/* <div className="min-h-screen">
        <ContainerTwo />
        </div> */}
      <div className="min-h-screen bg-green-100 flex items-center justify-center">
        <ContainerAbout />
      </div>
      <div>
        <div className="w-full bg-white/50 dark:bg-neutral-900/50 border-2 z-10 backdrop-blur-[2px] py-5">
          {/* <HologramText text="clixure." /> */}
        </div>

        {/* Section that controls animation */}
        <div className="min-h-screen bg-blue-100 flex items-center justify-center">
          <h1 className="text-3xl font-bold">3 (controls CircularText)</h1>
        </div>
      </div>

      <div className="min-h-screen bg-yellow-100 flex items-center justify-center">
        <h1 className="text-4xl">4</h1>
      </div>
    </MainLayout>
  );
}
