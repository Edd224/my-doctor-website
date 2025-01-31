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
      className="relative h-auto 2xl:h-[800px] flex flex-col items-center justify-evenly px-8 bg-[url('/logo.svg')] bg-contain bg-center bg-no-repeat rounded-20"
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

      <div className="max-w-4xl sm:w-2/3  mt-[70px] pb-10 relative text-left text-text shadow-xl backdrop-blur-md p-6 rounded-10 ">
        <h2 className="text-xl font-semibold mb-4">Ordinačné hodiny</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-white text-center">
              <th className="border border-gray-300 px-4 py-2">Deň</th>
              <th className="border border-gray-300 px-4 py-2">Ordinačné hodiny</th>
              <th className="border border-gray-300 px-4 py-2">* Čistý ordinačný čas</th>
            </tr>
          </thead>
          <tbody>
            {[
              { day: 'Pondelok', hours: '07:00 - 15:00', clean: '07:30 - 14:30' },
              { day: 'Utorok', hours: '07:00 - 15:00', clean: '07:30 - 14:30' },
              { day: 'Streda', hours: '07:00 - 15:00', clean: '07:30 - 14:30' },
              { day: 'Štvrtok', hours: '07:00 - 15:00', clean: '07:30 - 14:30' },
              { day: 'Piatok', hours: '07:00 - 15:00', clean: '07:30 - 09:30' },
            ].map(({ day, hours, clean }) => (
              <tr key={day} className="text-center">
                <td className="border text-white border-gray-300 px-4 py-2">{day}</td>
                <td className="border text-white border-gray-300 px-4 py-2">{hours}</td>
                <td className="border text-white border-gray-300 px-4 py-2">{clean}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="space-y-2 bg-white p-2">
          <h4 className='text-xl text-text'>* Čistý ordinačný čas</h4>
          <p>Čas, v ktorom lekár príjima pacientov za účelom poskytnutia zdravotnej starostlivosti v príslušnej ambulacii. Do čistého ordinačného času sa započítava čas ordinačných hodín schválených príslušným samosprávnym krajom, vyhradený na vyšetrenie pacientov.</p>
          <p>Do čistého ordinačného času sa nezapočítava čas ordinačných hodín vyhradených na odbery, vyhodnocovanie výsledkov bez prítomnosti pacienta, admnistratívu a konziliárne vyšetrenia.</p>
        </div>
        <div className="mt-2">
        <h3 className='text-text'>Lekár: <span className='font-bold text-xl sm:text-2xl text-nowrap'>MUDr.Marína Hantáková</span></h3>
        <h4 className='text-text'>Zdravotná sestra: <span className='font-bold text-xl sm:text-2xl text-nowrap'>Marta Balážová</span></h4>
      </div>

      </div>
    </section>
  );
};

export default Home;
