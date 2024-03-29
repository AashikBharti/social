"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function SignIn() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", data);
    console.log(res?.url);
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/home");
    }
  });

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-900/10">
      <div className="flex flex-col items-center justify-center w-1/3 py-16 shadow-md">
        <form className="flex flex-col gap-10 w-[80%]">
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            value={data.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />
          <Button onClick={handleSignIn}>Sign In</Button>
          <Button
            className="w-full"
            onClick={(e) => {
              e.preventDefault();
              signIn("github");
            }}
          >
            Sign in with Github
          </Button>
          <Separator className="bg-black" />
          <Link href={"/auth/register"} className="">
            <Button className="w-full">Register</Button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
