<script setup>
import ReturnTop from "./ReturnTop.vue";
import {computed, onMounted} from "vue";
import {useData} from "vitepress";

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


const linksHtml = computed(() => {
  let html = links.map(item => {
    let target = ''
    if (item.link.indexOf("http") === 0) {
      target = 'target="_blank"'
    }
    return `<a href="${item.link}" ${target}>${item.text}</a>`
  })
  return html.join(" ")
})

const {site} = useData()

</script>

<template>
  <div class="footer">
    <div class="links" v-html="linksHtml"></div>
    <div class="copyright">Copyright © 2013-present {{site.title}}</div>
  </div>
  <ReturnTop/>
</template>

<style scoped lang="less">
.footer {
  text-align: center;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>