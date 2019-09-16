import Vue from "vue";
import Router from "vue-router";
import index from "./components/index.vue";
import home from "./components/home.vue";
import aboutus from "./components/aboutus.vue";
import product from "./components/product.vue";
import seabuckthorn from "./components/seabuckthorn.vue";
import contact from "./components/contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: index,
      redirect: '/home',
      children:[
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: 'aboutus',
          name: 'aboutus',
          component: aboutus
        },
        {
          path: 'product',
          name: 'product',
          component: product
        },
        {
          path: 'seabuckthorn',
          name: 'seabuckthorn',
          component: seabuckthorn
        },
        {
          path: 'contact',
          name: 'contact',
          component: contact
        }
      ]
    }
  ]
});
