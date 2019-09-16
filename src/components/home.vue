<template>
    <div class="all">
        <div class="aboutUs">
            <div class="aboutUs-all">
                <div class="aboutUs-title">
                    <div style="margin-bottom: 4%">ABOUT US</div>
                    <img src="../assets/sep.png" alt="">
                </div>
                <div class="aboutUs-center">
                    <div class="center-left">
                        <div class="center-left-title">{{aboutUs}}</div>
                        <div class="center-left-text">{{aboutUsText}}</div>
                        <div class="center-left-button">
                            <span>READ MORE</span>
                        </div>
                    </div>
                    <div class="center-right">
                        <img style="width:100%;height:100%" src="../assets/yhr.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="ourCertification">
            <div class="ourCertification-all">
                <div class="ourCertification-title">
                    <div>ourCertification</div>
                    <img src="../assets/sep.png" alt="">
                </div>
                <div class="ourCertification-center">
                    <div class="ourCertification-img" v-for="(item,index) in ourCertification" :key="index">
                        <img class="ourCertification-list" :src="item.img" alt="">
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="aboutSeabuckthorn">
            <div class="aboutSeabuckthorn-left">
                <img style="width:100%;height:100%" src="../assets/leftBackground.png" alt="">
            </div>
            <div class="aboutSeabuckthorn-right">
                <div class="aboutSeabuckthorn-all">
                    <div class="aboutSeabuckthorn-title">{{aboutSeabuckthorn}}</div>
                    <div class="aboutSeabuckthorn-text">{{aboutSeabuckthornText}}</div>
                    <div class="aboutSeabuckthorn-button">READ MORE</div>
                </div>
            </div>
        </div>
        <div class="productDisplay">
            <div class="productDisplay-all">
                <div class="productDisplay-title">
                    <div style="margin-bottom: 4%">PRODUCT DISPLAY</div>
                    <img src="../assets/sep.png" alt="">
                </div>
                <div class="productDisplay-center">
                    <div class="center">
                        <div class="center-list" v-for="(item,index) in listUp" :key="index">
                            <div class="center-list-left">
                                <img style="width:100%;height:100%" :src="item.img" alt="">
                            </div>
                            <div class="center-list-right">
                                <div class="list-right-title">{{item.title}}</div>
                                <div class="list-right-line"></div>
                                <div class="list-right-text">{{item.text}}</div>
                                <div class="list-right-button">READ MORE</div>
                            </div>
                        </div>
                    </div>
                    <div class="center">
                        <div class="center-list" v-for="(item,index) in listDown" :key="index">
                            <div class="center-list-right">
                                <div class="list-right-title">{{item.title}}</div>
                                <div class="list-right-line"></div>
                                <div class="list-right-text">{{item.text}}</div>
                                <div class="list-right-button">READ MORE</div>
                            </div>
                            <div class="center-list-left">
                                <img style="width:100%;height:100%" :src="item.img" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            aboutUs: "Inner Mongolia Yuhangren High-Tech Industrial Co., Ltd.",
            aboutUsText: "Inner Mongolia Yuhangren High-Tech Industrial Co., Ltd. was established in 1988, which is a key high-tech enterprise in Inner Mongolia Autonomous Region, and the largest large-sized enterprise engaged in the comprehensive industrialization research of seabuckthorn around the world as well.We founded two research institutions; they are Inner Mongolia Seabuckthorn Engineering Research Center and Sino-Japan Natural Medicine Research Center.And we have hundreds of professionals for Pharmacy, chemistry, bioengineering, medicine, etc.",
            aboutSeabuckthorn: "About Seabuckthorn",
            aboutSeabuckthornText: "Seabuckthorn (Hippophae rhamnoides L.) is an attractive ornamental plant with bright orange fruit and narrow, silver green leaves. It belongs to Hippophae genus of Elaeagnaceae family. Legend holds that Genghis Khan fed seabuckthorn, the nutrition-packed berries to his soldiers and horses for strength before battle and to keep them healthy afterward.Clinical studies have revealed that seabuckthorn berry enriches nutritional components and contains total soluble sugar (totally fructose and glucose), organic acid and various vitamins, for example carotene, VC, VE, VB1, VB2 etc. Seabuckthorn berries have more assorted nutrition than that of other fruit trees. It is a great source of vitamin C, with up to several ten times as much as general fruits. The content of vitamin E is the top of all fruits.",
            ourCertification: [
                {
                    img: require('../assets/list1.png')
                },
                {
                    img: require('../assets/list2.png')
                },
                {
                    img: require('../assets/list3.png')
                },
                {
                    img: require('../assets/list4.png')
                },
                {
                    img: require('../assets/list5.png')
                },
                {
                    img: require('../assets/list6.png')
                }
            ],
        listUp: [
            {
                img: require('../assets/photo1.png'),
                title: "Seabuckthorn Seed Oil",
                text: "Seabuckthorn seed oil contains 106 bioactive elements. Of the14 fatty acids almost 90% are unsaturated and the two essential unsaturated fatty acids linolenic acid (Omega 3) ..."
            },
            {
                img: require('../assets/photo2.png'),
                title: "Seabuckthorn Pulp Oil",
                text: "Seabuckthorn pulp oil contains a high level of beta-carotene, which is the most active form of Vitamin A for healthy retinas. Providing abundant amino acids, essential fatty acids ... "
            }
        ],
        listDown: [
            {
                img: require('../assets/photo3.png'),
                title: "Seabuckthorn Puree",
                text: "Wild seabuckthorn berries are processed directly to puree and it is natural and unpolluted, seabuckthorn puree contains rich nutritional components that people ... "
            },
            {
                img: require('../assets/photo4.png'),
                title: "Seabuckthorn compound juice",
                text: "The raw material of seabuckthorn compound juice is collected from wild seabuckthorn fruit in Manhan mountain of Inner Mongolia. Yuhangren organic seabuckthorn juice..."
            },
        ]
        }
    }
}
</script>

<style scoped src="../css/home.css">
</style>