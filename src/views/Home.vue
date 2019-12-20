<template>
  <div class="home">
    <van-nav-bar title="标题" left-text="返回" left-arrow>
      <van-icon name="search" slot="left" />
      <van-icon name="cart" slot="right" />
    </van-nav-bar>

    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <div class="hot">
      <p class="hot-title border-bottom">最热商品</p>
      <div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in swiperSlideList" :key="index">
            <div>
              <img :src="item.imgUrl"/>
            </div>
            <p>{{item.description}}</p>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="recommend">
      <p class="recommend-title border-bottom">推荐商品</p>
      <div v-for="(item, index) of recommendList" :key="index" class="recommend-list">
        <div>
          <img :src="item.imgUrl"/>
        </div>
        <p>{{item.description}}</p>
      </div>
    </div>
  </div>
</template>
 
<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
      swiperOption: {
        slidesPerView: 3.3
      },
      swiperSlideList: [],
      recommendList: []
    }
  },
  created() {
    this.mockFn()
    this.randomMockFn()
    this.getSwiperSlideList()
    this.getRecommendList()
  },
  methods: {
    randomMockFn() {
      const Random = Mock.Random
      const recommendData = () => {
        let recommend = [];
        for (let i = 0; i < 100; i++) {
          let newRecommendObject = {
            imgUrl: Random.dataImage('300x250', 'mock的图片'),
            description: Random.cparagraph()
          }
          recommend.push(newRecommendObject)
        }

        return recommend
      }
      Mock.mock('/recommendList', 'post', recommendData);
    },
    mockFn() {
      Mock.mock('/swiperSlideList', 'get', {
        'data|10-20': [
          {
            imgUrl: '@image(200x200)',
            description: '@sentence'
          }
        ]
      })
    },
    getSwiperSlideList() {
      this.$http.get('/swiperSlideList').then(({ data }) => {
        this.swiperSlideList = data.data
      })
    },
    getRecommendList() {
      this.$http.post('/recommendList').then(({ data }) => {
        this.recommendList = data
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  background-color #f2f2f2
  margin-bottom 50px
  .van-nav-bar
    position fixed
    top 0
    z-index 999 !important
    width 100%
    .van-icon
      font-size 20px
  .van-swipe
    margin-top 50px
    width 100%
    height 150px
    &-item
      background-color #f2f2f2
      img
        width 100%
        height 100%
  .hot
    background-color #ffffff
    margin-top 5px
    &-title
      background-color #ffffff
      width 100%
      height 40px
      line-height 40px
      padding-left 10px
      font-size 14px
      text-align left
    .swiper-container
      padding 0 4px
      height 150px
      .swiper-slide
        div
          padding 4px
          height 100px
          img
            width 100%
            background-color #f2f2f2
            box-sizing border-box
        p
          font-size 14px
          margin-top 2px
          padding 0 4px
          height 30px
          line-height 15px
          text-align center
          display -webkit-box
          -webkit-line-clamp:2
          overflow hidden
          text-overflow ellipsis
          -webkit-box-orient vertical
  .recommend
    margin-top 5px
    padding 0px 4px
    display flex
    flex-wrap wrap
    background-color #ffffff
    &-title
      background-color #ffffff
      width 100%
      height 40px
      line-height 40px
      font-size 14px
      text-align center
    .recommend-list
      justify-content space-around
      width calc(100%/3)
      overflow hidden
      margin-top 5px
      div
        padding 0px 4px
        height 100px
        img
          width 100%
          box-sizing border-box
          background-color #f2f2f2
      p
        font-size 14px
        text-align center
        padding 0 4px
        line-height 18px
        height 36px
        display -webkit-box
        -webkit-line-clamp 2
        overflow hidden
        text-overflow ellipsis
        -webkit-box-orient vertical
</style>