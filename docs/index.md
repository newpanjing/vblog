---
# https://vitepress.dev/reference/default-theme-home-page
titleTemplate: 记录生活、记录工作
layout: home

hero:
  name: "PanBlogs"
  text: "思考无边界，博客共成长"
  tagline: 博客采用VitePress魔改
  image:
    src: /boanner-decorate.png
    alt: Banner
  actions:
    - theme: brand
      text: 获取源码
      link: https://github.com/newpanjing/vblog
---

<script setup>
import Archives from './components/Archives.vue';
</script>
<Archives></Archives>


