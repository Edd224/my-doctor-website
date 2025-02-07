'use client';

import { Warning } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import Image from "next/image"

const Home: React.FC = () => {
  const [vacationInfo, setVacationInfo] = useState<string>('');
  const [patientTime, setPatientTime] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctorInfo = async () => {
      try {
        const response = await fetch('/api/doctor-info');
        if (!response.ok) {
          throw new Error(`Chyba: ${response.status}`);
        }

        const data = await response.json();
        if (data.error) {
          setError(data.error);
        } else {
          setVacationInfo(data.vacationInfo);
          setPatientTime(data.patientTime);
        }
      } catch (err) {
        setError('Nastala chyba pri načítavaní údajov.');
        console.error(err);
      }
    };

    fetchDoctorInfo();
  }, []);

  console.log('Dovolenka:', vacationInfo);
  console.log('Pacienti objednaní na čas:', patientTime);

  return (
    <section
      className="relative min-h-[60vh] flex flex-col items-center justify-center rounded-20"
    >
      {/* Zobrazenie údajov o ordinácii v ľavom hornom rohu */}
      <div className="absolute top-0 left-0 p-2 bg-black/20 text-white text-sm sm:text-xl rounded-10 shadow-xl">
        {error ? (
          <p className="text-red-500">Chyba: {error}</p>
        ) : (
          <>
            {/* <p className="mb-2 bg-gradient-to-r from-primary p-2 rounded-10 font-semibold">Pacienti objednaní na čas: {patientTime || 'Načítava sa...'}</p> */}
            <div className="flex justify-center items-center space-x-2">
              <Warning size={32} className='animate-pulse' />
              <p className="bg-gradient-to-r from-red-700 p-2 rounded-10 font-semibold">{vacationInfo || 'Načítava sa...'}</p>
            </div>
          </>
        )}
      </div>

      <div className=" flex flex-col sm:flex-row justify-center items-center p-8 mt-6 border-t bg-gradient-to-b to-main rounded-20 shadow-xl space-y-8 sm:space-y-0">
        <div className="w-full sm:w-1/2 flex  ">
          <h1 className='text-text font-bold text-3xl sm:text-6xl bg-gradient-to-l from-emerald-400  to-text text-transparent bg-clip-text'>Alergologická a imunologická ambulancia MUDr. Hantáková</h1>
        </div>
        <div className="w-full sm:w-1/2 shadow-xl rounded-10 p-4">
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
