import Cursor from '@/components/atoms/custom/custom-cursor';
import FloatingVerticalControls from '@/components/atoms/custom/floating-control';
import { FC, ReactNode } from 'react';
import Header from '../header';
import SmoothScrollWrapper from '@/components/atoms/custom/scroll-wrapper';
import { Boxes } from '@/components/atoms/common/background-boxes';

type Props = {
  children: ReactNode;
  isFull: boolean;
};

const MainLayout: FC<Props> = ({ children, isFull }) => {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* 🔹 Background Layer */}
      <div className="fixed inset-0 z-0">
        <Boxes className="opacity-20" />
      </div>

      {/* 🔹 Foreground Layers */}
      <Cursor />
      <FloatingVerticalControls />
      <Header />

      {/* 🔹 Scrollable Content */}
      <div className="relative  w-full overflow-x-hidden">
        <SmoothScrollWrapper>
          <main className={`min-h-screen ${isFull ? ' px-0' : 'px-10'}`}>
            {children}
          </main>
        </SmoothScrollWrapper>
        <footer>asdsa</footer>
      </div>
    </main>
  );
};

export default MainLayout;
