import { Camera, Sun, Settings, HelpCircle } from "react-feather";
import { DropDown } from "./DropDown";

export const Toolbar = () => {
  return (
    <div
      className={
        "h-10 mt-14 mr-7 max-w-max ml-auto flex items-center rounded-md text-white bg-feeney_secondary_dark"
      }
    >
      <DropDown />
      <div
        className={"flex items-center px-3 border-l  border-feeney_highlight"}
      >
        <span className="font-medium">2D</span>
        <label className="relative mx-3 inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-[#EDEDED] rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-feeney_primary after:border-feeney_primary after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
        <span className="font-medium">3D</span>
      </div>

      <ul className={"flex gap-6 px-3 border-l  border-feeney_highlight"}>
        <li
          className={
            "cursor-pointer transition-all duration-500 hover:text-feeney_primary"
          }
        >
          <Camera />
        </li>
        <li
          className={
            "cursor-pointer transition-all duration-500 hover:text-feeney_primary"
          }
        >
          <Sun />
        </li>
        <li
          className={
            "cursor-pointer transition-all duration-500 hover:text-feeney_primary"
          }
        >
          <Settings />
        </li>
        <li
          className={
            "cursor-pointer transition-all duration-500 hover:text-feeney_primary"
          }
        >
          <HelpCircle />
        </li>
      </ul>
    </div>
  );
};
