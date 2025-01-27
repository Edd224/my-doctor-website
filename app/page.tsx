'use client';

import { Warning } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

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
      className="relative h-[600px] 2xl:h-[800px] flex flex-col items-center justify-evenly px-8 bg-[url('/logo.svg')] bg-cover bg-center bg-no-repeat rounded-20"
    >
      {/* Zobrazenie údajov o ordinácii v ľavom hornom rohu */}
      <div className="absolute top-0 left-0 p-4 bg-black/20 text-white text-sm sm:text-xl rounded-10 shadow-xl">
        {error ? (
          <p className="text-red-500">Chyba: {error}</p>
        ) : (
          <>
            <p className="mb-2 bg-gradient-to-r from-primary p-2 rounded-10 font-semibold">Pacienti objednaní na čas: {patientTime || 'Načítava sa...'}</p>
            <div className="flex justify-center items-center space-x-2"> 
              <Warning size={32} className='animate-pulse' />
              <p className="bg-gradient-to-r from-red-700 p-2 rounded-10 font-semibold">{vacationInfo || 'Načítava sa...'}</p>
            </div>
          </>
        )}
      </div>

      <div className="relative text-left text-white shadow-xl backdrop-blur-md p-8 rounded-10 w-full sm:w-2/3">
        <h1 className="text-3xl md:text-6xl font-black mb-4">
          Vitajte na stránke vášho alergológa
        </h1>
        <p className="text-base md:text-lg max-w-2xl mb-4">
          Poskytujeme profesionálne služby v oblasti diagnostiky a liečby alergií.
        </p>
      </div>
    </section>
  );
};

export default Home;
