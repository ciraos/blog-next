import Link from "next/link";

interface friendlink {
    groupName: string,
    groupDescr: string,
    child: string,
    name: string,
    link: string,
    avatar: string,
    siteshot?: string,
    descr: string,
}

export const friendlink = [
    {
        groupName: "冰糖红茶",
        groupDescr: "一个神秘の组织",
        child: [
            { name: '小冰', link: 'https://zfe.sapce', avatar: 'https://zfe.space/images/headimage.png', descr: '做个有梦想的人！'},
            { name: 'Akilarの糖果屋', link: 'https://akilar.top', avatar: 'https://npm.elemecdn.com/akilar-candyassets/image/siteicon/favicon.png', descr: '期待您的光临！'},
            { name: '张洪heo', link: 'https://blog.zhheo.com', avatar: 'https://npm.elemecdn.com/guli-heo/img/avatar2.png', descr: '分享设计与科技生活'},
            { name: '贰猹', link: 'https://noionion.top', avatar: 'https://pub-noionion.oss-cn-hangzhou.aliyuncs.com/head.jpg', descr: '用这生命中的每一秒，给自己一个不后悔的未来'},
        ],
    },
    {
        groupName: "小伙伴们",
        groupDescr: "感谢陪伴~",
        child: [
            { name: '', link: '', avatar: '', siteshot: '', descr: '' },
        ],
    },
];
