<template>
  <div class="wrapper">
    <div class="header__title">
      <span class="header__title--text">
        博客
      </span>
    </div>
    <div class="header__nav">
      <el-menu
        :default-active="index"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#606266"
        text-color="#fff"
        active-text-color="#40EFFF"
        @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">分类</el-menu-item>
        <el-menu-item index="3">归档</el-menu-item>
        <el-menu-item index="4">留言</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      index:"1"
    }
  },
  methods:{
    handleSelect(index){
      console.log(index)
    }
  }
}
</script>

<style lang="less" scoped>
  .wrapper{
    height: 100%;
    background:#606266;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .header__title{
    display: inline-block;
  }
  .header__title--text{
    font-size: 16px;
    color:#fff;
  }
</style>
