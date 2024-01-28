<template>
  <div class="layout__container">
    <div class="layout__slider" :class="{'fold': LayOutSettingStore.fold}">
        <Logo />  
        <el-scrollbar class="scrollbar">
          <el-menu
            background-color="#001529"
            text-color="#959ea6"
            :default-active="$route.path"
            :collapse="LayOutSettingStore.fold"
          >
            <Menu :menuList="userStore.menuRoutes" />
          </el-menu>
        </el-scrollbar>
    </div>

    <div style="width: 100%;">
      <div class="layout__tabbar">
        <Tabbar />
      </div>

      <div class="layout__main">
        <Main />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Logo from './logo/index.vue'
import useUserStore from '@/store/modules/user'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
import useLayOutSettingStore from '@/store/modules/setting'

let LayOutSettingStore = useLayOutSettingStore()
let userStore = useUserStore()



</script>
<script lang="ts">
export default {
  name: 'Layout'
}
</script>

<style lang="scss" scoped>
// .layout__container {
//   height: 100%;
// }
// .layout__container .el-menu {
//   border-right: none;
// }
// .layout__container .el-main {
//   position: absolute;
//   padding: 20px;
//   left: 200px;
//   top: 60px;
//   transition: all 0.3s;
//   width: calc(100% - $base-menu-width);
//   height: calc(100vh - 60px);
// }
// 
// .el-aside {
//   background-color: #001529 !important;
//   transition: all 0.3s;
// }
// .el-header {
//   background-color: #fff !important;
//   box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
//   z-index: 999;
// }
// .isCollapse {
//   width: 56px;
// }

.layout__container {
  display: flex;
  width: 100vw;

  .layout__slider {
    color: white;
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    transition: all 0.3s;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }

    &.fold {
      width: $base-menu-min-width;
    }
  }
}

.layout__tabbar {
  height: 50px;
}

</style>
