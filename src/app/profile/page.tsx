"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const [data, setdata] = useState('nothing')
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setdata(res.data.data._id)
  };

  return (
    <div>
      <div>
        <h1>Profile</h1>
        <h2>{data === 'nothing' ? 'Nothing' : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
        <p>Profile Page</p>
      </div>
      <button className="bg-red-600 p-2 rounded" onClick={logout}>
        Logout
      </button>
      <button className="bg-yellow-600 p-2 rounded" onClick={getUserDetails}>
        Get User
      </button>
    </div>
  );
};

export default page;
