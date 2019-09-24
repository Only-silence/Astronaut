<template>
    <div class="all" id="more">
        <div class="title">
            <div class="title-left">PRODUCT DISPLAY</div>
            <div class="title-right" @click="home">Location: Home Page <span>> Product Display</span></div>
        </div>
        <div class="center">
            <div class="center-title">Introduction of Seabuckthorn Seed Oil
</div>
            <div class="center-text">
                <div class="center-text-left">
                    <img :src="img1" alt="" style="">
                </div>
                <div class="center-text-right">{{text1}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            img1: '',
            img2: '',
            img3: '',
            img4: '',
            img5: '',
            img6: '',
            img7: '',
            text1: '',
            text2: '',
            text3: '',
            text4: '',
            text5: '',
            text6: '',
            text7: '',
        }
    },
    methods:{
         //跳转页面
         home(){
             this.$router.push({path:'/home'})
         }
     },
    created(){
        var clickID = this.$route.query.id;
        // this.$route.params.id
        if(clickID == 1){
            this.img1 = require("../assets/productBackground.png");
            this.text1 = 'Seabuckthorn seed oil contains 106 bioactive elements. Of the14 fatty acids almost 90% are unsaturated and the two essential unsaturated fatty acids linolenic acid (Omega 3) and linoleic acid (Omega 6) are in almost perfect 1:1 ratio. A rare source of vitamin E, it also provides other vitamins including Vitamins A, C, D, K, etc, carotenoids, flavonoids, phytosterols, essential amino acids, and trace elements. Seabuckthorn Seed Oil can antiinflammation, it is cardiotonic, stomachic, antioxidant and anti-radiation. It maintains healthy cholesterol profile and heart conditions, softens blood vessel, reduces blood fat, strengthens the immune system, and promotes circulation and natural healing. Seabuckthorn seed oil can be used to produce health care foods, medicine, skin care products and cosmetics.'
        }else if(clickID == 2){
            this.img1 = require("../assets/productBackground2.png");
            this.text1 = 'Seabuckthorn pulp oil contains a high level of beta-carotene, which is the most active form of Vitamin A for healthy retinas. Providing abundant amino acids, essential fatty acids (especially rich in omega-7 series fatty acid), natural Vitamin E and phytosterols, etc. Seabuckthorn pulp oil can protect mucus membranes in stomach, provide rich sources of pro-vitamin A for healthy eye, and maintain healthy skin. The pulp oil exerts a powerful anti-oxidant effect. Seabuckthorn pulp oil can be made into medicine and health food, and seabuckthorn pulp oil can be used in a variety of cosmetic formulations in a similar manner to other oils.'
        }else if(clickID == 3){
            this.img1 = require("../assets/productBackground3.png");
            this.text1 = 'Wild seabuckthorn berries are processed directly to puree and it is natural and unpolluted, seabuckthorn puree contains rich nutritional components that people need, such as carotene, VC, VE, VB1, VB2, minimal and amino acids and so on. Seabuckthorn puree is yellow brown color and has characteristic fragrance and higher acid degree. Because of the high content of vitamin C, seabuckthorn fruit is ideal for human food. The puree is a good source of several amino acids and minerals. Seabuckthorn puree can be used to produce soft drink, functional drink, flavor and other foods. Also we can provide seabuckthorn juice, seabuckthorn juice concentrate, and seabuckthorn clear juice.'
        }else if(clickID == 4){
            this.img1 = require("../assets/productBackground4.png");
            this.text1 = "The raw material of seabuckthorn compound juice is collected from wild seabuckthorn fruit in Manhan mountain of Inner Mongolia. Yuhangren organic seabuckthorn juice has been approved NOP, JAS, European Union Organic Food certificate. The seabuckthorn compound juice is one of our company's new products. This kind of juice tastes sour in sweet and had a bright orange color. The whole process of this product passed the organic food certificate in China. Fully retain the original nutrients of organic seabuckthorn fruit."
        }else if(clickID == 5){
            this.img1 = require("../assets/productBackground5.png");
            this.text1 = 'Seabuckthorn juice powder is made from fresh Seabuckthorn juice by spray-dry. It contains rich bioactive elements. Seabuckthorn juice powder is natural anti-oxidant, It is easy to store and transport, and it is the good material for making foodstuff and beverage. Seabuckthorn juice powder can be used to produce candy, drink, chinese traditional medicine and flavors.'
        }else if(clickID == 6){
            this.img1 = require("../assets/productBackground6.png");
            this.text1 = 'Seabuckthorn seed flavone is brown color with characteristic odor of seabuckthorn; it is an excellent source of anti-oxidant and anti-aging compounds. Flavonoids work to stimulate and enhance the immune system, reduce blood fatty, improve vessel strength and increase cardiovascular and brain circulation as well as improving the immune function. Seabuckthorn flavone is ideal in the aspects of medicine and health-care food. '
        }else if(clickID == 7){
            this.img1 = require("../assets/productBackground7.png");
            this.text1 = 'Yuhangren seabuckthorn tea use seabuckthorn leaves as raw material, and we use biotechnology to produce the tea. It contains VC, VE, Terpene dilute acid, Flavonols, Chlorogenic Acid and SOD, etc. It is an ideal alkaline drink for human.'
        }
    }
}
</script>

<style scoped src="../css/more.css">
</style>