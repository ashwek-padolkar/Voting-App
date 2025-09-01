import { useState } from "react";
import { RiMenuLine, RiHome2Line, RiArrowRightSLine } from "react-icons/ri";
import {
  BiUser,
  BiListUl,
  BiArchive,
  BiBell,
  BiEnvelope,
} from "react-icons/bi";
import { SiBlogger } from "react-icons/si";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null); // track which dropdown is open

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      <div className="text-gray-800 font-inter">
        {/* <!--sidenav --> */}
        <div
          className={`fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
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
                <RiArrowRightSLine
                  className={`ml-auto transform transition-transform ${
                    openDropdown === "users" ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openDropdown === "users" && (
                <ul className="pl-10 mt-2 space-y-2">
                  <li>
                    <button className="text-sm hover:text-[#f84525]">
                      All
                    </button>
                  </li>
                  <li>
                    <button className="text-sm hover:text-[#f84525]">
                      Roles
                    </button>
                  </li>
                </ul>
              )}
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
                <RiArrowRightSLine
                  className={`ml-auto transform transition-transform ${
                    openDropdown === "blog" ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openDropdown === "blog" && (
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
              )}
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
          className={`w-full bg-gray-200 min-h-screen transition-all main ${
            isSidebarOpen ? "md:ml-64" : "md:ml-0"
          }`}
        >
          {/* <!-- navbar --> */}
          <div className="py-2 px-6 bg-[#f8f4f3] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
            <button
              type="button"
              className="text-lg text-gray-900 font-semibold sidebar-toggle"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <RiMenuLine size={24} />
            </button>

            <ul className="ml-auto flex items-center">
              <li className="mr-1 dropdown">
                <button
                  type="button"
                  className="dropdown-toggle text-gray-400 mr-4 w-8 h-8 rounded flex items-center justify-center  hover:text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="hover:bg-gray-100 rounded-full"
                    viewBox="0 0 24 24"
                    style={{
                      fill: "gray",
                      transform: "rotate(0deg)",
                      msFilter: "none",
                    }}
                  >
                    <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
                  </svg>
                </button>
                <div className="dropdown-menu shadow-md shadow-black/5 z-30 hidden max-w-xs w-full bg-white rounded-md border border-gray-100">
                  <form action="" className="p-4 border-b border-b-gray-100">
                    <div className="relative w-full">
                      <input
                        type="text"
                        className="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
                        placeholder="Search..."
                      />
                      <i className="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-900"></i>
                    </div>
                  </form>
                </div>
              </li>
              <li className="dropdown">
                <button
                  type="button"
                  className="dropdown-toggle text-gray-400 mr-4 w-8 h-8 rounded flex items-center justify-center  hover:text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="hover:bg-gray-100 rounded-full"
                    viewBox="0 0 24 24"
                    style={{
                      fill: "gray",
                      transform: "rotate(0deg)",
                      msFilter: "none",
                    }}
                  >
                    <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path>
                  </svg>
                </button>
                <div className="dropdown-menu shadow-md shadow-black/5 z-30 hidden max-w-xs w-full bg-white rounded-md border border-gray-100">
                  <div className="flex items-center px-4 pt-4 border-b border-b-gray-100 notification-tab">
                    <button
                      type="button"
                      data-tab="notification"
                      data-tab-page="notifications"
                      className="text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 border-b-transparent mr-4 pb-1 active"
                    >
                      Notifications
                    </button>
                    <button
                      type="button"
                      data-tab="notification"
                      data-tab-page="messages"
                      className="text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 border-b-transparent mr-4 pb-1"
                    >
                      Messages
                    </button>
                  </div>
                  <div className="my-2">
                    <ul
                      className="max-h-64 overflow-y-auto"
                      data-tab-for="notification"
                      data-page="notifications"
                    >
                      <li>
                        <a
                          href="#"
                          className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                        >
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded block object-cover align-middle"
                          />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                              New order
                            </div>
                            <div className="text-[11px] text-gray-400">
                              from a user
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                        >
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded block object-cover align-middle"
                          />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                              New order
                            </div>
                            <div className="text-[11px] text-gray-400">
                              from a user
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                        >
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded block object-cover align-middle"
                          />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                              New order
                            </div>
                            <div className="text-[11px] text-gray-400">
                              from a user
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                        >
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded block object-cover align-middle"
                          />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                              New order
                            </div>
                            <div className="text-[11px] text-gray-400">
                              from a user
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                        >
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded block object-cover align-middle"
                          />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                              New order
                            </div>
                            <div className="text-[11px] text-gray-400">
                              from a user
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <ul
                      className="max-h-64 overflow-y-auto hidden"
                      data-tab-for="notification"
                      data-page="messages"
                    >
                      <li>
                        <a
                          href="#"
                          className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                        >
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded block object-cover align-middle"
                          />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                              John Doe
                            </div>
                            <div className="text-[11px] text-gray-400">
                              Hello there!
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                        >
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded block object-cover align-middle"
                          />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                              John Doe
                            </div>
                            <div className="text-[11px] text-gray-400">
                              Hello there!
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                        >
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded block object-cover align-middle"
                          />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                              John Doe
                            </div>
                            <div className="text-[11px] text-gray-400">
                              Hello there!
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                        >
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded block object-cover align-middle"
                          />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                              John Doe
                            </div>
                            <div className="text-[11px] text-gray-400">
                              Hello there!
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                        >
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded block object-cover align-middle"
                          />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                              John Doe
                            </div>
                            <div className="text-[11px] text-gray-400">
                              Hello there!
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <button id="fullscreen-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="hover:bg-gray-100 rounded-full"
                  viewBox="0 0 24 24"
                  style={{
                    fill: "gray",
                    transform: "rotate(0deg)",
                    msFilter: "none",
                  }}
                >
                  <path d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z"></path>
                </svg>
              </button>
              {/* <script>
                    const fullscreenButton = document.getElementById('fullscreen-button');
                
                    fullscreenButton.addEventListener('click', toggleFullscreen);
                
                    function toggleFullscreen() {
                        if (document.fullscreenElement) {
                            // If already in fullscreen, exit fullscreen
                            document.exitFullscreen();
                        } else {
                            // If not in fullscreen, request fullscreen
                            document.documentElement.requestFullscreen();
                        }
                    }
                </script> */}

              <li className="dropdown ml-3">
                <button
                  type="button"
                  className="dropdown-toggle flex items-center"
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
                <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
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
                    <form method="POST" action="">
                      <a
                        role="menuitem"
                        className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50 cursor-pointer"
                        // onclick="event.preventDefault();
                        //             this.closest('form').submit();"
                      >
                        Log Out
                      </a>
                    </form>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* <!-- end navbar --> */}

          {/* <!-- Content --> */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                <div className="flex justify-between mb-6">
                  <div>
                    <div className="flex items-center mb-1">
                      <div className="text-2xl font-semibold">2</div>
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      Users
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="dropdown-toggle text-gray-400 hover:text-gray-600"
                    >
                      <i className="ri-more-fill"></i>
                    </button>
                    <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  href="/gebruikers"
                  className="text-[#f84525] font-medium text-sm hover:text-red-800"
                >
                  View
                </a>
              </div>
              <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                <div className="flex justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-1">
                      <div className="text-2xl font-semibold">100</div>
                      <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">
                        +30%
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      Companies
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="dropdown-toggle text-gray-400 hover:text-gray-600"
                    >
                      <i className="ri-more-fill"></i>
                    </button>
                    <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  href="/dierenartsen"
                  className="text-[#f84525] font-medium text-sm hover:text-red-800"
                >
                  View
                </a>
              </div>
              <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                <div className="flex justify-between mb-6">
                  <div>
                    <div className="text-2xl font-semibold mb-1">100</div>
                    <div className="text-sm font-medium text-gray-400">
                      Blogs
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="dropdown-toggle text-gray-400 hover:text-gray-600"
                    >
                      <i className="ri-more-fill"></i>
                    </button>
                    <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  href=""
                  className="text-[#f84525] font-medium text-sm hover:text-red-800"
                >
                  View
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
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
              <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
                <div className="flex justify-between mb-4 items-start">
                  <div className="font-medium">Activities</div>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="dropdown-toggle text-gray-400 hover:text-gray-600"
                    >
                      <i className="ri-more-fill"></i>
                    </button>
                    <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <table className="w-full min-w-[540px]">
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Lorem Ipsum
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-gray-400">
                            02-02-2024
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-gray-400">
                            17.45
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="dropdown">
                            <button
                              type="button"
                              className="dropdown-toggle text-gray-400 hover:text-gray-600 text-sm w-6 h-6 rounded flex items-center justify-center bg-gray-50"
                            >
                              <i className="ri-more-2-fill"></i>
                            </button>
                            <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                              <li>
                                <a
                                  href="#"
                                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                >
                                  Profile
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                >
                                  Settings
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                >
                                  Logout
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Lorem Ipsum
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-gray-400">
                            02-02-2024
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-gray-400">
                            17.45
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="dropdown">
                            <button
                              type="button"
                              className="dropdown-toggle text-gray-400 hover:text-gray-600 text-sm w-6 h-6 rounded flex items-center justify-center bg-gray-50"
                            >
                              <i className="ri-more-2-fill"></i>
                            </button>
                            <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                              <li>
                                <a
                                  href="#"
                                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                >
                                  Profile
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                >
                                  Settings
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                >
                                  Logout
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2">
                <div className="flex justify-between mb-4 items-start">
                  <div className="font-medium">Order Statistics</div>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="dropdown-toggle text-gray-400 hover:text-gray-600"
                    >
                      <i className="ri-more-fill"></i>
                    </button>
                    <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <div className="rounded-md border border-dashed border-gray-200 p-4">
                    <div className="flex items-center mb-0.5">
                      <div className="text-xl font-semibold">10</div>
                      <span className="p-1 rounded text-[12px] font-semibold bg-blue-500/10 text-blue-500 leading-none ml-1">
                        $80
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm">Active</span>
                  </div>
                  <div className="rounded-md border border-dashed border-gray-200 p-4">
                    <div className="flex items-center mb-0.5">
                      <div className="text-xl font-semibold">50</div>
                      <span className="p-1 rounded text-[12px] font-semibold bg-emerald-500/10 text-emerald-500 leading-none ml-1">
                        +$469
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm">Completed</span>
                  </div>
                  <div className="rounded-md border border-dashed border-gray-200 p-4">
                    <div className="flex items-center mb-0.5">
                      <div className="text-xl font-semibold">4</div>
                      <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-rose-500 leading-none ml-1">
                        -$130
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm">Canceled</span>
                  </div>
                </div>
                <div>
                  <canvas id="order-chart"></canvas>
                </div>
              </div>
              <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
                <div className="flex justify-between mb-4 items-start">
                  <div className="font-medium">Earnings</div>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="dropdown-toggle text-gray-400 hover:text-gray-600"
                    >
                      <i className="ri-more-fill"></i>
                    </button>
                    <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[460px]">
                    <thead>
                      <tr>
                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                          Service
                        </th>
                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                          Earning
                        </th>
                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src="https://placehold.co/32x32"
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Create landing page
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-emerald-500">
                            +$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src="https://placehold.co/32x32"
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Create landing page
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-rose-500">
                            -$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                            Withdrawn
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src="https://placehold.co/32x32"
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Create landing page
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-emerald-500">
                            +$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src="https://placehold.co/32x32"
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Create landing page
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-rose-500">
                            -$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                            Withdrawn
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src="https://placehold.co/32x32"
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Create landing page
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-emerald-500">
                            +$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src="https://placehold.co/32x32"
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Create landing page
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-rose-500">
                            -$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                            Withdrawn
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src="https://placehold.co/32x32"
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Create landing page
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-emerald-500">
                            +$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src="https://placehold.co/32x32"
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Create landing page
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-rose-500">
                            -$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                            Withdrawn
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src="https://placehold.co/32x32"
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Create landing page
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-emerald-500">
                            +$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src="https://placehold.co/32x32"
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Create landing page
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-rose-500">
                            -$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                            Withdrawn
                          </span>
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

        <script src="https://unpkg.com/@popperjs/core@2"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

        {/* <script>
        // start: Sidebar
        const sidebarToggle = document.querySelector('.sidebar-toggle')
        const sidebarOverlay = document.querySelector('.sidebar-overlay')
        const sidebarMenu = document.querySelector('.sidebar-menu')
        const main = document.querySelector('.main')
        sidebarToggle.addEventListener('click', function (e) {
            e.preventDefault()
            main.classNameList.toggle('active')
            sidebarOverlay.classNameList.toggle('hidden')
            sidebarMenu.classNameList.toggle('-translate-x-full')
        })
        sidebarOverlay.addEventListener('click', function (e) {
            e.preventDefault()
            main.classNameList.add('active')
            sidebarOverlay.classNameList.add('hidden')
            sidebarMenu.classNameList.add('-translate-x-full')
        })
        document.querySelectorAll('.sidebar-dropdown-toggle').forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault()
                const parent = item.closest('.group')
                if (parent.classNameList.contains('selected')) {
                    parent.classNameList.remove('selected')
                } else {
                    document.querySelectorAll('.sidebar-dropdown-toggle').forEach(function (i) {
                        i.closest('.group').classNameList.remove('selected')
                    })
                    parent.classNameList.add('selected')
                }
            })
        })
        // end: Sidebar



        // start: Popper
        const popperInstance = {}
        document.querySelectorAll('.dropdown').forEach(function (item, index) {
            const popperId = 'popper-' + index
            const toggle = item.querySelector('.dropdown-toggle')
            const menu = item.querySelector('.dropdown-menu')
            menu.dataset.popperId = popperId
            popperInstance[popperId] = Popper.createPopper(toggle, menu, {
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 8],
                        },
                    },
                    {
                        name: 'preventOverflow',
                        options: {
                            padding: 24,
                        },
                    },
                ],
                placement: 'bottom-end'
            });
        })
        document.addEventListener('click', function (e) {
            const toggle = e.target.closest('.dropdown-toggle')
            const menu = e.target.closest('.dropdown-menu')
            if (toggle) {
                const menuEl = toggle.closest('.dropdown').querySelector('.dropdown-menu')
                const popperId = menuEl.dataset.popperId
                if (menuEl.classNameList.contains('hidden')) {
                    hideDropdown()
                    menuEl.classNameList.remove('hidden')
                    showPopper(popperId)
                } else {
                    menuEl.classNameList.add('hidden')
                    hidePopper(popperId)
                }
            } else if (!menu) {
                hideDropdown()
            }
        })

        function hideDropdown() {
            document.querySelectorAll('.dropdown-menu').forEach(function (item) {
                item.classNameList.add('hidden')
            })
        }
        function showPopper(popperId) {
            popperInstance[popperId].setOptions(function (options) {
                return {
                    ...options,
                    modifiers: [
                        ...options.modifiers,
                        { name: 'eventListeners', enabled: true },
                    ],
                }
            });
            popperInstance[popperId].update();
        }
        function hidePopper(popperId) {
            popperInstance[popperId].setOptions(function (options) {
                return {
                    ...options,
                    modifiers: [
                        ...options.modifiers,
                        { name: 'eventListeners', enabled: false },
                    ],
                }
            });
        }
        // end: Popper



        // start: Tab
        document.querySelectorAll('[data-tab]').forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault()
                const tab = item.dataset.tab
                const page = item.dataset.tabPage
                const target = document.querySelector('[data-tab-for="' + tab + '"][data-page="' + page + '"]')
                document.querySelectorAll('[data-tab="' + tab + '"]').forEach(function (i) {
                    i.classNameList.remove('active')
                })
                document.querySelectorAll('[data-tab-for="' + tab + '"]').forEach(function (i) {
                    i.classNameList.add('hidden')
                })
                item.classNameList.add('active')
                target.classNameList.remove('hidden')
            })
        })
        // end: Tab



        // start: Chart
        new Chart(document.getElementById('order-chart'), {
            type: 'line',
            data: {
                labels: generateNDays(7),
                datasets: [
                    {
                        label: 'Active',
                        data: generateRandomData(7),
                        borderWidth: 1,
                        fill: true,
                        pointBackgroundColor: 'rgb(59, 130, 246)',
                        borderColor: 'rgb(59, 130, 246)',
                        backgroundColor: 'rgb(59 130 246 / .05)',
                        tension: .2
                    },
                    {
                        label: 'Completed',
                        data: generateRandomData(7),
                        borderWidth: 1,
                        fill: true,
                        pointBackgroundColor: 'rgb(16, 185, 129)',
                        borderColor: 'rgb(16, 185, 129)',
                        backgroundColor: 'rgb(16 185 129 / .05)',
                        tension: .2
                    },
                    {
                        label: 'Canceled',
                        data: generateRandomData(7),
                        borderWidth: 1,
                        fill: true,
                        pointBackgroundColor: 'rgb(244, 63, 94)',
                        borderColor: 'rgb(244, 63, 94)',
                        backgroundColor: 'rgb(244 63 94 / .05)',
                        tension: .2
                    },
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        function generateNDays(n) {
            const data = []
            for(let i=0; i<n; i++) {
                const date = new Date()
                date.setDate(date.getDate()-i)
                data.push(date.toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric'
                }))
            }
            return data
        }
        function generateRandomData(n) {
            const data = []
            for(let i=0; i<n; i++) {
                data.push(Math.round(Math.random() * 10))
            }
            return data
        }
        // end: Chart

        
    </script> */}
      </div>
    </>
  );
};

export default AdminDashboard;
