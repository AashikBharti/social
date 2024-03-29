"use client";

import { BiCake, BiVideo } from "react-icons/bi";
import { CgFeed } from "react-icons/cg";
import { FaShoppingBag } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { TbFriends, TbPhotoSearch } from "react-icons/tb";

function LeftBar() {
  return (
    <div className="w-fit">
      <div className="pt-10 flex flex-col gap-4">
        <div className="flex gap-4 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-md">
          <CgFeed />
          <span className="font-semibold">Feed</span>
        </div>
        <div className="flex gap-4 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-md">
          <TbFriends />
          <span className="font-semibold">Friends</span>
        </div>
        <div className="flex gap-4 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-md">
          <MdEvent />
          <span className="font-semibold">Event</span>
        </div>
        <div className="flex gap-4 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-md">
          <BiVideo />
          <span className="font-semibold">Watch Videos</span>
        </div>
        <div className="flex gap-4 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-md">
          <TbPhotoSearch />
          <span className="font-semibold">Photos</span>
        </div>
      </div>
      <div className="pt-5 px-2">
        <span className="text-[12px] text-slate-400">PAGES YOU LIKE</span>
      </div>
      <div className="flex flex-col pt-5">
        <div className="flex gap-4 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-md">
          <FaShoppingBag />
          <span className="font-semibold">Shopping</span>
        </div>
        <div className="flex gap-4 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-md">
          <BiCake />
          <span className="font-semibold">Cake house</span>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
