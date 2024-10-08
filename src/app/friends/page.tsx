import Image from "next/image";
import Link from "next/link";
import Aside from "@/components/aside";
import Twikoo from "@/components/thirdParty/twikoo";
import type { Metadata } from "next";
import { friendlink } from "@/config/link";

export const metadata:Metadata = {
    title: "友人帐 - 葱苓sama",
    icons: "/ciraos.webp",
};

export default function Friends(){
    return (
        <>
            <div className="w-full max-w-6xl py-[40px] px-[15px] mx-auto flex max-768:flex-col">
                <div className="main-container w-3/4 px-2 py-2 max-768:w-full">
                    <div className="text-5xl text-gray-500 font-semibold py-5 px-5">友人帐</div>
                    {friendlink.map((group, index) => ( 
                        <div key={index} className="">
                            <div className="my-4">
                                <div className="text-2xl">{group.groupName}</div>
                                <div className="text-md text-slate-600">{group.groupDescr}</div>
                            </div>
                            <div className="flink grid grid-cols-4 gap-0 max-768:w-4/5 max-768:mx-auto">
                                {group.child.map((child, index) => (
                                    <Link key={index} href={child.link} target="_blank" rel="noopener noreferrer" className="bg-white w-48 h-20 rounded-xl px-1 py-1 flex items-center justify-around max-768:w-full max-768:justify-around">
                                        <img src={child.avatar} alt="friend_avatar" className="w-10 h-10 rounded-[50%]"></img>
                                        <div className="w-32 overflow-hidden">
                                            <div className="text-orange-400">{child.name}</div>
                                            <div className="text-sm truncate">{child.descr}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                    <Twikoo />
                </div>
                <div className="w-1/4 pl-4 max-768:w-full max-768:pl-0"><Aside /></div>
            </div>
        </>
    )
}
