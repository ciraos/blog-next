import Image from "next/image";
import Link from "next/link";
import Aside from "@/components/aside";
import type { Metadata } from "next";
import { friendlink } from "@/config/link";

export const metadata:Metadata = {
    title: "友人帐 - 葱苓sama",
    icons: "/ciraos.webp",
};

export default function Friends(){
    return (
        <>
            <div className="w-full max-w-6xl py-[40px] px-[15px] mx-auto flex max-768:flex-col">
                <div className="main-container w-3/4 px-2 py-2 max-768:w-full">
                    <div className="text-5xl text-gray-500 font-semibold py-5 px-5">友人帐</div>
                    {friendlink.map((group, index) => ( 
                        <div key={index} className="">
                            <div className="my-4 dark:text-white">
                                <h2 className="text-2xl">{group.groupName}</h2>
                                <p className="text-sm text-slate-600 dark:text-slate-200">{group.groupDescr}</p>
                            </div>
                            <div className="flink flex flex-wrap justify-between gap-0">
                                {group.child.map((child, index) => (
                                    <Link key={index} href={child.link} target="_blank" rel="noopener noreferrer" className="bg-white w-44 h-20 rounded-xl px-2 py-2 flex items-center transition-all max-425:h-24 max-375:w-[154px] max-425:text-center max-425:flex-col max-320:mx-auto dark:bg-dacard">
                                        <img src={child.avatar} alt="friend_avatar" className="w-10 h-10 rounded-[50%] mr-2 max-425:mr-0"></img>
                                        <div className="w-32 overflow-hidden">
                                            <div className="text-orange-400">{child.name}</div>
                                            <div className="text-sm truncate">{child.descr}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                    <hr className="my-5 mx-0" />
                    <div className="tab-box">
                        <div className="tab-header">
                            <div className="">约法三章</div>
                            <div className="">我的信息</div>
                            <div className="">butterfly、anzhiyu主题</div>
                            <div className="">volantis主题</div>
                            <div className="">fluid主题</div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-content-item">
                                <ol>
                                    <li>因为我的网站经常炸掉，所以我建议你的链接<strong>不要挂掉</strong>哦；</li>
                                    <li>网站必须有 强制https协议头；</li>
                                    <li>已经添加 葱苓sama 的博客；</li>
                                    <li>博客内容与生活、科技等等有关，请勿上传违法 大陆法律、法规 的内容；</li>
                                    <li>链接主体为 个人，网站类型为 博客；</li>
                                    <li>网站现在可以在 中国大陆区域 正常访问；</li>
                                    <li>网站内容符合中国大陆 法律法规。</li>
                                    <li>失联友链就不予以展示了（</li>
                                </ol>
                            </div>
                            <div className="tab-content-item">a</div>
                            <div className="tab-content-item">a</div>
                            <div className="tab-content-item">a</div>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 pl-4 max-768:w-full max-768:pl-0"><Aside /></div>
            </div>
        </>
    )
}
