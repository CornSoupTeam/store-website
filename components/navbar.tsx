// Navbar.js
const Navbar = () => {
  return (
    <nav className="border-gray-200 fixed top-0 w-full border-b py-2.5 bg-white bg-opacity-75 backdrop-blur-xl z-10">
      <div className="container mx-auto w-full max-w-7xl py-2 px-6 flex flex-wrap items-center justify-between">
        <div className="flex w-auto h-[30px] relative cursor-pointer">
          <h1 className="text-2xl font-bold">Cornbot</h1>
        </div>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <span className="text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 select-none cursor-pointer">
                로그인
              </span>
            </li>
            <li>
              <span className="text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 select-none cursor-pointer">
                리더보드
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
