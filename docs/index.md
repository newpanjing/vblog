---
# https://vitepress.dev/reference/default-theme-home-page
titleTemplate: 记录生活、记录工作
layout: home

hero:
  name: "老潘的博客"
  text: "记录生活、记录工作"
  tagline: 博客采用VitePress魔改
  image:
    src: /boanner-decorate.png
    alt: Banner
  actions:
    - theme: brand
      text: 阅读更多
      link: /markdown-examples
---

<script setup>
import Archives from './components/Archives.vue';
</script>
<Archives></Archives>


