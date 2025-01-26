// app/404/page.tsx
import Link from "next/link";

const PageNotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-lg text-gray-700 mb-4">
        Oops! Stránka, ktorú hľadáte, neexistuje.
      </p>
      <p className="text-gray-600 mb-8">Skúste niektorý z týchto odkazov:</p>
      <div>
        <Link href="/" className="text-blue-600 hover:underline mr-4">
          Domov
        </Link>
        <Link href="/about" className="text-blue-600 hover:underline mr-4">
          O nás
        </Link>
        <Link href="/services" className="text-blue-600 hover:underline mr-4">
          Služby
        </Link>
        <Link href="/contact" className="text-blue-600 hover:underline">
          Kontakt
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
