import { Icon } from "@iconify/react";
interface navList {
    list: string,
    child: string,
    name: string,
    link: string,
    icon: string
};

export const navList = [
    {
        list: "文章",
        icon: <Icon icon="material-symbols-light:article-outline" />,
        // link: '/posts',
        child: [
            {name: '归档', link: '/archives',   icon: <Icon icon="vaadin:archives" />},
            {name: '分类', link: '/categories', icon: <Icon icon="material-symbols:category-outline" />},
            {name: '标签', link: '/tags',       icon: <Icon icon="mdi:tag-outline" />},
    ]},
    {
        list: "友联",
        icon: <Icon icon="" />,
        child: [
            { name: '友人帐', link: '/friends',         icon: <Icon icon="fa-solid:user-friends" />},
            { name: '朋友圈', link: '/fcircle',         icon: <Icon icon="ph:chat-circle-thin" />},
            { name: '留言板', link: '/commentBoard',   icon: <Icon icon="wpf:message" />},
    ]},
    {
        list: "我的",
        icon: <Icon icon="" />,
        child: [
            { name: '关于窝', link: '/about', icon: <Icon icon="mdi:about-circle-outline" />},
            { name: '说说', link: '/shuoshuo', icon: <Icon icon="ri:kakao-talk-fill" />},
            { name: 'todo', link: '/todo', icon: <Icon icon="lucide:list-todo" />},
    ]},
    {
        list: "协议",
        icon: <Icon icon="" />,
        child: [
            { name: '隐私协议', link: '/privacy',    icon: <Icon icon="iconoir:privacy-policy" />},
            { name: 'cookies', link: '/cookies',    icon: <Icon icon="fluent:cookies-28-filled" />},
            { name: '版权协议', link: '/copyright',  icon: <Icon icon="ic:baseline-copyright" />},
    ]},
];
