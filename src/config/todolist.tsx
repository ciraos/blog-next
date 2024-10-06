interface todolist {
    id: number,
    content: string,
    isFinished: boolean,
    finishDate: string
}

export const todolist = [
    {
        id: 1,
        content: "post功能实现以及博客首页渲染文章列表",
        isFinished: true,
    },{
        id: 2,
        content: "导航栏下拉列表以及自适应",
        isFinished: false
    },{
        id: 3,
        content: "友人帐",
        isFinished: true
    },{
        id: 4,
        content: "UI界面美化",
        isFinished: false
    },{
        id: 5,
        content: "Twikoo评论系统",
        isFinished: false
    },{
        id: 6,
        content: "第三方插件实装ing",
        isFinished: false
    },{
        id: 7,
        content: '归档和标签界面更详细的显示',
        isFinished: true
    },{
        id: 8,
        content: '如果文章font-matter中的descr为空，则获取文章开头部分字数~',
        isFinished: false
    },{
        id: 9,
        content: "滚动条自定义",
        isFinished: true,
        finishedDate: '2024-09-22'
    },{
        id: 10,
        content: "友链朋友圈",
        isFinished: false,
    },
    {
        id: 11,
        content: "外挂标签",
        isFinished: false
    },
]
