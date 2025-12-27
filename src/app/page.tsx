'use client';
import { Boxes } from '@/components/atoms/common/background-boxes';
import InfinityWalkingLogo from '@/components/molecules/brand-logos';
import ContainerIntro from '@/components/organisms/container-intro';
import ContainerAbout from '@/components/organisms/container-about';
import MainLayout from '@/components/templates/main-layout';
import Pricing from '@/components/organisms/container-pricing';
import { ContainerService } from '@/components/organisms/container-service';

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
        <ContainerService />
      </div>
      <div className="min-h-screen bg-green-100 flex items-center justify-center">
        <ContainerAbout />
      </div>
      <InfinityWalkingLogo />
      <div className="z-10">
        <Pricing />
      </div>

      <div className="min-h-screen bg-yellow-100 flex items-center justify-center">
        <h1 className="text-4xl">4</h1>
      </div>
    </MainLayout>
  );
}
