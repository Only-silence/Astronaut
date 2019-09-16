import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BaiduMap from 'vue-baidu-map'
 
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '8BB7F0E5C9C77BD6B9B655DB928B74B6E2D838FD'
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
