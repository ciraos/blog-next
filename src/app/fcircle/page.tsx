import Link from "next/link";
import Aside from "@/components/aside";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "友链朋友圈 - 葱苓sama",
  icons: "/ciraos.webp"
};

export default function Fcircle() {
  return (
    <>
        <div className="w-full max-w-6xl py-[40px] px-[15px] mx-auto flex max-768:flex-col">
            <div className="main-container w-3/4 px-2 py-2 max-768:w-full">
                <div className="text-5xl text-gray-500 font-semibold py-5 px-5">友链朋友圈</div>
                {/* fcircle Container */}
            </div>
            <Aside />
        </div>
    </>
  )
}
