<template>
  <div class="login__container">
    <el-row>
      <el-col :span="12"></el-col>
      <el-col :span="12" :xs="24">
          <el-form class="login__form" :model="loginForm" :rules="rules" ref="loginForms">
          <h1>Hello</h1>
          <h2>歡迎</h2>
            <el-form-item prop="username">
              <el-input
                :prefix-icon="User"
                v-model="loginForm.username"
                clearable
                placeholder="Username"
                size="large"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">

              <el-input
                type="password"
                :prefix-icon="Lock"
                show-password
                v-model="loginForm.password"
                size="large"
                placeholder="Password"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                :loading="loading"
                class="login_btn"
                type="primary"
                size="default"
                @click="login"
              >
                登入
              </el-button>
            </el-form-item>
          </el-form>

      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { Ref, computed, reactive, ref, getCurrentInstance  } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'
import useUserStore from '@/store/modules/user'
import { useRouter, useRoute } from 'vue-router'

let $router = useRouter()
let $route = useRoute()
let loading = ref(false)

let useStore = useUserStore()
let loginForms = ref()

const { appContext } = getCurrentInstance()!
ElNotification({}, appContext)


const loginForm = reactive({
  username: 'admin',
  password: '111111',
})

const validatorUsername = (rule: any, value: any, callback: any) => {
  if (value.length === 0) {
    callback(new Error('請輸入帳號'))
  } else {
    callback()
  }
}

const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length === 0) {
    callback(new Error('請輸入密碼'))
  } else if (value.length < 6 || value.length > 16) {
    callback(new Error('密碼應為6~16位的任意組合'))
  } else {
    callback()
  }
}

const login = async () => {
  console.log('login');
  
  // await loginForms.value.validate()
  loading.value = true
  try {
    await useStore.userLogin(loginForm)
    ElNotification({
      type: 'success',
      message: '登入成功',
      title: `Hi, ${getTime()}好`,
    })
    loading.value = false
    $router.push('/')

  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}

const rules = {
  username: [
    {
      trigger: 'change',
      validator: validatorUsername,
    },
  ],
  password: [
    {
      trigger: 'change',
      validator: validatorPassword,
    },
  ],
}

</script>
<style lang="scss" scoped>
.login__container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  //position: fixed;

  .login__form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }
    .login_btn {
      width: 100%;
    }
  }
}
.el-card {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
// :deep(.el-input-group__append, .el-input-group__prepend) {
//   padding: 0;
// }
</style>
