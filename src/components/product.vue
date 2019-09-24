<template>
  <div class="all" id="product">
    <div class="title">
      <div class="title-left">ABOUT SEABUCKTHORN</div>
      <div class="title-right" @click="home">
        Location: Home Page
        <span>> About Seabuckthorn</span>
      </div>
    </div>
    <div class="center">
      <div class="center-title">Inner Mongolia Yuhangren High-Tech Industrial Co., Ltd.</div>
      <div class="center-text">
        Seabuckthorn (Hippophae rhamnoides L.) is an attractive ornamental plant with bright orange fruit and narrow, silver green leaves. It belongs to Hippophae genus of Elaeagnaceae family. Legend holds that Genghis Khan fed seabuckthorn, the nutrition-packed berries to his soldiers and horses for strength before battle and to keep them healthy afterward. 

Clinical studies have revealed that seabuckthorn berry enriches nutritional components and contains total soluble sugar (totally fructose and glucose), organic acid and various vitamins, for example carotene, VC, VE, VB1, VB2 etc. Seabuckthorn berries have more assorted nutrition than that of other fruit trees. It is a great source of vitamin C, with up to several ten times as much as general fruits. The content of vitamin E is the top of all fruits.

The oil content of the juice and the seeds ranges from 2 to 8 percent. Oil from the juice and pulp is rich in palmitic and palmitoleic acids (C16:0 and C16:1), while the oil from the seed contains unsaturated fatty acids of C18 type oils (linoleic and linolenic acid). Oils from the seed and juice also contain Vitamin E and carotenes.

      </div>
    </div>
    <div class="image">
        <img src="../assets/aboutImage.jpeg" alt="">
        <img src="../assets/aboutImage1.jpeg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    //跳转页面
    home() {
      this.$router.push({ path: "/home" });
    }
  }
};
</script>

<style scoped src="../css/product.css">
</style>