<template>
    <div class="all">
        <div class="title">
            <div class="title-left">PRODUCT DISPLAY</div>
            <div class="title-right" @click="home">Location: Home Page <span>> Product Display</span></div>
        </div>
        <div class="center">
            <div class="center-title">Introduction of Seabuckthorn Seed Oil
</div>
            <div class="center-text">
                <div class="center-text-left">
                    <img src="../assets/productBackground.png" alt="">
                </div>
                <div class="center-text-right">
                              Seabuckthorn seed oil contains 106 bioactive elements. Of the14 fatty acids almost 90% are unsaturated and the two essential unsaturated fatty acids linolenic acid (Omega 3) and linoleic acid (Omega 6) are in almost perfect 1:1 ratio. A rare source of vitamin E, it also provides other vitamins including Vitamins A, C, D, K, etc, carotenoids, flavonoids, phytosterols, essential amino acids, and trace elements. Seabuckthorn Seed Oil can antiinflammation, it is cardiotonic, stomachic, antioxidant and anti-radiation. It maintains healthy cholesterol profile and heart conditions, softens blood vessel, reduces blood fat, strengthens the immune system, and promotes circulation and natural healing. Seabuckthorn seed oil can be used to produce health care foods, medicine, skin care products and cosmetics.
                </div>
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

<style scoped src="../css/product.css">
</style>