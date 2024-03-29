"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";

function Register() {
  const { toast } = useToast();
  const router = useRouter();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", data);
      // console.log(response.data);
      const resData = response.data;

      if (resData.success === true) {
        toast({
          title: "Register Success",
          description: "redirect to home page",
          duration: 3000,
        });
        router.push("/auth/login");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-900/10">
      <div className="flex flex-col items-center justify-center w-1/3 py-16 shadow-md">
        <form className="flex flex-col gap-10 w-[80%]">
          <Input
            type="text"
            placeholder="First name"
            name="firstname"
            value={data.firstname}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Last name"
            name="lastname"
            value={data.lastname}
            onChange={handleChange}
          />
          <Input
            type="email"
            placeholder="Email address"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <Button onClick={(e) => handleSubmit(e)}>Join Us</Button>
          <Separator className="bg-black" />
          <Button>
            <Link href={"/auth/login"}>Go to Sign In</Link>
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Register;
