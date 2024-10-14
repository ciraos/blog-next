import Link from "next/link";

import Aside from "@/components/aside";
import { Icon } from "@iconify/react";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata:Metadata = {
    title: "标签 - 葱苓sama",
    icons: "/ciraos.webp",
};

export default async function Tags() {
    const posts = await getAllPosts();
    return (
        <>
            <div className="w-full max-w-6xl py-[40px] px-[15px] mx-auto flex max-768:flex-col">
                <div className="main-container w-3/4 bg-white rounded-xl px-2 py-2 max-768:w-full">
                    <div className="text-5xl text-gray-500 font-semibold py-5 px-5">标签</div>
                    <ol className="flex flex-wrap justify-center gap-5">
                        {posts.map((post, index) =>(
                            <li key={index} className="w-max h-10 px-5 py-5 flex items-center justify-center rounded-xl bg-white border-2 border-slate-300 border-solid">
                                <Icon icon="mdi:tag-outline" className="mr-1" />
                                <Link href={`/tags/${post.slug}`}>{post.meta?.tags}</Link>
                            </li>
                        ))}
                    </ol>
                </div>
                <Aside />
            </div>
        </>
    )
}
