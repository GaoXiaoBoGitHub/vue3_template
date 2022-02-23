<template>
  <t-button theme="default" variant="base" @click="goBack">401</t-button>
  <t-button theme="default" variant="outline" @click="goBack">401</t-button>
  <t-button theme="default" variant="dashed" @click="goBack">401</t-button>
  <t-button theme="default" variant="text" @click="goBack">401</t-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const goBack = () => {
  router.push({
    name: 'home',
  });
};
</script>
