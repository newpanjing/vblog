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

        //
        // return [
        //     {params: {pkg: 'foo', files: files}},
        //     {params: {pkg: 'bar'}},
        //     {params: {pkg: '1', files: files}}
        // ]
    }
}