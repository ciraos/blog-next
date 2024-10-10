import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Aside from "@/components/aside";

export const metadata: Metadata = {
    title: "留言板 - 葱苓sama",
    icons : "/ciraos.webp"
}

export default function Comments() {
    return(
        <>
            <div className="w-full max-w-6xl py-[40px] px-[15px] mx-auto flex max-768:flex-col">
                <div className="main-container w-3/4 px-2 py-2 max-768:w-full">
                    <div className="text-5xl text-gray-500 font-semibold py-5 px-5">留言板</div>
                    <div className="bg-white px-4 py-4 rounded-xl">
                        <p className="text-center text-4xl text-orange-600">有什么想说的？</p>
                        <p className="text-center text-4xl text-blue-600">或者说有什么想问的？</p>
                        <p className="text-center text-4xl text-green-600">或者你有什么疑问？</p>
                        <p className="text-center text-4xl text-purple-600">都可以在这里提出来哦！</p>
                        <p className="text-center text-4xl text-pink-600">我会耐心解答的！</p>
                    </div>  
                </div>

                <div className="w-1/4 pl-4 max-768:w-full max-768:pl-0"><Aside /></div>
            </div>
        </>
    )
}
