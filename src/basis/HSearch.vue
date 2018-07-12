<template>
  <div class="search">
    <div class="address"><i class="fa fa-map-marker"></i><span>西华大学德馨苑1栋</span></div>
    <div class="bt-search"><i class="fa fa-search"></i><span>搜索商家、商品名称</span></div>
  </div>
</template>

<script>
  export default {
    name: "HSearch"
  }
</script>

<style scoped>
  .search {
    width: 100%;
    height: 100px;
    background-color: #3f94c3fa;
  }
  .address {
    width: 92%;
    height: 30px;
    padding: 10px 4%;
    color: #ffffff;
    font-size: 0.9em;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .address i{
    font-size: 1.2em;
    margin-right: 5px;
   }
  .bt-search {
    width: 92%;
    height: 34px;
    margin: 8px 4%;
    background-color: white;
    font-size: 0.8em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888888;
  }
  .bt-search i {
    margin-right: 8px;
  }
</style>
