import Cursor from '@/components/atoms/custom/custom-cursor';
import FloatingVerticalControls from '@/components/atoms/custom/floating-control';
import { FC, ReactNode } from 'react';
import Header from '../header';
import SmoothScrollWrapper from '@/components/atoms/custom/scroll-wrapper';

type Props = {
  children: ReactNode;
};
const MainLayout: FC<Props> = ({ children }) => {
  return (
    <main className="relative max-w-screen overflow-x-hidden ">
      <Cursor />
      <FloatingVerticalControls />

      <Header />

      <div className="z-10  w-full max-w-screen overflow-x-hidden">
        <main className="min-h-screen px-10 ">
          <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
        </main>
        <footer>asdsa</footer>
      </div>
    </main>
  );
};

export default MainLayout;
