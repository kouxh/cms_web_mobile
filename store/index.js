// 全局操作
export const state = () => ({
  token: '',//后台返回token
  userName: 'admin',
  secretKey: "mas20220520",//秘钥
  subTabId: '',//二级菜单选中项id
})
export const mutations = {
  setToken(state, token) {
    state.token = token;
    this.$cookies.set('token', token)
  },
  getToken(state) {
    state.token = this.$cookies.get('token')
  },
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo;
    this.$cookies.set('userInfo', userInfo)
  },

  setSubTabId(state, data) {
    state.subTabId = data
    this.$cookies.set('subTabId', data)
  }
}
export const actions={
  nuxtServerInit(store,content){
    //store:vuex上下文 content:nuxt上下文
    // store.commit('setToken','admin');
    store.commit('setSubTabId', this.$cookies.get('subTabId'));
    console.log(store.state.subTabId, 'nuxtServerInit')
  }
}
