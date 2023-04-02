import {DefaultTheme, defineConfig} from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'


// 顶部菜单配置
const nav: DefaultTheme.NavItem[] = [
    { text: '组件', link: '/components/foo' },
]

// 侧边栏目录
const sidebar: DefaultTheme.Sidebar = {
    '/components': [
        {
            text: 'Foo',
            items: [
                {text: 'Foo组件', link: '/components/foo'},
                {text: 'Button组件', link: '/components/button'},
            ]
        },
    ]
}

export default defineConfig({
    title: 'SV3-Family',
    lang: 'cn-ZH',
    base: '/',
    // head: [
    //     [
    //         'link',
    //         {rel: 'icon', href: 'logo.png'}
    //     ]
    // ],
    lastUpdated: true,
    themeConfig: {
        // logo: '/logo.png',
        siteTitle: 'SV3-Family',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/LonelySnowman' }
        ],
        nav,
        sidebar,
    },
    markdown: {
        theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark'
        },
        lineNumbers: true,
        config(md) {
            md.use(componentPreview)
            md.use(containerPreview)
        }
    }
})
