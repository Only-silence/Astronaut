<template>
    <div class="all">
        <div class="title">
            <div class="title-left">ABOUT US</div>
            <div class="title-right" @click="home">Location:Home Page <span>> About Us</span></div>
        </div>
        <div class="center">
            <div class="center-title">Inner Mongolia Yuhangren High-Tech Industrial Co., Ltd.</div>
            <div class="center-text">
                Inner Mongolia Yuhangren High-Tech Industrial Co., Ltd. was established in 1988, which is a key high-tech enterprise in Inner Mongolia Autonomous Region, and the largest large-sized enterprise engaged in the comprehensive industrialization research of seabuckthorn around the world as well. We founded two research institutions; they are Inner Mongolia Seabuckthorn Engineering Research Center and Sino-Japan Natural Medicine Research Center. And we have hundreds of professionals for Pharmacy, chemistry, bioengineering, medicine, etc.

For many years, Inner Mongolia Yuhangren High-Tech Industrial Co., Ltd. has concentrated its efforts on the in-depth development and research of seabuckthorn about its nutrition and medicinal function. Now, we finished two central laboratory of 3000㎡each, owned the supercritical CO2 extraction technology, multi-function heat feedback Extraction technology, membrane ultrafiltration technology and other natural plant extraction technology. And we got large supercritical CO2 extraction equipment (500L×3), multi-function heat feedback Extraction equipment and other equipment at advanced world levels. 

Gas and liquid phase chromatographic apparatus, ultraviolet spectrophotometer and other inspection apparatus was equipped to keep our products with high quality. We use high technologies to develop seabuckthorn seed oil, seabuckthorn pulp oil, seabuckthorn flavone powder, seabuckthorn juice powder, seabuckthorn concrete, seabuckthorn puree, seabuckthorn juice concentrate, seabuckthorn oil soft capsule, seabuckthorn tea and other dozens of natural products.


            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
         //跳转页面
         home(){
             this.$router.push({path:'/home'})
         }
     }
}
</script>

<style scoped src="../css/aboutus.css">
</style>