<template>
  <div class="container">
    <div class="header">
      <i class="fa fa-angle-left return"></i>
      <span>饿了么</span>
      <i class="share  fa fa-share-square-o"></i>
    </div>
    <div class="content">
      <h-search></h-search>
      <h-menu></h-menu>
      <h-members></h-members>
      <h-recommended></h-recommended>
      <h-advertising></h-advertising>
      <h-merchants></h-merchants>
    </div>
    <div class="footer">
      <my-menu></my-menu>
    </div>
  </div>
</template>

<script>
  import MyMenu from './MyMenu'
  import HSearch from '../basis/HSearch'
  import HMenu from '../basis/HMenu'
  import HMembers from '../basis/HMembers'
  import HRecommended from '../basis/HRecommended'
  import HAdvertising from '../basis/HAdvertising'
  import HMerchants from '../basis/HMerchants'
  export default {
    name: "Home",
    components: {
      MyMenu,
      HSearch,
      HMenu,
      HMembers,
      HRecommended,
      HAdvertising,
      HMerchants
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
  .share {
    color: #717171;
    font-size: 1.1em;
    width: 15%;
    height: 100%;
    line-height: 50px;
  }
</style>
