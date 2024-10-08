import { MDXRemote } from "next-mdx-remote/rsc";
import { Icon } from "@iconify/react";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import moment from "moment";

import Image from "next/image";
import ciraos from "@/app/images/ciraos.webp"
import Aside from "@/components/aside";
import Link from "next/link";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

async function getPost(params: Props["params"]) {
  const post = getPostBySlug(params.slug);
  return { post };
}

export const dynamicParams = false;
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Post({ params }: Props) {
  const { post } = await getPost(params);
  return (
    <>
      {/* <title>{post.meta?.title}</title> */}
      <div className="w-full max-w-6xl my-10 mx-auto max-768:px-4 max-768:py-4">

        <div className="w-full h-44 rounded-xl px-2 py-2 flex flex-col items-start justify-center">
          <div className="">
            <span className="h-10 flex items-center px-1 float-left"><Icon icon="mdi:tag-outline" className="mr-1" />{post.meta?.tags}</span>
            <span className="h-10 flex items-center px-1 float-left"><Icon icon="material-symbols:category-outline" className="mr-1" />{post.meta?.categories}</span>
          </div>
          <div className="text-4xl font-bold my-1">{post.meta?.title}</div>
          <div className="">
              <time className="h-10 w-max flex items-center px-1 float-left"><Icon icon="clarity:date-line" className="mr-1" />{moment(post.meta?.date).format('YYYY-MM-DD')}</time>
              <time className="h-10 w-max flex items-center px-1 float-left"><Icon icon="lets-icons:date-fill" className="mr-1" />{moment(post.meta?.updated).format('YYYY-MM-DD')}</time>
              <span className="h-10 flex items-center w-max px-2 after:content-['条评论'] float-left"><Icon icon="mingcute:comment-fill" className="mr-1" />114514</span>
          </div>
        </div>


        <div className="flex mt-5 max-768:w-full">

          <div className="w-3/4 max-768:w-full">
            <div className="main-container bg-white rounded-t-xl px-4 py-4 shadow-sm hover:shadow-md">
              <MDXRemote source={post.content} components={{}} options={{}} />
            </div>
            <div className="mt-4 mx-auto py-1 px-0">
                <Image src={ciraos} alt="avatar1" title="avatar1" className="w-16 h-16 mx-auto"></Image>
                <div className="w-full mt-2 mx-auto flex items-center justify-center"><Icon icon="ic:outline-article" className="mr-1 text-xl" /><div className="text-lg">{post.meta?.title}</div></div>
                <div className="text-center text-sm text-gray-400">本博客所有文章除特别声明外，均采用<Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" className="underline mx-1 text-slate-500">CC BY-NC-SA 4.0</Link>许可协议，转载请注明来自葱苓sama！</div>
              </div>
          </div>

          <div className="w-1/4 pl-4 max-768:hidden"><Aside /></div>
        </div>

      </div>
    </>
  );
}
