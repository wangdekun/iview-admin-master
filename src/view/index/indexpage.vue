<style lang="less">
@import "./indexpage.less";
</style>

<template>
  <div class="indexpage">
    <Layout>
      <Layout class="indexpage-con">
        <Sider class="sider">00</Sider>
        <Content  class="content" >
            <Carousel autoplay>
              <Carousel-item>
                <div class="demo-carousel">
                  <img  class="image-carousel"  src="/home/wang/iview-admin-master/src/assets/images/three.jpg"/>
                </div>
              </Carousel-item>
              <Carousel-item>
                <div class="demo-carousel">
                  <img class="image-carousel" src="/home/wang/iview-admin-master/src/assets/images/two.jpg"/>
                </div>
              </Carousel-item>
              <Carousel-item>
                <div class="demo-carousel">
                  <img  class="image-carousel" src="/home/wang/iview-admin-master/src/assets/images/second.webp"/>
                  </div>
              </Carousel-item>
              <Carousel-item>
                <div class="demo-carousel">
                  <img class="image-carousel" src="/home/wang/iview-admin-master/src/assets/images/first.webp"/>
                </div>
              </Carousel-item>
            </Carousel>
        </Content>
        <Sider class="sider"  >00</Sider>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    login () {
      this.$router.push({
        name: 'login'
      })
    }

  }
}
</script>

<style>
</style>
