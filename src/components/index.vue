<template>
  <div class="astronauts">
    <div class="astronauts-head">
      <div class="head-left">
        <img class="logo" src="../assets/logo.png" alt="">
      </div>
      <div class="head-right">
        <div class="head-right-up">
            <div class="up-icon up-phone-width">
              <img src="@/assets/phone-icon.png" alt="">
              <span>+86-471-4610322,3337718,3337719</span>
            </div>
            <div class="up-icon up-email-width">
              <img src="@/assets/email-icon.png" alt="">
              <span>info@yuhangren.com</span>
            </div>
            <div class="up-icon up-web-width">
              <img src="@/assets/web-icon.png" alt="">
              <span>www.yuhangren.com</span>
            </div>
            <div class="up-search">
              <input class="search" type="text">
              <div class="search-button">
                <img class="search-icon" src="@/assets/search-icon.png" alt="">
              </div>
            </div>
        </div>
        <div class="head-right-down">
          <div class="titles" v-for="(item,index) in titles" :key="index">
            <router-link :to="item.method"><div class="titles-text">{{item.title}}</div></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="astronauts-banner">
      <banner/>
    </div>
    <div class="astronauts-center">
      <router-view></router-view>
    </div>
    <div class="astronauts-footer">
      <div class="footer">
        <div class="footer-left">
          <div class="footer-title">CONTACT US</div>
          <div class="footer-line"></div>
          <div class="footer-list" v-for="(item,index) in footer" :key="index">
            <div>
              <i style="cursor: pointer;" :class="item.iconCls"></i>
              <div class="footer-text">{{item.text}}</div>
            </div>
          </div>
        </div>
        <div class="footer-right">
          <div  style="margin-top: 21%;" class="footer-title">CONTACT US</div>
          <div style="width: 20%;margin-bottom:6.5%;" class="footer-line"></div>
          <div class="footer-list" v-for="(item,index) in footer2" :key="index">
            <div>
              <i style="cursor: pointer;" :class="item.iconCls"></i>
              <div style="margin-left: 2%;" class="footer-text">{{item.text}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "@/components/banner.vue";
export default {
  name: "index",
  components: {
    banner
  },
  data(){
        return{
          titles:[
            {
              method:'home',
              title: "HOME"
            },
            {
              method:'aboutus',
              title: "ABOUT US"
            },
            {
              method:'product',
              title: "PRODUCT DISPLAY"
            },
            {
              method:'seabuckthorn',
              title: "ABOUT SEABUCKTHORN"
            },
            {
              method:'contact',
              title: "CONTACT"
            }
          ],
        footer:[
          {
            iconCls: "iconfont icon-gongsi-",
            text: "Inner Mongolia Yuhangren High-Tech Industrial Co.,Ltd."
          },
          {
            iconCls: "iconfont icon-dizhi",
            text: "No.10, Yiwei Road, Ruyi Development Zone, Huhhot, Inner Mongolia, China 010010"
          },
          {
            iconCls: "iconfont icon-weibiaoti-",
            text: "Tel:+86-471-3337719 , 4610322 , 3337718"
          },
          {
            iconCls: "iconfont icon-chuanzhen",
            text: "Fax:+86-471-3337713"
          },
          {
            iconCls: "iconfont icon-youxiang",
            text: "E-mail: info@yuhangren.com"
          },
          {
            iconCls: "iconfont icon-IE",
            text: "Web: www.yuhangren.com"
          }
        ],
      footer2:[
          {
            iconCls: "iconfont icon-daohang",
            text: "About Us"
          },
          {
            iconCls: "iconfont icon-daohang",
            text: "Product Display"
          },
          {
            iconCls: "iconfont icon-daohang",
            text: "Technical quality"
          },
          {
            iconCls: "iconfont icon-daohang",
            text: "About Seabuckthorn"
          },
          {
            iconCls: "iconfont icon-daohang",
            text: "CONTACT"
          }
        ]
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../css/index.css">
@import url(../assets/font/iconfont.css);
</style>
