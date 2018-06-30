<template>
  <div>
    <div class="header">
      <i class="fa fa-angle-left return"></i>
      <span>饿了么</span>
      <i class="share  fa fa-share-square-o"></i>
    </div>
    <my-menu></my-menu>
  </div>
</template>

<script>
  import MyMenu from './MyMenu'
  export default {
    name: "Home",
    components: {
      MyMenu
    }
  }
</script>

<style scoped>
  .header{
    position: fixed;
    width: 100%;
    height: 50px;
    top: 0;
    display: flex;
    align-items: center;
  }
  .return{
    color: blue;
    margin:0 20px;
    font-size: 1.5em;
  }
  .header span{
    color: #121212;
    font-size: 0.9em;
  }
  .share {
    color: #717171;
    font-size: 1.1em;
    margin-left: 260px;
  }
</style>
