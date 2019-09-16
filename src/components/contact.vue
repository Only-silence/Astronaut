<template>
  <div class="all">
    <div class="title">
      <div class="title-left">Contact</div>
      <div class="title-right" @click="home">Location:Home Page <span>> Contact</span></div>
    </div>
    <div class="center">
      <div class="center-title">Contact</div>
      <div class="center-text">
          <div>内蒙古宇航人高技术产业有限责任公司</div>
          <div>Inner Mongolia Yuhangren High-Tech Industrial Co.,Ltd.</div>
          <div>No.10, Yiwei Road, Ruyi Development Zone, Huhhot, Inner Mongolia, China 010010</div>
          <div>Tel:+86-471-4610322，3337718，3337719</div>
          <div>Fax:+86-471-3337713</div>
          <div>E-mail: info@yuhangren.com</div>
          <div>Web: www.yuhangren.com</div>
      </div>
      <div class="map">
        <img style="width:100%;height:100%;" src="../assets/map.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
         //跳转页面
         home(){
             this.$router.push({path:'/home'})
         }
     }
};
</script>

<style scoped src="../css/contact.css">
</style>