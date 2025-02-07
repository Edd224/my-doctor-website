"use client";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-text py-6 mt-auto"> {/* mt-auto zabezpečí, že footer bude na spodku */}
      <div className="container mx-auto text-center md:flex md:justify-between md:items-center px-4">
        <p className="text-sm">
          © {new Date().getFullYear()}  Alergologická a imunologická ambulancia MUDr. Hantáková – All rights reserved
        </p>
        <ul className="flex justify-center space-x-4 mt-4 md:mt-0">
          <li>
            <a href="#" className="hover:underline">
              Ochrana súkromia
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Podmienky používania
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
