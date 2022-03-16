<template>
  <div @click="goHome()">{{ routerName }}页</div>
</template>

<script setup>
import api from '@/api';

const routerName = ref('home');
const router = useRouter();

// onMounted(() => {
api.get('/sysRole/page', {}, { loading: true }).then((res) => {
  console.log(res);
});
api.get('/sysRole/page', {}, { repeat: true }).then((res) => {
  console.log(res);
});
api.get('/sysRole/page', {}, { repeat: true }).then((res) => {
  console.log(res);
});
// });

watch(
  () => routerName.value,
  () => {
    console.log('watch');
  },
);
onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
  routerName.value = '123';
});

function goHome() {
  router.push('/login');
}
</script>
