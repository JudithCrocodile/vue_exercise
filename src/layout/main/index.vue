<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade">
      <!-- 渲染 layout 一級路由組件的子路由 -->
        <component :is="Component" v-if="flag" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
 import {watch, ref, nextTick} from 'vue'
import useLayOutSettingStore from '@/store/modules/setting'
const layOutSettingStore = useLayOutSettingStore()

let flag = ref(true)

watch(()=> layOutSettingStore.refsh, ()=>{
  console.log('flag.value', flag.value);
  
  flag.value = false
  nextTick(() => {
  console.log('flag.value', flag.value);
    flag.value = true
  })
})
</script>

<script lang="ts">
export default {
  name: 'Main'
}
</script>

<style scoped>
.fade-enter-form {
  opacity: 0;
}

.fade-enter-active {
  transition: all .3s;
}

.fade-enter-to {
  opacity: 1;
}
</style>
