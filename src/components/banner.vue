<template name="banner">
<!-- Make a div wrapped slider,set height and width -->
 <div style="width:100%;height:100%">
      <!-- Using the slider component -->
      <slider ref="slider" :options="options">
          <!-- slideritem wrapped package with the components you need -->
          <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
          <!-- Customizable loading -->
          <div slot="loading">loading...</div>
      </slider>
 </div>
</template>
<script>
// import slider components
import { slider, slideritem } from 'vue-concise-slider'
export default {
   el: '#app',
   data () {
      return {
        //data list [array]
        someList:[
          {
            // html: 'slide1',
            style: {
              'background': 'url(http://seabuckthornproduct.com/img/banner.jpg)',
              'background-repeat': 'no-repeat',
              'background-size': '100% 100%'
            }
          },
          {
            // html: 'slide2',
            style: {
              'background': 'url(http://seabuckthornproduct.com/img/banner2.jpg)',
              'background-repeat': 'no-repeat',
              'background-size': '100% 100%'
            }
          },
          {
            // html: 'slide3',
            style: {
              'background': 'url(http://seabuckthornproduct.com/img/banner3.jpg)',
              'background-repeat': 'no-repeat',
              'background-size': '100% 100%'
            }
          }
        ],
        //Slider configuration [obj]
        options: {
          pagination: true, // 底部小圆点是否隐藏（true显示，false隐藏）
          thresholdDistance:500, // 滑动判定距离
          thresholdTime:100, // 滑动判定时间
          currentPage: 0,//当前页码
          autoplay: 5000,//自动滚动[ms]
          loop:true,// 是否循环滚动
          infinite:1,//无限滚动前后遍历数
          slidesToScroll:1//每次滑动项数
        }
      }
    },
    components: {
      slider,
      slideritem
    }
}
</script>