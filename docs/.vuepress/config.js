import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Super Coding',
    base:'/CQDocument/',
    description: '我的个人笔记文档',
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    theme: defaultTheme({
        colorMode:"light",
        colorModeSwitch:true,
        logo: '/images/logo.png',
        navbar:[ // 导航栏配置
                    {text: 'Java后端', link: '/java-backend/'},
                    {text: '前端', link: '/frontend/'},
                    {text: '云原生',link:'/nativeCloud'},
                    {text: '其他', link: '/others'}
                ],
        sidebar:{
                    '/java-backend/':[{
                        text: 'Java集合',
                        collapsible: true,
                        children: ['/java-backend/java 集合/1.md']
                    },{
                        text:"设计模式",
                        collapsible: true,
                        children: ['/java-backend/设计模式/1.md']
                    },{
                        text:"Java8 函数式编程",
                        collapsible: true,
                        children: ['/java-backend/java8 函数式编程/1.md']
                    }],
                    '/frontend/':[{
                        text: '前端笔记',
                        collapsible: true,
                        children: ['/frontend/1.md','/frontend/2.md']
                    }],
                },
        sidebarDepth: 3, // 侧边栏显示2级
        notFound:['Not Found','没找到','网页走丢了'],
        backToHome:'返回首页' //404 页面中 返回首页链接的文字
    }),
    plugins: [
        searchPlugin({
            maxSuggestions:10,
        }),
    ],
})