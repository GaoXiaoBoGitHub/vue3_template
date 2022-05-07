<template>
  <t-header class="px-20px">
    <t-head-menu height="120px">
      <template #logo>
        <img width="136" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" />
      </template>
      <template #operations>
        <!-- 搜索 -->
        <t-icon class="t-menu__operations-icon" name="search" />
        <!-- 切换全屏 -->
        <div @click="toggle">
          <t-icon v-if="isFullscreen" class="t-menu__operations-icon" name="fullscreen-exit" />
          <t-icon v-else class="t-menu__operations-icon" name="fullscreen" />
        </div>
        <!-- 用户信息 -->
        <div class="cursor-pointer">
          <t-avatar :image="image" :hide-on-load-failed="false" />
          <span class="ml-2">管理员</span>
          <t-icon name="chevron-down" />
        </div>
      </template>
    </t-head-menu>
  </t-header>
</template>

<script setup>
const image = 'https://tdesign.gtimg.com/site/avatar.jpg';
// 自动导入@vueuse/core
const { isFullscreen, toggle } = useFullscreen();
</script>

<style lang="less" scoped></style>
