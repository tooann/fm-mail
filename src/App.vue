<template>
  <div id="app">
    <router-view/>
    <van-tabbar
      v-model="active"
      active-color="#1989fa"
      inactive-color="#666"
    >
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/record">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
