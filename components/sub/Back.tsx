import React from "react";
import { useRouter } from "next/navigation";

const Back = () => {
  const router = useRouter();
  return (
    <div>
      <button
        className="text-white text-lg font-bold mt-[600px] cursor-pointer rounded-lg z-20 button-primary py-3 px-4 mx-6"
        onClick={() => {
          router.push("/");
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Back;
