export default {
    load(){
        let links = [{
            text: '首页',
            link: '/'
        }, {
            text: '分类',
            link: '/page/1.html'
        }, {
            text: '社区',
            link: 'https://www.mldoo.com'
        }, {
            text: '谈笑风生间',
            link: 'https://anyview.fun'
        }]
        let linksHtml = links.map(item => {
            let target = ''
            if (item.link.indexOf("http") === 0) {
                target = 'target="_blank"'
            }
            return `<a href="${item.link}" ${target}>${item.text}</a>`
        })

        return `<div>${linksHtml.join(" ")}</div>`
    }
}