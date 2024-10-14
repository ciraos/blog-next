import Image from "next/image";
import Link from "next/link";
import ciraos from "@/app/images/ciraos.webp";
import type { Metadata } from "next";

export const metadata:Metadata = {
    title: '关于窝 - 葱苓sama',
    icons: '/ciraos.webp',
};

export default function About() {
    return (
        <>
            <div className="container py-[40px] px-[15px] my-0 mx-auto">

                <div className="w-full h-max mx-auto"><Image src={ciraos} alt="avatar" className="w-32 h-32 my-auto mx-auto" priority={true} /></div>

                <div className="w-max h-16 text-4xl content-center mx-auto">葱苓sama</div>
                
                <div className="w-max h-16 text-lg content-center mx-auto">宝剑锋从磨砺出，梅花香自苦寒来。</div>

            </div>
        </>
    )
}
