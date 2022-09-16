import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white text-gray-700 body-font border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              alt="logo"
              src="/nyan.png"
              className="w-8 h-8 -mr-1 rounded-full"
            />
            <span className="ml-3 text-xl text-indigo-600">
              AWESOME FOOD STORE
            </span>
          </div>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5" href="/about">
            About
          </a>
          <a className="mr-5" href="/store">
            Store
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
