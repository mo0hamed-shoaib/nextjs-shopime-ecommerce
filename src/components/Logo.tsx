import Image from "next/image";
import React from "react";
import logo from "@/app/icon.svg";

export default function Logo() {
  return (
    <div>
      <Image src={logo} alt="Logo" width={100} height={100} />
    </div>
  );
}
