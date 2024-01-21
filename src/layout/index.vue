<template>
  <div class="layout__container">
    <Logo />
      <el-scrollbar>
        <!-- <el-menu
          active-text-color="#fff"
          background-color="#001529"
          text-color="#white"
        >
          <el-menu-item index="1">首頁</el-menu-item>
          <el-menu-item index="2">數據</el-menu-item>
          
          <el-sub-menu index="3">
            <template #title>
              <span>權限管理</span>
            </template>
            <el-menu-item index="3-1">用戶管理</el-menu-item>
            <el-menu-item index="3-2">角色管理</el-menu-item>
            <el-menu-item index="3-3">菜單管理</el-menu-item>
          </el-sub-menu>
        </el-menu> -->
        <el-menu
          background-color="#001529"
          text-color="#959ea6"
        >
          <!-- <Logo /> -->
          <Menu :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>

    <div class="layout__tabbar"></div>
    <div class="layout__main"></div>
  </div>
</template>
<script setup lang="ts">
// import Logo from './logo/index.vue'
import useUserStore from '@/store/modules/user'

let userStore = useUserStore()

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

.layout_slider {
  width: $base-menu-background;
  height: 100vh;
  background: $base-menu-background;

  .scrollbar {
    width: 100%;
    height: calc(100vh - $base-menu-logo-height);

    .el-menu {
      border-right: none;
    }
  }
}
</style>
