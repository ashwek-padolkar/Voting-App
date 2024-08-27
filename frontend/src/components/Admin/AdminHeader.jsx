import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/file.png";

const AdminHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  const handleSignOut = () => {
    localStorage.removeItem("authToken");
  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <nav className="bg-gray-800 relative">
          <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 rounded-xl"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <Link
                      to="/admin"
                      className="rounded-md hover:bg-gray-900 px-3 py-3 text-sm font-medium text-white"
                      aria-current="page"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/admin/add"
                      className="rounded-md hover:bg-gray-900 px-3 py-3 text-sm font-medium text-white"
                      aria-current="page"
                    >
                      Add Candidate
                    </Link>
                    <Link
                      to="/admin/get"
                      className="rounded-md hover:bg-gray-900 px-3 py-3 text-sm font-medium text-white"
                      aria-current="page"
                    >
                      Get Candidates
                    </Link>
                    <Link
                      to="/admin/update"
                      className="rounded-md hover:bg-gray-900 px-3 py-3 text-sm font-medium text-white"
                      aria-current="page"
                    >
                      Update
                    </Link>
                    <Link
                      to="/admin/delete"
                      className="rounded-md hover:bg-gray-900 px-3 py-3 text-sm font-medium text-white"
                      aria-current="page"
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <Link
                  to="/"
                  onClick={handleSignOut}
                  className="rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign out
                </Link>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-controls="mobile-menu"
                  aria-expanded={isMenuOpen}
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>

                  {/* SVG for "Menu Closed" */}
                  <svg
                    className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  {/* SVG for "Menu Open" */}
                  <svg
                    className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          <div
            className={`transform transition-transform duration-1000 ease-in-out ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-[-20px] opacity-0 pointer-events-none"
            } absolute left-0 right-0 z-10 bg-gray-800 md:hidden`}
            id="mobile-menu"
          >
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <Link
                to="/admin"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Dashboard
              </Link>
              <Link
                to="/admin/add"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Add Candidate
              </Link>
              <Link
                to="/admin/get"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Get Candidates
              </Link>
              <Link
                to="/admin/update"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Update
              </Link>
              <Link
                to="/admin/delete"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Delete
              </Link>
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="mt-3 space-y-1 px-2">
                <Link
                  to="/"
                  onClick={handleSignOut}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign out
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default AdminHeader;
