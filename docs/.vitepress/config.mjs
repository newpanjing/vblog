import {defineConfig} from 'vitepress'

import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs'
import { resolve } from 'path'
const links=[]
// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "老潘的博客",
    description: "记录百味人生",
    sitemap: {
        hostname: 'https://panblogs.com',
        transformItems: (items) => {
            // add new items or modify/filter existing items
            items.push({
                url: '/extra-page',
                changefreq: 'monthly',
                priority: 0.8
            })
            return items
        }
    },
    themeConfig: {
        editLink: {
            pattern: 'https://github.com/newpanjing/vblog/edit/main/docs/:path',
            text: "在Github上编辑"
        },
        lastUpdated: {
            text: '更新时间',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'short'
            }
        },
        externalLinkIcon: true,
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.svg',
        logoLink: '/',
        //大纲递归
        outline: 'deep',
        search: {
            provider: 'local'
        },
        returnToTopLabel: "返回",
        nav: [
            {text: '首页', link: '/'},
            {text: '分类', link: '/page/1.html'},
            {text: '关于我', link: '/about/'},
            {text: '社区', link: 'https://www.mldoo.com'},
            {
                text: '产品', items: [
                    {
                        text: 'Simple系列', items: [
                            {text: 'Simple Pro', link: 'https://www.mldoo.com/product/simplepro'},
                            {text: 'Simple UI', link: 'https://github.com/newpanjing/simpleui'},
                        ]
                    },
                    {text: '可视化图表', link: 'https://sdc.mldoo.com'},
                    {text: 'IM系统', link: '#'},
                ]
            }
        ],

        sidebar: [
            {
                text: '快速导航',
                items: [
                    {text: '🏡 首页', link: '/'},
                    {text: '📚 分类', link: '/api-examples'}
                ]
            }, {
                link: '/archives',
                sidebar: false
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/newpanjing'}
        ]
        ,
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Pan Jing'
        },
    },
    transformHtml: (_, id, { pageData }) => {
        if (!/[\\/]404\.html$/.test(id))
            links.push({
                // you might need to change this if not using clean urls mode
                url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
                lastmod: pageData.lastUpdated
            })
    },
    buildEnd: ({ outDir }) => {
        // you need to change hostname to your domain
        const sitemap = new SitemapStream({ hostname: 'https://example.com/foo' })
        const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
        sitemap.pipe(writeStream)
        links.forEach((link) => sitemap.write(link))
        sitemap.end()
    }
})
