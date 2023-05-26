import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-evenly">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/about/us">AboutUS</Link>
      <Link href="/about/someone">AboutSomeone</Link>
      <Link href="/listofposts">List of Posts</Link>
      <Link href="/errorSample">Sample Error</Link>
      <Link href="/loadingSample">Sample Loading</Link>
    </div>
  );
};

export default Navbar;
