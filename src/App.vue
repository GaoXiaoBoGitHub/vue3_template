<template>
  <router-view v-if="isFullScreen"></router-view>
  <t-layout v-else class="w-screen h-screen">
    <Header></Header>
    <t-layout>
      <Menu></Menu>
      <t-content class="content-wrap">
        <router-view></router-view>
      </t-content>
    </t-layout>
  </t-layout>
</template>

<script setup>
const isFullScreen = ref(true);
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100vh;
  .content-wrap {
    padding: 0 20px;
    margin: 10px;
    background: #fff;
  }
}
</style>
