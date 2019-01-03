<template>
  <div class="wrapper">我是页脚页脚页脚</div>
</template>

<style lang="less" scoped>
.wrapper {
	position: relative;
	margin:0 auto;
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
</style>
