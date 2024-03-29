"use client";

import { Input } from "@/components/ui/input";
import { BiBell, BiChat } from "react-icons/bi";

import LeftBar from "@/components/useable/leftBar";
import RightBar from "@/components/useable/rightBar";
import MiddleBar from "@/components/useable/middleBar";
import { Dropdown } from "@/components/useable/dropdown";
import { useSession } from "next-auth/react";

function Home() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <main className="mr-24">
        <MiddleBar img_url={session?.user?.image} />
      </main>
    );
  }
}

export default Home;
