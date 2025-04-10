import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { HiOutlineViewGrid, HiOutlineUser, HiOutlineDocumentText, HiOutlineUsers } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { BiBook, BiUserCircle } from "react-icons/bi";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="w-15 bg-white min-h-screen shadow-lg p-4">
     <div className="flex items-center space-x-3 pb-4 border-b">
        <img
          src="https://i.pravatar.cc/100" 
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <span className="font-semibold text-gray-900">ByeWind</span>
      </div>

      <div className="mt-1">
      <div className="flex justify-between items-center">
      <span className="text-gray-500 uppercase text-sm">Favorites</span>
        <span className="text-gray-500 uppercase text-sm opacity-50">Recently</span>
       </div>
        <ul className="mt-2 space-y-1">
          <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">• Overview</li>
          <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">• Projects</li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-gray-500 uppercase text-sm">Dashboards</h3>
        <ul className="mt-2 space-y-1">
          <li className="flex items-center p-2 bg-gray-200 rounded">
            <MdOutlineDashboard className="mr-2" /> Overview
          </li>
          <li className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
            <HiOutlineViewGrid className="mr-2" /> eCommerce
          </li>
          <li className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
            <HiOutlineDocumentText className="mr-2" /> Projects
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-gray-500 uppercase text-sm">Pages</h3>
        <ul className="mt-2 space-y-1">
          <li onClick={() => toggleSection("userProfile")} className="flex justify-between items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
            <span className="flex items-center">
              <HiOutlineUser className="mr-2" /> User Profile
            </span>
            {openSections.userProfile ? <FaChevronDown /> : <FaChevronRight />}
          </li>
          {openSections.userProfile && (
            <ul className="pl-6 mt-1 space-y-1">
              <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Overview</li>
              <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Projects</li>
              <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Campaigns</li>
              <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Documents</li>
              <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Followers</li>
            </ul>
          )}
          <li className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
            <BiUserCircle className="mr-2" /> Account
          </li>
          <li className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
            <HiOutlineUsers className="mr-2" /> Corporate
          </li>
          <li className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
            <BiBook className="mr-2" /> Blog
          </li>
          <li className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
            <HiOutlineViewGrid className="mr-2" /> Social
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;


