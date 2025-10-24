import { useState, useRef, useEffect } from "react";
import { RiMenuLine, RiHome2Line, RiArrowRightSLine } from "react-icons/ri";
import {
  BiUser,
  BiListUl,
  BiArchive,
  BiBell,
  BiEnvelope,
} from "react-icons/bi";
import { SiBlogger } from "react-icons/si";
import CategoryCard from "./CategoryCard";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [openDropdown, setOpenDropdown] = useState(null);

  // const toggleDropdown = (name) => {
  //   setOpenDropdown(openDropdown === name ? null : name);
  // };

  const dropdownRef = useRef(null);

  // 🔹 Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="text-gray-800 font-inter">
        {/* <!--sidenav --> */}
        <div
          className={`fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        >
          <h2 className="font-bold text-2xl">
            ADMIN{" "}
            <span className="bg-[#f84525] text-white px-2 rounded-md">
              PORTAL
            </span>
          </h2>

          <ul className="mt-6 space-y-1">
            <span className="text-gray-400 font-bold">ADMIN</span>

            <li>
              <button className="flex items-center w-full py-2 px-4 rounded-md hover:bg-gray-950 hover:text-white">
                <RiHome2Line className="mr-3 text-lg" />
                Dashboard
              </button>
            </li>

            {/* Users Dropdown */}
            <li>
              <button
                className="flex items-center w-full py-2 px-4 rounded-md hover:bg-gray-950 hover:text-white"
                onClick={() => toggleDropdown("users")}
              >
                <BiUser className="mr-3 text-lg" />
                Users
              </button>
            </li>

            <li>
              <button className="flex items-center w-full py-2 px-4 rounded-md hover:bg-gray-950 hover:text-white">
                <BiListUl className="mr-3 text-lg" />
                Activities
              </button>
            </li>

            <span className="text-gray-400 font-bold">BLOG</span>

            {/* Blog Dropdown */}
            <li>
              <button
                className="flex items-center w-full py-2 px-4 rounded-md hover:bg-gray-950 hover:text-white"
                onClick={() => toggleDropdown("blog")}
              >
                <SiBlogger className="mr-3 text-lg" />
                Post
                {/* <RiArrowRightSLine
                  className={`ml-auto transform transition-transform ${
                    openDropdown === "blog" ? "rotate-90" : ""
                  }`}
                /> */}
              </button>
              {/* {openDropdown === "blog" && (
                <ul className="pl-10 mt-2 space-y-2">
                  <li>
                    <button className="text-sm hover:text-[#f84525]">
                      All
                    </button>
                  </li>
                  <li>
                    <button className="text-sm hover:text-[#f84525]">
                      Categories
                    </button>
                  </li>
                </ul>
              )} */}
            </li>

            <li>
              <button className="flex items-center w-full py-2 px-4 rounded-md hover:bg-gray-950 hover:text-white">
                <BiArchive className="mr-3 text-lg" />
                Archive
              </button>
            </li>

            <span className="text-gray-400 font-bold">PERSONAL</span>

            <li>
              <button className="flex items-center w-full py-2 px-4 rounded-md hover:bg-gray-950 hover:text-white">
                <BiBell className="mr-3 text-lg" />
                Notifications
                <span className="ml-auto px-2 py-0.5 text-xs font-medium bg-red-200 text-red-600 rounded-full">
                  5
                </span>
              </button>
            </li>

            <li>
              <button className="flex items-center w-full py-2 px-4 rounded-md hover:bg-gray-950 hover:text-white">
                <BiEnvelope className="mr-3 text-lg" />
                Messages
                <span className="ml-auto px-2 py-0.5 text-xs font-medium bg-green-200 text-green-600 rounded-full">
                  2 New
                </span>
              </button>
            </li>
          </ul>
        </div>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        <main
          className={`bg-gray-200 min-h-screen transition-all main
    ${isSidebarOpen ? "md:ml-64" : "md:ml-0"} md:ml-64`}
        >
          {/* <!-- navbar --> */}
          <div className="py-2 px-6 bg-[#f8f4f3] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
            <button
              type="button"
              className="text-lg text-gray-900 font-semibold sidebar-toggle md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <RiMenuLine size={24} />
            </button>

            <ul className="ml-auto flex items-center">
              <li className="dropdown ml-3" ref={dropdownRef}>
                <button
                  type="button"
                  className="dropdown-toggle flex items-center"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="flex-shrink-0 w-10 h-10 relative">
                    <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg"
                        alt=""
                      />
                      <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"></div>
                      <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-2 md:block text-left">
                    <h2 className="text-sm font-semibold text-gray-800">
                      John Doe
                    </h2>
                    <p className="text-xs text-gray-500">Administrator</p>
                  </div>
                </button>
                {/* dropdown menu */}
                {isDropdownOpen && (
                  <ul className="absolute right-4 top-12 mt-2 shadow-md shadow-black/5 z-30 py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={() => alert("Logging out...")}
                        className="w-full text-left flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50"
                      >
                        Log Out
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          {/* <!-- end navbar --> */}

          {/* <!-- Content --> */}
          <div className="p-6 md:h-[90vh] flex flex-col gap-6">
            <div className="flex-[3] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <CategoryCard count="2" label="Users" href="/gebruikers" />
              <CategoryCard
                count="100"
                label="Candidates"
                // extra="+30%"
                href="/dierenartsen"
              />
            </div>
            <div className="flex-[7] p-6 relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded overflow-auto">
              <div className="rounded-t mb-0 px-0 border-0">
                <div className="flex flex-wrap items-center px-4 py-2">
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
                      Users
                    </h3>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Role
                        </th>
                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Amount
                        </th>
                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-gray-700 dark:text-gray-100">
                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          Administrator
                        </th>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          1
                        </td>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">70%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                <div
                                  style={{ width: "70%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-100">
                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          User
                        </th>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          6
                        </td>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">40%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                <div
                                  style={{ width: "40%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-100">
                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          User
                        </th>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          5
                        </td>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">45%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
                                <div
                                  style={{ width: "45%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-100">
                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          User
                        </th>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          4
                        </td>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">60%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                <div
                                  style={{ width: "60%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Content --> */}
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
