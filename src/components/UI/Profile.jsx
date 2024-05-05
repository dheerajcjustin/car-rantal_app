import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
      selectCurrentUser,
      selectCurrentUserType,
} from "../../helpers/auth/authSlice";
import Navbar from "../navbar/NavBar";
const Profile = () => {
      const user = useSelector(selectCurrentUser);

      const userType = useSelector(selectCurrentUserType);
      const [name, setName] = useState("");
      const [mobile, setMobile] = useState("");
      const [showNameInput, setShowNameInput] = useState(false);
      const [showMobileInput, setShowMobileInput] = useState(false);

      const [nameErr, setNameErr] = useState("");
      const [mobileErr, setMobileErr] = useState("");

      useEffect(() => {
            if (!user.name) return;
            setName(user.name);
            setMobile(user.mobile);
      }, [user]);

      return (
            <div className="w-full ">
                  <Navbar />

                  <div className="mx-auto rounded-lg shadow-lg bg-white w-[100vw] sm:w-[90vw] md:w-[80vw] lg:w-[60vw]">
                        <h2 className="mx-auto text-center text-2xl"></h2>
                        <div className="">
                              <div className="flex">
                                    <button
                                          className="text-blue-600"
                                          onClick={() =>
                                                setShowNameInput(
                                                      (prev) => !prev
                                                )
                                          }
                                    >
                                          edit
                                    </button>
                                    {showNameInput ? (
                                          <input
                                                onChange={(e) =>
                                                      setName(e.target.value)
                                                }
                                                // onBlur={nameCheck}
                                                type="text"
                                                name="name"
                                                value={name}
                                                placeholder="Name"
                                                className=" h-20 mt-10 text-3xl border-2 border-gray-500   rounded-lg"
                                          />
                                    ) : (
                                          <p className="  w-[90%] h-20 mt-10 text-3xl">
                                                Name : {user.name}
                                          </p>
                                    )}
                                    {nameErr && (
                                          <p className=" text-red-600">
                                                {nameErr}
                                          </p>
                                    )}
                              </div>
                              <div>
                                    {showMobileInput ? (
                                          <input
                                                onChange={(e) =>
                                                      setMobile(e.target.value)
                                                }
                                                // onBlur={PhoneCheck}
                                                type="text"
                                                name="mobile"
                                                value={mobile}
                                                placeholder="mobile"
                                                className="w-[90%] h-20 mt-10 text-3xl border-2 border-gray-500 rounded-3xl "
                                          />
                                    ) : (
                                          <p>Mobile : {user.mobile}</p>
                                    )}
                                    {!mobileErr && (
                                          <p className=" text-red-600">
                                                {mobileErr}
                                          </p>
                                    )}
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Profile;
