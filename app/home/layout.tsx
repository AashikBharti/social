"use client";
import { Input } from "@/components/ui/input";
import { Dropdown } from "@/components/useable/dropdown";
import LeftBar from "@/components/useable/leftBar";
import RightBar from "@/components/useable/rightBar";
import { useSession } from "next-auth/react";
import { BiBell, BiChat } from "react-icons/bi";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession();

  return (
    <>
      <div className="fixed w-screen">
        <div className="flex h-16 shadow-sm">
          <div className="w-[15%] grid place-items-center">
            <span className="text-violet-500 font-bold text-3xl">LOGO</span>
          </div>
          <div className="w-[60%] grid place-items-center ">
            <div className="w-full px-4 ">
              <Input typeof="text" className="bg-slate-300" />
            </div>
          </div>
          <div className="w-[20%] grid place-items-center">
            <div className="flex justify-end gap-5 items-center  ">
              <span className="bg-slate-400/20 cursor-pointer  grid place-items-center rounded-full ">
                <Dropdown img_url={session?.user?.image} />
              </span>
              <span className="bg-slate-400/20 cursor-pointer h-8 w-8 grid place-items-center rounded-full">
                <BiChat />
              </span>
              <span className="bg-slate-400/20 cursor-pointer h-8 w-8 grid place-items-center rounded-full">
                <BiBell />
              </span>
              <span>{/* aacount setting */}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 pt-24 pl-10">
        <LeftBar />
        {children}
        <RightBar />
      </div>
    </>
  );
}
