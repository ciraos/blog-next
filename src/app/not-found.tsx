import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default async function NotFound() {
  const posts = await getAllPosts();
  return (
    <>
      <div className="cotnainer main-container mt-10 mx-auto py-4 px-4 rounded-xl flex items-center flex-col justify-center">
        <h2>喵喵喵，页面找不到了呢！请联系管理员桑！！</h2>
        <p className='text-9xl font-semibold font-sans'>404</p>
        <p className='text-lg italic lowercase font-serif'>could not find requested resource</p>
        <Link href="/" className="text-miku-green">回到主页</Link>
        <div className=''>
          {posts.map((post, index) => (
            <Link key={index} href={`/posts/${post.slug}`}>{post.meta?.tags}</Link>
          ))}
        </div>
      </div>
    </>
  )
}
