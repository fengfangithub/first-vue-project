<template>
  <div id="menu">
    <ul>
      <li><router-link to="/"><i class="fa fa-google-plus"></i><span>首页</span></router-link></li>
      <li><router-link to="/Found"><i class="fa fa-compass"></i><span>发现</span></router-link></li>
      <li><router-link to="/Order"><i class="fa fa-file-text-o"></i><span>订单</span></router-link></li>
      <li><router-link to="/Person"><i class="fa fa-user-o"></i><span>我的</span></router-link></li>
    </ul>
  </div>
</template>

<script>
  import 'font-awesome/css/font-awesome.css'
    export default {
        name: "MyMenu"
    }
</script>

<style scoped>
  a{
    color: #636363;
    text-decoration: none;
  }
  .router-link-active{
    color: #636363;
    text-decoration: none;
   }
  #menu {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 50px;
    font-size: 0.75em;
    color: #999999;
    box-shadow: 0 -0.5px 3px #dbdbdb;
  }
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
  ul li {
    float: left;
    display: inline-block;
    width: 20%;
    margin: 0 calc(20% / 8);
    padding-top: 8px;
  }
  ul li span{
    width: 100%;
    display: block;
    text-align: center;
  }
  ul li i{
    width: 100%;
    display: block;
    text-align: center;
    font-size: 1.1em;
  }
</style>
