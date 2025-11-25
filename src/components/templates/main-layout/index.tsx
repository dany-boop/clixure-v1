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
      <Cursor />
      <FloatingVerticalControls />
      <Header />

      {/* 🔹 Scrollable Content */}
      {/* <SmoothScrollWrapper> */}
      <main className={`min-h-screen ${isFull ? ' px-0' : 'px-10'}`}>
        {children}
      </main>
      {/* </SmoothScrollWrapper> */}
      <footer>asdsa</footer>
    </main>
  );
};

export default MainLayout;
