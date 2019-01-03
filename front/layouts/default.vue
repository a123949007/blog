<template>
  <div>
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <nuxt/>
      </el-main>
      <el-footer>
        <Footer/>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default {
  components:{Header,Footer}
}
</script>

<style lang="less">
@import '../assets/less/variable.less';
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.el-header{
  background:#606266;
  height:200px;
}
.el-container{
  background:url("~assets/images/background.jpg") 0 0 / cover fixed;
}
.header__title{
  display: inline-block;
}
.header__title--text{
  font-size: 16px;
  color:#fff;
}
.el-container{
  min-height: 100vh;
}
</style>
