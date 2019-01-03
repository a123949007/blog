<template>
  <div>
    <div 
      v-for="item in list"       
      :key="item.id"
      class="wrapper">
      <div 
        class="item">
        <div class="item__title">
          {{ item.title }}
        </div>
        <div class="item__summary">
          {{ item.summary }}
        </div>
        <div class="item__detail">
          <span>{{ item.update_time }}</span>
          <span>{{ item.author }}</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  components: {
    
	},
	data(){
		return{
			list:[]
		}
	},
  mounted(){
    this.onGetList()
  },
  methods:{
    jump(){
      this.$router.push('/list')
    },
    onGetList(){
      this.$axios.$post('api/list/select').then(res=>{
				this.list = res.data
				console.log(this.list)
			})
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
	width: 800px;
	position: relative;
	margin:0 auto;
	margin-top:20px;
	border-radius: 8px;
	box-shadow: 0 10px 20px rgba(0,0,0,0.5);
	overflow: hidden;
	z-index: 2;
	padding: 20px;
  box-sizing: border-box;
	color:rgb(214, 217, 218);
	font-size:14px;
}
.wrapper::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	-webkit-filter: blur(40px);
	-moz-filter: blur(40px);
	-ms-filter: blur(40px);
	-o-filter: blur(40px);
	filter: blur(40px);
	z-index: -3;
	margin: -30px;
	background-image: url('~assets/images/background.jpg');
	background-position: center top;
	background-size: cover;
	background-attachment: fixed;
}
.item__title{
	font-weight: bold;
}
.item__summary{
	position:relative;
	margin-top:10px;
	width: 100%;
	height:80px;
  line-height:20px;
  overflow:hidden;
}
.item__summary::after {
	content: "\02026";      // '...'
	position:absolute;
	bottom:0;
	right:0;
	padding-left:40px;
}

.item__detail{
	margin-top:10px;
}
</style>
