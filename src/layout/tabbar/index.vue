<template>
  <div class="tabbar">
    <div class="tabbar__left">
      <el-icon style="margin-right: 10px;" @click="changeIcon">
        <!-- <Expand /> -->
        <component :is="fold ? 'Fold' : 'Expand'" />
      </el-icon>

    <el-breadcrumb separator="/" :separator-icon="ArrowRight">
      <el-breadcrumb-item
        v-for="(item, index) in $route.matched"
        :key="index"
        v-show="item.meta.title"
        :to="item.path"
      >
        <el-icon style="vertical-align: middle">
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span style="margin: 0 5px; vertical-align: middle">
          {{ item.meta.title }}
        </span>
      </el-breadcrumb-item>
    </el-breadcrumb>
    </div>
    <div class="tabbar__right">
      <el-button size="small" icon="Refresh" circle  @click="updateRefsh"></el-button>
      <el-button size="small" icon="FullScreen" circle  @click="fullScreen"></el-button>
      <el-button size="small" icon="Setting" circle></el-button>
      <img src="" alt="" width="24px" height="24px" style="margin: 0 10px;">

      <el-dropdown>
          <span class="el-dropdown-link">
            admin
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>退出登入</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import useLayOutSettingStore from '@/store/modules/setting'

let LayOutSettingStore = useLayOutSettingStore()

const changeIcon = () => {
LayOutSettingStore.fold = !LayOutSettingStore.fold
}

const updateRefsh = () => {
  LayOutSettingStore.refsh = !LayOutSettingStore.refsh
}
const fullScreen = () => {
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
</script>
<script lang="ts">
export default {
  name: 'Tabbar'
}
</script>

<style scoped>
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: linear-gradient(to right, rgb(232, 223, 223), rgb(201, 178, 178)), rgb(197, 165, 165);
}

.tabbar__left {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.el-icon--right {
  display: flex;
  align-items: center;
}
</style>
