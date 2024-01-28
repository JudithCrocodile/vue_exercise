<template>
  <p>{{ menuList }}</p>
  <template v-for="(item) in menuList" :key="item.path">
  
  <!-- 只有一層，沒有children -->
    <template v-if="!item.children">
      <el-menu-item :index="item.path" v-if="!item.meta.hidden">
        <template #title>
          <!-- <el-icon>
            <component :is="item.meta.icon">
            </component>
          </el-icon> -->
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>  
    </template>


    <!-- 只有一個子路由 -->
    <template v-if="item.children && item.children.length === 1">
      <el-menu-item :index="item.children[0].path" v-if="!item.children[0].meta.hidden">
        <template #title>
          <!-- <el-icon>
            <component :is="item.children[0].meta.icon">
            </component>          
          </el-icon> -->
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>    
    </template>


    <!-- 有一個以上的子路由 -->
    <el-menu-item v-if="item.children && item.children.length > 1" :index="item.children[0].path">
      <template #title>
        <!-- <el-icon>
          <component :is="item.meta.icon">
          </component>          
        </el-icon> -->
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-menu-item>
  </template>
</template>
<script setup lang="ts" name="Menu">
const props = defineProps(['menuList'])

console.log('menuList', props.menuList);

</script>
<style lang="scss" scoped></style>
