import Image from "next/image";
import ganyu4 from "@/app/images/ganyu4.avif";
import ganyu5 from "@/app/images/ganyu5.avif";
import ganyu6 from "@/app/images/ganyu6.avif";
import miku11 from "@/app/images/miku11.avif";
import miku16 from "@/app/images/miku16.avif";

interface sslist {
  id: number;
  content: string;
  images: string[];
  tag: string,
  time: number;
}

export const sslist = [{
    id: 1,
    content: "第一条说说！",
    tag: "心情",
    time: "2024-09-09",
  },{
    id: 2,
    content: "图片测试",
    images: (<>
      <Image src={ganyu4} alt="ss-img" title="ganyu" className="rounded-md" priority={true} />
      <Image src={ganyu5} alt="ss-img" title="ganyu" className="rounded-md" priority={true} />
      <Image src={ganyu6} alt="ss-img" title="ganyu" className="rounded-md" priority={true} />
      <Image src={miku11} alt="ss-img" title="ganyu" className="rounded-md" priority={true} />
      <Image src={miku16} alt="ss-img" title="ganyu" className="rounded-md" priority={true} />
    </>),
    tag: "测试",
    time: "2024-09-09",
  },{
    id: 3,
    content: '所以每个页面的标题该怎么改······',
    tag: '心情',
    time: '2024-09-09',    
  },{
    id: 4,
    content: '可恶，还是不会写怎么获取文章信息·····尴尬··',
    tag: '重构博客记录',
    time: '2024-09-09',
  },{
    id: 5,
    content: '因为不会写瀑布流所以只好用flex来实现了。',
    tag: '心情',
    time: '2024-09-13'
  },{
    id: 6,
    content: "通义灵码很好的解决了我不会说话的问题（",
    tag: '心情',
    time: '2024-09-17'
  },{
    id: 7,
    content: "国庆节了，不要再讨论什么 BGP、OSPF、VLAN 了。你带你的路由器、交换机回到家并不能给你带来任何实质性作用，朋友们从兜里掏出一大把钱吃喝玩乐，你默默在家里配网。亲戚朋友吃饭问你收获了什么，你说我接了 SIX、HKIX，可以一跳直达 GitHub、Google。亲戚们懵逼了，你还在心里默默嘲笑他们，笑他们不懂你用的路由协议、不懂你的起夜级主干网，也笑他们有线电视送的华数宽带网络质量差。你父母的同事都在说自己的子女一年的收获：儿子买了个房，女儿买了辆车，姑娘升职加薪了。你的父母默默无言，说我的孩子在家装了个叫什么猪扒牌的路由器，开起来嗡嗡响、家里电表走得越来越快了",
    tag: "心情",
    time: "2024-09-26"
  }
];
