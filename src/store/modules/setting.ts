import { defineStore } from 'pinia'

let useLayOutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false,
      refsh: false,
    }
  },

  actions: {

  },
  getters: {

  }
})

export default useLayOutSettingStore;
