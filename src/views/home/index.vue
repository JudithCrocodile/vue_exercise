<template>
  
</template>

<script lang="ts">
import { onMounted } from 'vue';
import useUserStore from '@/store/modules/user'

let userStore = useUserStore();

onMounted(()=>{
  let result = userStore.userInfo()
  if(result.code === 200) {
    this.userName = result.data.checkUser.userName
    this.avatar = result.data.checkUser.avatar
  } else {

  }
})
</script>
