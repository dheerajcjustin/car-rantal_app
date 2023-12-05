import React, { useState } from "react";
import VendorNavbar from "../../components/navbar/VendorNavbar";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../helpers/auth/vendorAuthSlice";
import ImageUpload from "../../components/UI/ImageUpload";
import authInstance from "../../config/vendorAxios";
import Modal from "../../components/UI/Modal";
import OtpVendor from "../../components/vendor/OtpVendor";

const VendorProfile = () => {
      const [profilePic, setProfilePic] = useState();
      const [otpModal, setOtpModal] = useState(false);

      const user = useSelector(selectCurrentUser);
      const [name, setName] = useState(user.name);
      const [mobile, setMobile] = useState(user.mobile);
      const updateProfileHandler = async () => {
            const res = await authInstance.post("/vendor/sendOtp", {
                  name,
                  mobile,
            });
            console.log(res);
            setOtpModal(true);
      };
      const modalClose = () => {
            setOtpModal(false);
      };
      return (
            <div className=" bg-banana">
                  <VendorNavbar />
                  {otpModal && (
                        <Modal>
                              <OtpVendor
                                    mobile={mobile}
                                    name={name}
                                    vendorId={user.userId}
                                    modalOpen={setOtpModal}
                              />
                        </Modal>
                  )}
                  <div className=" h-screen   ">
                        <div className="mx-auto sm:w-2/3 bg-[#FDD23F] ">
                              {/* <ImageUpload SetImage={setProfilePic} image={profilePic} placeholder="profile pic" /> */}

                              <div className="flex flex-wrap  justify-center mt-10">
                                    <label
                                          className="text-xl w-[60%]"
                                          htmlFor="name"
                                    >
                                          Name
                                    </label>

                                    <input
                                          onChange={(e) =>
                                                setName(e.target.value)
                                          }
                                          id="name"
                                          type="text"
                                          name="name"
                                          value={name}
                                          placeholder="Name"
                                          className="w-[100%] sm:w-[60%] h-20  text-3xl border-2 border-black rounded-3xl text-center"
                                    />
                              </div>
                              {/* {!validation.name.status && (
                        <p className=" text-red-600">{validation.name.message}</p>
                    )} */}
                              <div className="flex flex-wrap  justify-center mt-10">
                                    <label
                                          className="text-xl w-[60%]"
                                          htmlFor="mobile"
                                    >
                                          Mobile
                                    </label>
                                    <input
                                          onChange={(e) =>
                                                setMobile(e.target.value)
                                          }
                                          // onBlur={PhoneCheck}
                                          id="mobile"
                                          type="text"
                                          name="mobile"
                                          value={mobile}
                                          placeholder="mobile"
                                          className="w-[100%] sm:w-[60%] h-20 text-3xl border-2 border-black rounded-3xl text-center"
                                    />
                              </div>
                              {/* {!validation.phone.status && (
                        <p className=" text-red-600">{validation.phone.message}</p>
                    )} */}

                              {/* <div className="w-[90%] h-20 mt-10">
                        <input
                            onChange={valueSetting}
                            onBlur={passwordCheck}
                            type={passwordType}
                            name="password"
                            value={userData.password}
                            placeholder="Password"
                            className=" w-full h-20 text-3xl border-2 border-black rounded-3xl text-center"
                        />

                        {!validation.password.status && (
                            <p className=" text-red-600 w-full text-center">
                                {validation.password.message}
                            </p>
                        )}
                        <p className="relative">
                            <i className="absolute right-4 bottom-6" onClick={passwordTypeChange}>
                                {passwordVisible ? (
                                    <FiEye size={38} opacity={0.6} />
                                ) : (
                                    <FiEyeOff size={38} opacity={0.6} />
                                )}
                            </i>
                        </p>
                    </div> */}
                              <div className="flex flex-wrap  justify-center mt-10">
                                    <button
                                          onClick={updateProfileHandler}
                                          className="w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center hover:scale-105 hover:bg-black hover:text-white"
                                    >
                                          UpdateProfile
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default VendorProfile;
