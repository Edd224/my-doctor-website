'use client';

import { Warning } from '@phosphor-icons/react';

import Image from "next/image"

const Home: React.FC = () => {
  return (
    <section
      className="relative min-h-[60vh] flex flex-col items-center justify-center rounded-20"
    >
      {/* Zobrazenie údajov o ordinácii v ľavom hornom rohu */}
      <div className="absolute top-1 left-0 border-t p-2 bg-black/20 text-white text-sm sm:text-xl rounded-10 shadow-xl">
       
          <>
            <div className="flex justify-center space-x-2">
              <Warning size={32} className='animate-pulse' />
              <p className="bg-gradient-to-r from-red-700 p-2 rounded-10 font-semibold flex-col">Neprítomnosť lekára v ambulancii : <span className='flex px-2'> 25-29.5. 2026</span><span className='flex px-2 '> 5-13.6. 2026</span><span className='flex px-2 '> 10-22.7. 2026</span></p>
            </div>
          </>
      
      </div>

      <div className=" flex flex-col sm:flex-row justify-center items-center p-8 mt-6 border-t border-l bg-gradient-to-b to-main rounded-20 shadow-xl space-y-8 sm:space-y-0">
        <div className="w-full sm:w-1/2 flex  ">
          <h1 className='text-text font-bold text-3xl sm:text-6xl bg-gradient-to-l from-emerald-400  to-text text-transparent bg-clip-text'>Ambulancia klinickej imunologie a alergologie <span className='text-nowrap'>MUDr.Marína Hantáková</span></h1>
        </div>
        <div className="w-full sm:w-1/2 shadow-xl rounded-10 p-4 border-t border-l">
          <Image
            src="/logo.svg"
            alt="test"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
