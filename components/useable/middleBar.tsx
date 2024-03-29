import React from "react";
import Post from "./post";
import { Button } from "../ui/button";
import { BiUser } from "react-icons/bi";
import { Skeleton } from "../ui/skeleton";
import { Input } from "../ui/input";

function MiddleBar({ img_url }: { img_url: any }) {
  const data = {
    id: "12esx23exsaeq2e",
    image_url: "vercel.svg",
    user_name: "Mayank Bharti",
    like_number: 400,
    comments_number: 200,
    comments: [],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit facilis ea earum voluptatum reiciendis delectus repellendus maximedoloribus fugit velit, praesentium odit.",
  };
  return (
    <div className="bg-slate-200/20 flex flex-col items-center px-8 py-8">
      <div className="p-2 flex flex-col gap-4">
        <span className="font-bold text-xl text-slate-500">Stories</span>
        <div className="flex gap-2 overflow-hidden">
          <Skeleton className="w-36 h-48 rounded-sm cursor-pointer" />
          <Skeleton className="w-36 h-48 rounded-sm cursor-pointer" />
          <Skeleton className="w-36 h-48 rounded-sm cursor-pointer" />
          <Skeleton className="w-36 h-48 rounded-sm cursor-pointer" />
          <Skeleton className="w-36 h-48 rounded-sm cursor-pointer" />
          <Skeleton className="w-36 h-48 rounded-sm cursor-pointer" />
        </div>
        <div className="flex flex-col gap-4 bg-white rounded-sm shadow-sm py-4">
          <div className="flex items-center gap-2  p-4">
            <Button
              variant="outline"
              className=" w-10 h-10 rounded-full p-0 flex items-center justify-center"
            >
              <img
                src={img_url}
                alt="img not found"
                className="w-10 h-10 rounded-full"
              />
            </Button>
            <Input
              type="text"
              placeholder="say something"
              className="bg-white"
            />
            <Button>post</Button>
          </div>
        </div>
        <div className=" flex flex-col">
          <div className=" p-2 flex items-center justify-between">
            <span className="font-bold text-xl text-slate-500">
              Recent Post
            </span>
            <div className="flex gap-4 items-center">
              <span className="text-sm text-slate-400 cursor-pointer hover:text-slate-800 hover:font-semibold">
                Feeds
              </span>
              <span className="text-sm text-slate-400 cursor-pointer hover:text-slate-800 hover:font-semibold">
                All
              </span>
              <span className="text-sm text-slate-400 cursor-pointer hover:text-slate-800 hover:font-semibold">
                Following
              </span>
              <span className="text-sm text-slate-400 cursor-pointer hover:text-slate-800 hover:font-semibold">
                Latest
              </span>
              <span className="text-sm text-slate-400 cursor-pointer hover:text-slate-800 hover:font-semibold">
                Popular
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 ">
            <Post data={data} />
            <Post data={data} />
            <Post data={data} />
            <Post data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleBar;
