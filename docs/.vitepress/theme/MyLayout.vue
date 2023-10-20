<script setup>
import DefaultTheme from 'vitepress/theme'
import NotFound from "../../components/NotFound.vue";
import Reward from "../../components/Reward.vue";
import Footer from "../../components/Footer.vue";
import AdScene from "../../components/AdScene.vue";

const {Layout} = DefaultTheme
</script>

<template>
  <Layout>
    <template #aside-outline-after>
      <!--   插入广告   -->
      <AdScene/>
    </template>

    <template #layout-bottom>
      <Footer/>
    </template>

    <template #doc-after>
      <!--   文章底部打赏按钮   -->
      <Reward/>
    </template>
    <template #not-found>
      <NotFound/>
    </template>

  </Layout>
</template>