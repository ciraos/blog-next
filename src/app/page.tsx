import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react"
import { getAllPosts } from "@/lib/posts";
import Aside from "@/components/aside";
import moment from 'moment';

export default async function Home() {
  const posts = await getAllPosts();
  return (
  <>
    <div className="w-full max-w-6xl py-[40px] px-[15px] my-0 mx-auto flex transition-all max-768:flex-col">
      <div id="recent-post" className="w-3/4 max-768:w-full">
        {posts?.map((post, index) => (
          <div id="recent-post-item" className="h-40 py-4 px-4 bg-white rounded-xl overflow-hidden flex flex-col justify-center max-600:w-full max-768:flex-col" key={index}>
            <Link href={`/posts/${post.slug}`} className="text-2xl">{post.meta?.title}</Link>
            <div className="text-base text-slate-400 overflow-hidden">{post.meta?.description}</div>
            <div className="w-full flex flex-wrap text-xs text-gray-600 divide-x-2 divide-solid divide-gray-200">
              <time className="h-max pr-2 flex items-center before:content-['发布于'] before:mr-1"><Icon icon="clarity:date-line" className="mr-1" />{moment(post.meta?.date).format('YYYY-MM-DD')}</time>
              <time className="h-max px-2 flex items-center before:content-['更新于'] before:mr-1"><Icon icon="lets-icons:date-fill" className="mr-1" />{moment(post.meta?.updated).format('YYYY-MM-DD')}</time>
              <Link href={`/tags/${post.meta?.tags}`} className="h-max px-2 flex items-center"><Icon icon="mdi:tag-outline" className="mr-1 divide-x-2 divide-dashed divide-orange-600" />{post.meta?.tags}</Link>
              <Link href={`/categories/${post.meta?.categories}`} className="h-max px-2 flex items-center"><Icon icon="material-symbols:category-outline" className="mr-1" />{post.meta?.categories}</Link>
              <span className="h-max px-2 flex items-center after:content-['条评论']"><Icon icon="mingcute:comment-fill" className="mr-1" />114514</span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/4 pl-4 max-768:w-full max-768:pl-0 max-768:mt-5"><Aside /></div>
    </div>
  </>
  );
}
