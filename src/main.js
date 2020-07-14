import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index'
import store from './store/index'
import "amfe-flexible" // 引入flexible
import global from './components/global.js'
//设置为 false 以阻止 vue 在启动时生成生产提示

// 将全局权限Js挂载到全局中
// main.js

import { checkJurisdiction } from './common/jurisdiction'

// 优雅操作 - VUE自定义指令
Vue.directive('permission',{
  inserted(el, binding){
    // inserted → 元素插入的时候
    
    let permission = binding.value // 获取到 v-permission的值

    if(permission){
      let hasPermission = checkJurisdiction(permission)
      if(!hasPermission){
        // 没有权限 移除Dom元素
        el.parentNode && el.parentNode.removeChild(el)
      }
    }else{
      throw new Error('需要传key')
    }
  }
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
