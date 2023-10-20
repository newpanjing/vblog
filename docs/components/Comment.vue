<script setup>
import {onMounted, ref} from "vue";

const comment = ref(null)
onMounted(() => {
  //创建一个script标签
  const script = document.createElement('script');

  //添加script的相关属性
  script.setAttribute('src', 'https://giscus.app/client.js');
  script.setAttribute('data-repo', 'newpanjing/vblog');
  script.setAttribute('data-repo-id', 'R_kgDOKhypgA');
  script.setAttribute('data-category', 'General');
  script.setAttribute('data-category-id', 'DIC_kwDOKhypgM4CaQSb');
  script.setAttribute('data-mapping', 'pathname');
  script.setAttribute('data-strict', '0');
  script.setAttribute('data-reactions-enabled', '1');
  script.setAttribute('data-emit-metadata', '0');
  script.setAttribute('data-input-position', 'bottom');
  script.setAttribute('data-theme', 'preferred_color_scheme');
  script.setAttribute('data-lang', 'zh-CN');
  script.setAttribute('data-loading', 'lazy');
  script.setAttribute('crossOrigin', 'anonymous');
  script.setAttribute('async', 'async');

  comment.value.append(script)
})
</script>

<template>
  <div ref="comment"></div>
</template>

<style scoped lang="less">

</style>