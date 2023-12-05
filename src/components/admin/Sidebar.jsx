import { useState } from "react";
import { FaLocationArrow, FaChessRook } from "react-icons/fa";
import { VscRequestChanges } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
const Sidebar = (props) => {
  const navigate = useNavigate();
  console.log(props.type);

  const [open, setOpen] = useState(true);
  const LocationHandler = () => {
    navigate("/admin/location");
  };
  const carHandler = () => {
    navigate("/admin/cars");
  };

  const vendorHandler = () => {
    navigate("/admin/vendors")
  }

  return (
    <div className="flex top-0 sticky z-10">
      <div
        className={` ${open ? "w-72" : "w-20 "
          } bg-gray-100 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
              }`}
          />
          <h1
            className={`text-[#FDD23F] origin-left font-medium text-xl duration-200 ${!open && "scale-0"
              }`}
          >
            LOGO
          </h1>
        </div>
        <ul className="pt-6">
          <li
            onClick={LocationHandler}
            className={`${props.type == "location" && " scale-110 transform-gpu "
              } flex  rounded-md p-2 bg-[#FDD23F]  text-black cursor-pointer hover:bg-gray-700  items-center gap-x-4 mb-5`}
          >
            <FaLocationArrow className="text-3xl text-" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              <h1 className="text-black   duration-200 hover:text-white text-xl">
                Location Management
              </h1>
            </span>
          </li>
          <li
            onClick={carHandler}
            className={`${props.type == "car" && "scale-110 transform-gpu "
              } flex  rounded-md p-2 cursor-pointer bg-[#FDD23F]  hover:bg-gray-700  items-center gap-x-4 mb-5`}
          >
            <VscRequestChanges className="text-3xl text-black" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              <h1 className="text-black  hover:text-white text-xl">
                Cars Management
              </h1>
            </span>
          </li>
          <li
            onClick={vendorHandler}

            className={`${props.type == "vendor" && "transform-gpu scale-110"
              } flex  rounded-md p-2 cursor-pointer bg-[#FDD23F]  hover:bg-gray-700  items-center gap-x-4 mb-5`}
          >
            <FaChessRook className="text-3xl text-black" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              <h1 className="text-black hover:text-white text-xl">
                Vendor Management
              </h1>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
