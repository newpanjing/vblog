const fs = require('fs')

var path = '/Users/panjing/dev/vblog/docs/archives/183.md'

var str = fs.readFileSync(path, 'utf-8')
// // //从 markdown 的文件内容中提取一级标题
// //
// //
// // console.log(str.match(/# *(.+)\r\n/)[0])
//
//
// let str=`---
// title: TypeError 'buildid' is an invalid keyword argument for this function
// ---
//
// # TypeError: 'buildid' is an invalid keyword argument for this function
//
// `

let reg = /---\n(.|\n)*---\n/
let reg2 = /# *(.+)[\r{0,1}|\n]/
console.log(str.match(reg2)[1])