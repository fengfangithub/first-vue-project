<template>
  <div class="container">
    <div class="header">
      <i class="fa fa-angle-left return"></i>
      <span>我的</span>
    </div>
    <div class="content">
      <div></div>
    </div>
    <div class="footer">
      <my-menu></my-menu>
    </div>
  </div>
</template>

<script>
  import MyMenu from './MyMenu'
  export default {
    name: "Person",
    components:{
      MyMenu
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .header{
    flex: 50px;
    display: flex;
    align-items: center;
  }
  .content {
    flex: calc(100% - 100px);
    overflow: scroll;
  }
  .footer {
    flex: 50px;
  }
  .return{
    color: blue;
    font-size: 1.5em;
    width: 15%;
    text-align: center;
    height: 100%;
    line-height: 50px;
  }
  .header span{
    color: #121212;
    font-size: 0.9em;
    width: 70%;
    height: 100%;
    line-height: 50px;
  }
</style>
