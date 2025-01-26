import Link from "next/link";

const Home: React.FC = () => {
  return (
    <section
      className="relative h-[600px] 2xl:h-[800px] flex items-center justify-start px-8 bg-[url('/assets/images/pexels-karolina-grabowska-4226769.jpg')] bg-cover bg-center bg-no-repeat rounded-20"
    >
      {/* Pre rozmazanie pozadia pridáme vrstvený efekt */}
      <div className="absolute inset-0 bg-teal-400/10 backdrop-blur-sm rounded-20"></div>

      {/* Obsah stránky */}
      <div className="relative text-left  text-text shadow-xl backdrop-blur-md p-8 rounded-10 w-full sm:w-2/3">

        <h1 className="text-3xl md:text-6xl font-black mb-4">
          Vitajte na stránke vášho alergológa
        </h1>
        <p className="text-base md:text-lgmax-w-2xl">
          Poskytujeme profesionálne služby v oblasti diagnostiky a liečby alergií.
        </p>
        <div className="mt-8">
          <Link
            href="/appointment"
            className="w-full sm:w-[50%] mt-10 inline-flex items-center justify-center whitespace-nowrap rounded-10 py-4 px-6 text-sm font-medium text-white bg-gradient-to-r from-teal-700 to-teal-400 shadow focus:outline-none focus:ring-4 focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
          >
            Objednať sa na vyšetrenie
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
