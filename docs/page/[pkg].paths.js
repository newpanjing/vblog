/**
 * 读取所有的文章，生产分页，这里只用到了一个总页数
 * 根据这个总页数来生成对应的静态页面，而页面上的数据则是通过Pages.vue组件来生成
 */
import fs from 'fs'
import path from 'path'

export default {
    async paths() {
        //读取文件的数量
        //获取根路径
        let files = fs.readdirSync(path.join(__dirname, "../archives"))
        //根据文件计算页数，一页10个
        let total = Math.ceil(files.length / 10)

        let pages = [];

        for (let i = 0; i < total; i++) {
            pages.push({
                params: {
                    pkg: `${i + 1}`,
                    total
                }
            })
        }

        return pages;
    }
}