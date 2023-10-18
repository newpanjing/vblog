import fs from "node:fs"

export default {
    watch: ['../archives/*.md'],
    async load(watchFiles) {
        // let files= fs.readdirSync("../archives")
        //调用nodejs读取文件列表
        // console.log(watchFiles)
        //读取文件内容，获取文件的标题
        let data = [];

        watchFiles.forEach((f) => {
            let str = fs.readFileSync(f, 'utf-8')
            let title = extractTitle(str)
            //从f提取文件名

            //文件名是1.md，从文件名提取数字
            // let id = f.match(/\d+/)[0]
            let id=f.split('/').pop().split('.')[0]
            //移除html标签和markdown只保留文本，截取100个字符
            let summary = str.replace(/<[^>]*>?/gm, "").replace(/:|\\+|#|`|'|"|-|{|}|\\[|\\]|&nbsp;|&39;/g, "").substring(6, 106)

            data.push({
                id: id,
                title,
                summary
            })
        })
        //对data进行排序，按照id
        data.sort((a, b) => {
            return b.id - a.id
        })

        return data
    }
}

function extractTitle(txt) {
    //正则提取markdown的标题
    let regex = /(#+)[ ]*(.+)\n/g;

    let first = ""

// 使用正则表达式匹配标题
    let match;
    while ((match = regex.exec(txt)) !== null) {
        first = match[2]
        break
    }

    //m冒泡排序


    return first
}