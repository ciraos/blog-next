import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Navbar from "./navbar";

import ganyu4 from "@/app/images/ganyu4.avif"

export default function Banner() {
    return (
        <>
            <div className="w-full max-w-6xl my-10 mx-auto rounded-2xl">
                <Image src={ganyu4} alt="ganyu" title="ganyu" className="w-[960px] h-[540px] object-fit px-2 py-2 mx-auto rounded-xl"></Image>
            </div>
        </>
    )
}
