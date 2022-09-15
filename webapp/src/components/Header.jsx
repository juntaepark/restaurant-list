const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 left-0 bg-white text-gray-700 body-font border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl text-indigo-500">
            AWESOME FOOD STORE
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
