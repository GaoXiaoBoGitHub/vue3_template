<template>
  <TsResult title="抱歉，您访问的页面不存在。" status="404">
    <t-button theme="primary" @click="goBack"> 返回 </t-button>
  </TsResult>
</template>

<script setup>
const router = useRouter();
const goBack = () => {
  router.push({ name: 'home' });
};
</script>
