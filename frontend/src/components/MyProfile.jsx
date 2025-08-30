import { useEffect, useRef, useState } from "react";
import { API_BASE_URL } from "../apiConfig";
import { useSelector } from "react-redux";
import LoadingScreen from "./LoadingScreen";

const MyProfile = () => {
  // const [profile, setProfile] = useState({});

  const user = useSelector((store) => store.user);

  // useEffect(() => {
  //   const fetchResults = async () => {
  //     try {
  //       const userToken = localStorage.getItem("authToken");

  //       if (!userToken) {
  //         console.error("No token found");
  //         return;
  //       }

  //       const response = await fetch(`${API_BASE_URL}/user/profile`, {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${userToken}`,
  //         },
  //       });

  //       const data = await response.json();

  //       // setProfile(data);
  //     } catch (error) {
  //       console.error("Failed to fetch User details:", error);
  //     }
  //   };

  //   fetchResults();
  // }, []);

  const currentPasswordElement = useRef();
  const newPasswordElement = useRef();

  const handleUpdatePassword = async () => {
    const password = {
      currentPassword: currentPasswordElement.current.value,
      newPassword: newPasswordElement.current.value,
    };
    try {
      const userToken = localStorage.getItem("authToken");

      if (!userToken) {
        console.error("No token found");
        return;
      }

      const response = await fetch(`${API_BASE_URL}/user/profile/password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`, // Pass the Bearer token
        },
        body: JSON.stringify(password),
      });

      if (response.ok) {
        currentPasswordElement.current.value = "";
        newPasswordElement.current.value = "";

        toast.success("Password updated successfully.");
      } else {
        toast.error("Incorrect Password.");
        currentPasswordElement.current.value = "";
        newPasswordElement.current.value = "";
      }
    } catch (error) {
      // console.log("update password: ", error);
    }
  };

  const isLoading = !user || Object.keys(user).length === 0 || !user.name;

  return (
    <div className="bg-white">
      <div className="mx-auto  max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-6 py-8 sm:px-12 sm:py-8 lg:py-8 lg:grid-cols-2 lg:px-8">
        <div>
          <center>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Profile Details
            </h2>
          </center>

          <div>
            {isLoading ? (
              <LoadingScreen />
            ) : (
              <>
                <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-6 lg:gap-x-8">
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Name</dt>
                    <dd className="mt-2 text-sm text-gray-500">{user?.name}</dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Age</dt>
                    <dd className="mt-2 text-sm text-gray-500">{user?.age}</dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Email Address</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {user?.email}
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Mobile No.</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {user?.mobile}
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Address</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {user?.address}
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">
                      Aadhar Card No.
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {user?.aadharCardNumber}
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <label
                      htmlFor="current-password"
                      className="font-medium text-gray-900"
                    >
                      Current Password:
                    </label>
                    <input
                      type="password"
                      id="current-password"
                      name="current-password"
                      required
                      ref={currentPasswordElement}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <label
                      htmlFor="new-password"
                      className="font-medium text-gray-900"
                    >
                      New Password:
                    </label>
                    <input
                      type="password"
                      id="new-password"
                      name="new-password"
                      required
                      ref={newPasswordElement}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </dl>

                <center>
                  <button
                    onClick={handleUpdatePassword}
                    href="#"
                    className="rounded-md bg-indigo-600 mt-10 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Update Password
                  </button>
                </center>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
