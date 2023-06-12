import { useState } from "react";

export const DropDown = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsOpen(false);
  };

  return (
    <div
      className="relative flex items-center px-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button>My Projects</button>
      {isHovered && isOpen && (
        <div
          className="absolute  z-10 w-max min-w-[6rem]  group-hover:block hover:block top-[2.1rem] "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="bg-feeney_secondary">
            <li className="hover:bg-feeney_secondary_dark flex justify-between items-center px-4 py-2 text-sm cursor-pointer">
              <button href="#">Project 1</button>
            </li>
            <hr />
            <li className="hover:bg-feeney_secondary_dark flex justify-between items-center px-4 py-2 text-sm cursor-pointer">
              <button href="#">Project 2</button>
            </li>
            <hr />
            <li className="hover:bg-feeney_secondary_dark flex justify-between items-center px-4 py-2 text-sm cursor-pointer">
              <button href="#">Project 3</button>
            </li>
            <hr />
            <li className="hover:bg-feeney_secondary_dark flex justify-between items-center px-4 py-2 text-sm cursor-pointer">
              <button href="#">Project 4</button>
            </li>
            <hr />
            <li className="hover:bg-feeney_secondary_dark flex justify-between items-center px-4 py-2 text-sm cursor-pointer">
              <button href="#">Project 5</button>
            </li>
            <hr />
            <li className="hover:bg-feeney_secondary_dark flex justify-between items-center px-4 py-2 text-sm cursor-pointer">
              <button href="#">Project 6</button>
            </li>
            <hr />
            <li className="hover:bg-feeney_secondary_dark flex justify-between items-center px-4 py-2 text-sm cursor-pointer">
              <button href="#">Project 7</button>
            </li>
            <hr />
          </ul>
        </div>
      )}
    </div>
  );
};
