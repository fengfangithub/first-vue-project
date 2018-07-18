<template>
  <div class="container">
    <span class="mem">蚂蚁钻石会员</span>
    <span class="ad">免费享准时达PLUS，超时赔现金<i class="fa fa-angle-right right"></i></span>
  </div>
</template>

<script>
    export default {
        name: "HAdvertising"
    }
</script>

<style scoped>
  .container {
    width: 94%;
    height: 60px;
    background-image: url("../assets/advertising.png");
    background-size: cover;
    margin: 0 3%;
    justify-content: center;
  }
  .mem{
    font-size: 0.6em;
    color: #7c7c7c;
    padding: 0 10px;
  }
  .ad {
    font-size: 0.85em;
    padding: 0 10px;
    font-weight: bolder;
  }
  .right {
    font-weight: bold;
    margin-left: 5px;
    font-size: 0.9em;
  }
</style>
