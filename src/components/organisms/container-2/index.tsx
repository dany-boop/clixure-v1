import FallingText from '@/components/molecules/rigid-text';

const ContainerTwo = () => {
  return (
    <div className="relative mx-3 ">
      <h1 className="text-center uppercase text-[8em] font-bold z-[9]">
        VALUE & APPROACH
      </h1>
      {/* <h1 className="text-center uppercase text-[8em] font-bold z-[9]">
        What We Do
      </h1> */}
      <div className="relative w-full min-h-screen rounded-3xl p-10 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/10 overflow-hidden z-[1]">
        <div className="absolute inset-0">
          <FallingText
            text="Satu tim, semua kebutuhan digital beres. Tim Clixure = mitra yang bisa diajak mikir bareng, bukan cuma eksekutor."
            highlightWords={['Satu', 'Tim', 'Clixure']}
            trigger="scroll"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.7}
            fontSize="5rem"
            mouseConstraintStiffness={0.6}
          />
        </div>
      </div>

      {/* Instruction Text */}
    </div>
  );
};

export default ContainerTwo;
