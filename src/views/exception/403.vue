<template>
  <TsResult title="抱歉，您无访问权限。" status="403" sub-title="">
    <t-button theme="primary" @click="goBack"> 返回 </t-button>
  </TsResult>
</template>

<script setup>
const router = useRouter();
const goBack = () => {
  router.push({ name: 'home' });
};
</script>
