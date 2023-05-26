import React from "react";
import Image from "next/image";
const getDogData = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-store", //so that everytime we get a new data  when we refresh the page
  });
  return res.json();
};

export default async function LoadingSample() {
  const dog = await getDogData();
  return (
    <div className="flex flex-row justify-between">
      <div>
        <Image src={dog.message} width={200} height={200} alt="dog" />
      </div>
    </div>
  );
};
