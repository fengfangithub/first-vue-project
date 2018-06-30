<template>
  <div>
    <div class="header">
      <i class="fa fa-angle-left return"></i>
      <span>发现</span>
    </div>
    <my-menu></my-menu>
  </div>
</template>

<script>
  import MyMenu from './MyMenu'
  export default {
    name: "Found",
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
</style>
