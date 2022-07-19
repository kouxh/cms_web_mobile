// 全局操作
export const state = () => ({
  token: '',//后台返回token
  userName: 'admin',
  headerWidth: '1100px',//默认宽度
  tabIndex:'',//tab菜单栏默认选中项
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
  setHeaderWidth(state, data) {
    state.headerWidth = data
  },
  setTabIndex(state, data) {
    state.tabIndex = data
    this.$cookies.set('tabIndex',data)
  },
}
export const actions={
  nuxtServerInit(store,content){
    //store:vuex上下文 content:nuxt上下文
    // store.commit('setToken','admin');
    store.commit('setTabIndex',this.$cookies.get('tabIndex'));
  }
}
