import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo, reqLogOut } from '@/api/user'
import type {
  LoginFormData,
  LoginResponseData,
  userInfoResponseData,
} from '@/api/user/type'
import type { UserState } from './types/type'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import { constantRoute } from '@/router/routes'

let useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN()!,
      menuRoutes: constantRoute,
      userName: '',
      avatar: '',
    }
  },

  actions: {
    async userLogin(data: LoginFormData) {
      let result: LoginResponseData = await reqLogin(data)
      // success=>token
      // error=>error.message
      if (result.code === 200) {
        this.token = (result.data as string)
        // 持久化
        SET_TOKEN(result.data as string)
        this.userName = result.data.name;
        this.avatar = result.data.avatar;
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message as string))
      }
    },
    async userInfo() {
      let result: userInfoResponseData = await reqUserInfo();
      console.log('result',result);
      
    },
    async userLogout() {
      let result: any = await reqLogOut();
      if (result.code === 200) {
        this.token = '';
        this.userName = '';
        this.avatar = '';
        REMOVE_TOKEN();        
      } else {
        return Promise.reject(new Error(result.message as string))
      }

    }

  },
  getters: {

  }
})

export default useUserStore;
