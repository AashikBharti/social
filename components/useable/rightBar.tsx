import React from "react";
import { Skeleton } from "../ui/skeleton";
import { Input } from "../ui/input";
import { UserSearch } from "lucide-react";
import Friend from "./friend";
function RightBar() {
  return (
    <div className="flex flex-col ml-48 p-5 w-72">
      <div className="flex gap-4 items-center border p-2 rounded-md ">
        <UserSearch />
        <Input type="text" className="outline-none" />
      </div>
      <div className="flex flex-col gap-5  pt-4">
        <span>Friends</span>
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        {/* <Skeleton className="w-full h-[30px] rounded-sm" /> */}
        {/* <Skeleton className="w-full h-[30px] rounded-sm" /> */}
        {/* <Skeleton className="w-full h-[30px] rounded-sm" /> */}
        {/* <Skeleton className="w-full h-[30px] rounded-sm" /> */}
        {/* <Skeleton className="w-full h-[30px] rounded-sm" /> */}
        {/* <Skeleton className="w-full h-[30px] rounded-sm" /> */}
        <span>Groups</span>
        <Friend />
        <Friend />
        <Friend />
        {/* <Skeleton className="w-full h-[30px] rounded-sm" /> */}
        {/* <Skeleton className="w-full h-[30px] rounded-sm" /> */}
        {/* <Skeleton className="w-full h-[30px] rounded-sm" /> */}
      </div>
    </div>
  );
}

export default RightBar;
