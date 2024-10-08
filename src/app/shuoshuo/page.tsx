import Image from "next/image";
import Link from "next/link";
import Twikoo from "@/components/thirdParty/twikoo";
import type { Metadata } from "next";
import Aside from "@/components/aside";
import moment from "moment";
import {sslist} from "@/config/shuoshuo"

export const metadata:Metadata = {
    title: "说说 - 葱苓sama",
    icons: "/ciraos.webp",
};

export default function Shuoshuo() {
  return (
    <>
      <div className="w-full max-w-6xl py-[40px] px-[15px] mx-auto flex max-768:flex-col">
        <div className="main-container w-3/4 rounded-xl px-2 py-2 max-768:w-full">
          {/* 标题 */}
          <div className="w-max h-16 my-0 mx-auto flex text-xl items-center"><p className="before:content-['────'] before:mr-2 after:content-['────'] after:ml-2">碎碎念</p></div>
          {/* 容器 */}
          <ul className="ss mt-2 px-2 transition-all grid grid-cols-3 gap-2">
            {sslist.map((item, index) =>(
              <li key={index} className="ss-item w-72 h-max bg-white rounded-xl leading-relaxed flex flex-col justify-between px-2 py-2 transition-all shadow-sm hover:shadow-md">
                <p className="">{item.content}</p>
                <div className="my-1 columns-4 gap-1 transition-all hover:columns-3">{item.images}</div>
                <hr className="my-2" />
                <div className="w-full flex items-center justify-between text-sm">
                  <span className="before:content-['#'] before:mr-[1px]">{item.tag}</span>
                  <span className="">{moment(item.time).format('YYYY-MM-DD')}</span>
                </div>
              </li>
            ))}
          </ul>
          <Twikoo />
        </div>
        <div className="w-1/4 pl-4 max-768:w-full max-768:pl-0"><Aside /></div>
      </div>
    </>
  );
}
