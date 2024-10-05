import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { getAllPosts } from "@/lib/posts";
import moment from "moment";
import capoo1 from "@/app/images/capoo1.gif"
import ciraos from "@/app/images/ciraos.webp";

export default async function Aside(){
    const posts = await getAllPosts();
    return (
        <>
            <div className="h-72 bg-miku-green rounded-xl py-2 text-center flex flex-col justify-evenly shadow-sm hover:shadow-md max-768:hidden">
                <div className="">
                    <div className="w-24 mx-auto text-sm font-bold border-2 border-solid rounded-xl px-2 py-1">Welcome!!</div>
                </div>
                <div className="leading-5">
                    <Image src={ciraos} alt="avatar" className="w-24 h-24 mt-2 mx-auto" loading="lazy" />
                    <div className="text-xl">葱苓sama</div>
                    <p className="text-sm">a small blog station.</p>
                </div>
            </div>

            <div className="h-max mt-2 px-2 py-2 bg-white rounded-xl leading-[1.88rem] shadow-sm hover:shadow-md">
                <div className="flex items-center"><Icon icon="icon-park-solid:volume-notice" className="mr-1 text-blue-400" /><span className="text-black">公告</span></div>
                <p className="indent-4 text-sm">欢迎来到我的博客🦆</p>
                <Image src={capoo1} alt="capoo" className="mx-auto" unoptimized></Image>
            </div>

            <div className="mt-2 px-2 py-2 bg-white rounded-xl shadow-sm hover:shadow-md">
                <div className="flex items-center"><Icon icon="ion:time-outline" className="mr-1 text-blue-400" /><span className="">最近更新</span></div>
                <ul className="mt-1">
                    {posts.map((post, index) => (
                        <li key={index} className="w-full flex justify-between">
                            <Link href={`/posts/${post.slug}`} className="w-2/3 h-max text-slate-600 text-sm hover:text-green-600">{post.meta?.title}</Link>
                            <span className="text-slate-500 text-sm">{moment(post.meta?.updated).format("MM-DD")}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}
