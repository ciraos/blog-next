import Image from "next/image";
import Aside from "@/components/aside";
import { todolist } from "@/config/todolist";
import type { Metadata } from "next";

export const metadata:Metadata = {
    title: "Todo - 葱苓sama",
    icons: "/ciraos.webp",
};

export default function Todolist(){
    return (
        <>
            <div className="w-full max-w-6xl py-[40px] px-[15px] my-0 mx-auto flex transition-all max-768:flex-col">
                <div className="main-container w-3/4 px-5 bg-white rounded-x max-768:w-full">
                    <div className="h-18 w-32 mx-auto text-center text-2xl my-5">ToDo list</div>
                    <div className="">
                        <ol className="todo ml-2">
                            {todolist.map((item, index) => (<li key={index} style={{textDecorationLine: item.isFinished ? 'line-through' : 'none'}} className="">{item.content}</li>))}
                        </ol>
                    </div>
                </div>
            <div className="w-1/4 pl-4 max-768:w-full max-768:pl-0"><Aside /></div>
        </div>
    </>
)}
