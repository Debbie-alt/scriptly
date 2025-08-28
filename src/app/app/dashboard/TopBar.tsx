"use client";

import React from "react";
import { auth } from "@/config/firebase.config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

const TopBar = () => {
  const user = auth.currentUser;
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/signin");
  };

  return (
    <nav className="w-full h-16 px-6 flex items-center justify-between bg-gray-900 text-white shadow-md">
      {/* Left: Logo */}
      <div className="font-swemibold text-lg">Hi there! {user?.displayName}</div>

      {/* Middle: Nav links */}
    

      {/* Right: User Info */}
      <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-6 ">
        <a href="/#" className="hover:text-blue-400">Home</a>
        <a href="#" className="hover:text-blue-400">Projects</a>
      </div> 
        {user ? (
          <>
            <span className="text-sm font-medium">
              {user.displayName || "User"}
            </span>
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs">
                {user.displayName?.charAt(0) || "U"}
              </div>
            )}
            <button
              onClick={handleLogout}
              className="text-sm px-3 py-1 rounded-lg "
            >
               <LogOut/>
            </button>
          </>
        ) : (
          <button
            onClick={() => router.push("/signin")}
            className="text-sm px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700"
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default TopBar;
