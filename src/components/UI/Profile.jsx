import { useState } from "react";
import { useSelector } from "react-redux";
import {
      selectCurrentUser,
      selectCurrentUserType,
} from "../../helpers/auth/authSlice";
const Profile = () => {
      const user = useSelector(selectCurrentUser);
      const userType = useSelector(selectCurrentUserType);
      console.log(user, userType);
      const [userData, setUserData] = useState({
            name: "",
            mobile: "",
      });
      const [nameErr, setNameErr] = useState("");
      const [mobileErr, setMobileErr] = useState("");
      const valueSetting = (e) => {
            setUserData((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
            }));
      };

      return (
            <div className="w-full">
                  <div className="mx-auto rounded-lg shadow-lg bg-white w-[100vw] sm:w-[90vw] md:w-[80vw] lg:w-[60vw]">
                        <h2 className="mx-auto text-center text-2xl">
                              Profile
                        </h2>
                        <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center bg-[#FDD23F] ">
                              <h1 className="font-Viaoda text-7xl mb-10">
                                    Sign up
                              </h1>
                              <input
                                    onChange={valueSetting}
                                    // onBlur={nameCheck}
                                    type="text"
                                    name="name"
                                    value={userData.name}
                                    placeholder="Name"
                                    className="w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center"
                              />
                              {nameErr && (
                                    <p className=" text-red-600">{nameErr}</p>
                              )}
                              <input
                                    onChange={valueSetting}
                                    // onBlur={PhoneCheck}
                                    type="text"
                                    name="mobile"
                                    value={userData.phone}
                                    placeholder="mobile"
                                    className="w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center"
                              />
                              {!mobileErr && (
                                    <p className=" text-red-600">{mobileErr}</p>
                              )}

                              <button
                                    // onClick={signupButtonHandle}
                                    className="w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center hover:scale-105 hover:bg-black hover:text-white"
                              >
                                    Update Profile
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default Profile;
