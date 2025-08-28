"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-6">
      {/* Title */}
      <h1 className="text-4xl  mb-4">🚧 Dashboard Coming Soon!</h1>
      <p className="text-gray-500 mb-8 text-center">
        We're working hard to bring you this feature. Stay tuned!
      </p>

      {/* Skeleton Layout */}
      <div className="w-full max-w-3xl space-y-4">
        <Image src='/coming.svg' alt='coming soon' width={400} height={400} className="mx-auto"/>
      </div>
    </div>
  );
};

export default Dashboard;
