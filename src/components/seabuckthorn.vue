<template>
    <div class="all" id="seabuckthorn">
        <div class="title">
            <div class="title-left">PRODUCT DISPLAY</div>
            <div class="title-right" @click="home">Location: Home Page <span>> Product Display</span></div>
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
                        <div @click="product(item.id)" class="list-right-button">READ MORE</div>
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
                    id: 1,
                    img: require('../assets/photo1.png'),
                    title: "Seabuckthorn  Seed  Oil",
                    text: "Seabuckthorn seed oil contains 106 bioactive elements. Of the14 fatty acids almost 90% are unsaturated and the two essential unsaturated fatty acids linolenic acid (Omega 3) and linoleic acid (Omega 6) are in almost perfect 1:1 ratio. A rare source of vitamin E, it also provides other vitamins including Vitamins A, C, D, K, etc, carotenoids, flavonoids, phytosterols, essential ..."
                },
                {
                    id: 2,
                    img: require('../assets/photo2.png'),
                    title: "Seabuckthorn  Pulp  Oil",
                    text: "Seabuckthorn pulp oil contains a high level of beta-carotene, which is the most active form of Vitamin A for healthy retinas. Providing abundant amino acids, essential fatty acids (especially rich in omega-7 series fatty acid), natural Vitamin E and phytosterols, etc.Seabuckthorn pulp oil can protect mucus membranes in stomach, provide..."
                },
                {
                    id: 3,
                    img: require('../assets/photo3.png'),
                    title: "Seabuckthorn  Puree",
                    text: "Wild seabuckthorn berries are processed directly to puree and it is natural and unpolluted, seabuckthorn puree contains rich nutritional components that people need, such as carotene, VC, VE, VB1, VB2, minimal and amino acids and so on. Seabuckthorn puree is yellow brown color and has characteristic fragrance and higher acid degree. Because of the high content of vitamin C..."
                },
                {
                    id: 4,
                    img: require('../assets/photo5.png'),
                    title: "Seabuckthorn  compound  juice",
                    text: "Wild seabuckthorn berries are processed directly to puree and it is natural and unpolluted, seabuckthorn puree contains rich nutritional components that people need, such as carotene, VC, VE, VB1, VB2, minimal and amino acids and so on. Seabuckthorn puree is yellow brown color and has characteristic fragrance and higher acid degree. Because of the high content of vitamin C..."
                },
                {
                    id: 5,
                    img: require('../assets/photo7.jpg'),
                    title: "Seabuckthorn Juice Powder",
                    text: "Seabuckthorn juice powder is made from fresh Seabuckthorn juice by spray-dry. It contains rich bioactive elements. Seabuckthorn juice powder is natural anti-oxidant, It is easy to store and transport, and it is the good material for making foodstuff and beverage..."
                },
                {
                    id: 6,
                    img: require('../assets/photo8.jpg'),
                    title: "Seabuckthorn Seed Flavone",
                    text: "Seabuckthorn seed flavone is brown color with characteristic odor of seabuckthorn; it is an excellent source of anti-oxidant and anti-aging compounds. Flavonoids work to stimulate and enhance the immune system, reduce blood fatty, improve vessel strength and increase cardiovascular and brain circulation as well as improving the immune function..."
                },
                {
                    id: 7,
                    img: require('../assets/photo6.png'),
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
         product(id){
            //  alert(id);
             this.$router.push({
                path: '/more',
                query:{
                    id:id
                }
          })
         },
         home(){
             this.$router.push({path:'/home'})
         }
     }
}
</script>

<style scoped src="../css/seabuckthorn.css">
</style>