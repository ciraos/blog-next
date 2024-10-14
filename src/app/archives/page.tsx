import Image from "next/image";
import Link from "next/link";
import Aside from "@/components/aside";
import { getAllPosts } from "@/lib/posts";
import moment from "moment";
import type { Metadata } from "next";

export const metadata:Metadata = {
    title: "归档 - 葱苓sama",
    icons: "/ciraos.webp",
};

export default async function Archives() {
    const posts = await getAllPosts();
    return (
        <>
            <div className="w-full max-w-6xl py-[40px] px-[15px] mx-auto flex max-768:flex-col">

                <div className="main-container w-3/4 bg-white rounded-xl px-2 py-2 max-768:w-full">
                    <div className="text-5xl text-gray-500 font-semibold py-5 px-5">隧道</div>
                    <ul className="w-[65%] max-425:w-4/5">
                        {posts?.map((post, index) => (
                            <li key={index} className="flex items-center">
                                <div className="">{moment(post.meta?.date).format('MM-DD')}</div>
                                <Link href={`/posts/${post.slug}`} className="">{post.meta?.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <Aside />
            </div>
        </>
    )
}
