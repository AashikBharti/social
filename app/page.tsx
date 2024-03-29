"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "loading") {
  } else if (status === "unauthenticated") {
    return router.push("/auth/login");
  } else if (status === "authenticated") {
    router.push("/home");
    return;
  }
}
