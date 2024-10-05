import Image from "next/image";
import Link from "next/link";
import { navList } from "@/config/navlist";
import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <>
      <div id="navbar" className="w-full max-w-6xl h-16 my-0 mx-auto px-4 flex justify-between items-center rounded-b-xl bg-white shadow-lg hover:shadow-xl">

        <Link href="/" className="w-1/3 h-16 flex items-center text-base text-black transition-all max-425:w-max">葱苓samaの博客</Link>

        <div className="nav w-1/3 h-16 content-center text-lg text-black max-425:hidden">
          <ul className="navlist w-full flex justify-end gap-1">
            {navList?.map((item, index) => (
              <li key={index} className="btli w-24 text-center">
                <div className="no-underline hover:underline hover:underline-offset-2">
                  <div className="text-base">{item.list}</div>
                  <ul className="droplist hidden absolute w-24 mx-auto rounded-lg overflow-hidden divide-y-2 divide-solid divide-gray-400 bg-white">
                    {item.child.map((link, index) => (
                      <li key={index} className="w-full h-10 flex items-center text-base justify-center cotnent-center text-black hover:text-purple-500 text-[15.8px]"><Link href={link.link} className="flex items-center justify-center gap-1">{link.icon}{link.name}</Link></li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-1/3 h-16 flex items-center justify-end text-xl gap-2">
          <div className="search"><Icon icon="iconamoon:search-duotone" /></div>
          <div className="console"><Icon icon="mdi-light:console" /></div>
          <div className="mo-nav hidden max-768:block"><Icon icon="hugeicons:menu-square" /></div>
        </div>
        
      </div>
    </>
  );
}
