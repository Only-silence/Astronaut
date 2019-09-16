<template>
    <div class="all">
        <div class="title">
            <div class="title-left">ABOUT SEABUCKTHORN</div>
            <div class="title-right" @click="home">Location: Home Page <span>> ABOUT SEABUCKTHORN</span></div>
        </div>
        <div class="center">
            <div class="onePage" v-for="(item,index) in list" :key="index">
                <div class="list">
                    <div class="list-left">
                        <img class="photo" :src="item.img" alt="">
                    </div>
                    <div class="list-right">
                        <div class="list-right-title">{{item.title}}</div>
                        <div class="list-right-text">{{item.text}}</div>
                        <div @click="product" class="list-right-button">READ MORE</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page">
            <div class="page-button">
                <div class="page-list"><</div>
                <div class="page-list" v-for="(item,index) in page" :key="index">
                    <div class="list-button">{{item.page}}</div>
                </div>
                <div class="page-list">></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list: [
                {
                    img: require('../assets/photo1.png'),
                    title: "Seabuckthorn  Seed  Oil",
                    text: "Seabuckthorn seed oil contains 106 bioactive elements. Of the14 fatty acids almost 90% are unsaturated and the two essential unsaturated fatty acids linolenic acid (Omega 3) and linoleic acid (Omega 6) are in almost perfect 1:1 ratio. A rare source of vitamin E, it also provides other vitamins including Vitamins A, C, D, K, etc, carotenoids, flavonoids, phytosterols, essential ..."
                },
                {
                    img: require('../assets/photo2.png'),
                    title: "Seabuckthorn  Pulp  Oil",
                    text: "Seabuckthorn pulp oil contains a high level of beta-carotene, which is the most active form of Vitamin A for healthy retinas. Providing abundant amino acids, essential fatty acids (especially rich in omega-7 series fatty acid), natural Vitamin E and phytosterols, etc.Seabuckthorn pulp oil can protect mucus membranes in stomach, provide..."
                },
                {
                    img: require('../assets/photo3.png'),
                    title: "Seabuckthorn  Puree",
                    text: "Wild seabuckthorn berries are processed directly to puree and it is natural and unpolluted, seabuckthorn puree contains rich nutritional components that people need, such as carotene, VC, VE, VB1, VB2, minimal and amino acids and so on. Seabuckthorn puree is yellow brown color and has characteristic fragrance and higher acid degree. Because of the high content of vitamin C..."
                },
                {
                    img: require('../assets/photo4.png'),
                    title: "Seabuckthorn  compound  juice",
                    text: "Wild seabuckthorn berries are processed directly to puree and it is natural and unpolluted, seabuckthorn puree contains rich nutritional components that people need, such as carotene, VC, VE, VB1, VB2, minimal and amino acids and so on. Seabuckthorn puree is yellow brown color and has characteristic fragrance and higher acid degree. Because of the high content of vitamin C..."
                },
                {
                    img: require('../assets/photo5.png'),
                    title: "Seabuckthorn  Tea",
                    text: "Wild seabuckthorn berries are processed directly to puree and it is natural and unpolluted, seabuckthorn puree contains rich nutritional components that people need, such as carotene, VC, VE, VB1, VB2, minimal and amino acids and so on. Seabuckthorn puree is yellow brown color and has characteristic fragrance and higher acid degree. Because of the high content of vitamin C..."
                }
            ],
        page: [
            {
                page: "1"
            },
            {
                page: "2"
            },
            {
                page: "3"
            },
            {
                page: "..."
            }
        ]
        }
    },
    methods:{
         //跳转页面
         product(){
             this.$router.push({path:'/product'})
         },
         home(){
             this.$router.push({path:'/home'})
         }
     }
}
</script>

<style scoped src="../css/seabuckthorn.css">
</style>