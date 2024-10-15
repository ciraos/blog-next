import Image from "next/image";
import Link from "next/link";
import Aside from "@/components/aside";
import { Icon } from "@iconify/react";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata:Metadata = {
    icons: "/ciraos.webp",
    title: '分类 - 葱苓sama',    
};

export default async function Tags() {
    const posts = await getAllPosts();
    return (
        <>
            <div className="w-full max-w-6xl py-[40px] px-[15px] mx-auto flex max-768:flex-col">
                
                <div className="main-container w-3/4 bg-white rounded-xl px-2 py-2 max-768:w-full">
                    <div className="text-5xl text-gray-500 font-semibold py-5 px-5">分类</div>
                    <ol className="flex flex-wrap justify-center gap-1">
                        {posts.map((post, index) =>(
                            <li key={index} className="h-10 px-4 py-0 flex items-center rounded-xl bg-white border-2 border-solid border-slate-300 max-425:w-max">
                                <Icon icon="mdi:tag-outline" className="" />
                                <Link href={`/categories/${post.slug}`}>{post.meta?.categories}</Link>
                            </li>
                        ))}
                    </ol>
                </div>
                
                <Aside />
            </div>
        </>
    )
}
