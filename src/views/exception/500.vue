<template>
  <TsResult title="抱歉，服务器出了一些问题。" status="500">
    <t-button theme="primary" @click="goBack"> 返回 </t-button>
  </TsResult>
</template>

<script setup>
const router = useRouter();
const goBack = () => {
  router.push({ name: 'home' });
};
</script>
