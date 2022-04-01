<template>
  <div @click="goHome()">{{ routerName }}页</div>
  <t-button variant="outline" theme="success" ghost @click="onSelect"> 选择坐标 </t-button>
  <TsMapChoose v-model:visible="visible" v-model="position"></TsMapChoose>
</template>

<script setup>
import api from '@/api';

const routerName = ref('home');
const router = useRouter();

const visible = ref(false);
const position = reactive({ lnglat: null });
function onSelect() {
  visible.value = true;
}

api.get('/sysRole/page', {}, { repeat: true }).then((res) => {
  console.log(res);
});

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

const goHome = () => {
  router.push('/login');
};
</script>
