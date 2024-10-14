import Image from "next/image";
import Link from "next/link";
import Aside from "@/components/aside";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: '/ciraos.webp',
  title: "版权协议 - 葱苓sama",
}

export default function Copyright() {
  return (
    <>
        <div className="w-full max-w-6xl py-[40px] px-[15px] mx-auto flex max-768:flex-col">
            <div className="main-container w-3/4 bg-white rounded-xl px-2 py-2 max-768:w-full">
                <div className="text-5xl text-gray-500 font-semibold py-5 px-5">版权协议</div>

                <p>为了保持文章质量，并保持互联网的开放共享精神，保持页面流量的稳定，综合考虑下本站的所有原创文章均采用 cc 协议中比较严格的<Link href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh" target="_blank" rel="noopener noreferrer">署名-非商业性使用-禁止演绎 4.0 国际标准</Link>。</p>
                <p>这篇文章主要想能够更加清楚明白的介绍本站的协议标准和要求。方便你合理的使用本站的文章。本站无广告嵌入和商业行为。违反协议的行为不仅会损害原作者的创作热情，而且会影响整个版权环境。强烈呼吁你能够在转载时遵守协议。遵守协议的行为几乎不会对你的目标产生负面影响，鼓励创作环境是每个创作者的期望。</p>

                <h2>哪些文章适于本协议？</h2> 
                <p>所有原创内容均在文章标题顶部，以及文章结尾的版权说明部分展示。原创内容的非商用转载必须为完整转载且标注出处的`带有完整 url 链接`或`访问原文`之类字样的超链接。作为参考资料的情况可以无需完整转载，摘录所需要的部分内容即可，但需标注出处。</p>
                
                <h2>你可以做什么？</h2>
                <p>只要你遵守本页的许可，你可以自由地共享文章的内容 — 在任何媒介以任何形式复制、发行本作品。并且无需通知作者。</p>

                <h2>你需要遵守什么样的许可？</h2>
                <h3>署名</h3>
                <p>你必须标注内容的来源，你需要在文章开头部分（或者明显位置）标注原文章链接（建议使用超链接提升阅读体验）。</p>

                    <h3>禁止商用</h3>
                    <p>本站内容免费向互联网所有用户提供，分享本站文章时禁止商业性使用、禁止在转载页面中插入广告（例如谷歌广告、百度广告）、禁止阅读的拦截行为（例如关注公众号、下载 App 后观看文章）。</p>
                
                    <h3>禁止演绎</h3>
                    <ul>
                        <li><strong>分享全部内容（无修改）</strong>你需要在文章开头部分（或者明显位置）标注原文章链接（建议使用超链接）</li>
                        <li><strong>分享部分截取内容或者衍生创作</strong>目前本站全部原创文章的衍生品禁止公开分享和分发。如有更好的修改建议，可以在对应文章下留言。如有衍生创作需求，可以在评论中联系。</li>
                        <li><strong>作为参考资料截取部分内容</strong>作为参考资料的情况可以无需完整转载，摘录所需要的部分内容即可，但需标注出处。</li>
                    </ul>

                <h2>什么内容会被版权保护</h2>
                <p>包括但不限于：</p>
                <ul>
                    <li>文章封面图片</li>
                    <li>文章标题和正文</li>
                    <li>站点图片素材（不含主题自带素材）</li>
                </ul>

                <h2>例外情况</h2>
                <ul>
                    <li>本着友好互相进步的原则，被本站友链收录的博客允许博客文章内容的衍生品的分享和分发，但仍需标注出处。</li>
                    <li>本着互联网开放精神，你可以在博客文章下方留言要求授权博文的衍生品的分享和分发，标注你的网站地址。</li>
                </ul>

                <h2>网站源代码协议</h2>
                <p>网站源代码（仅包含 css、js）的代码部分采用 GPL 协议。</p>

            </div>
        
            <Aside />
        </div>
    </>
  );
}
