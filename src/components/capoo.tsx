import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import capoo from "@/app/images/capoo.gif";

export default function Capoo() {
  return (
    <>
      <div className="w-[185px] h-[150px] my-0 mx-auto">
        <Image src={capoo} alt="capoo" className="w-[185px] h-[150px] mx-auto" unoptimized priority={true} />
      </div>
    </>
  );
}
