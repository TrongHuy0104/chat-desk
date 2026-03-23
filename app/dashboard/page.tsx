"use client";

import React, { useEffect, useState } from "react";
import InitialForm from "@/components/dashboard/initial-form";

const Page = () => {
  const [isMetaDataAvailable, setIsMetaDataAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchMetaData = async () => {
      try {
        const res = await fetch("/api/metadata/fetch", {
          cache: "no-store",
        });

        const data = await res.json();
        
        setIsMetaDataAvailable(data.exists);
      } catch (error) {
        console.error("Metadata fetch error:", error);
        setIsMetaDataAvailable(false);
      }
    };

    fetchMetaData();
  }, []);

  // Loading state
  if (isMetaDataAvailable === null) {
    return (
      <div className="flex flex-1 w-full items-center justify-center p-4">
        <p className="text-zinc-500 animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-1 w-full">
      {!isMetaDataAvailable && (
        <div className="flex w-full items-center justify-center p-4 min-h-screen">
          <InitialForm />
        </div>
      )}
    </div>
  );
};

export default Page;