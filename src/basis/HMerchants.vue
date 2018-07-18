<template>
  <div>
    <div class="desribe">
      <span class="divider"></span>
      <span class="des-text">推荐商家</span>
      <span class="divider"></span>
    </div>
    <div class="classification">
      <li>综合排序<i class="fa fa-caret-down down"></i></li>
      <li>好评优选</li>
      <li>距离最近</li>
      <li>筛选<i class=""></i></li>
    </div>
    <h-merchant-details></h-merchant-details>
  </div>

</template>

<script>
  import HMerchantDetails from './HMerchantDetails'
  export default {
    name: "HMerchants",
    data(){
      return {

      }
    },
    components: {
      HMerchantDetails
    }
  }
</script>

<style scoped>
  .desribe {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9em;
    font-weight: bold;
  }
  .des-text {
    margin: 0 15px;
  }
  .divider {
    display: inline-block;
    width: 20px;
    height: 1px;
    background-color: #7c7c7c;
  }
  .classification {
    width: 94%;
    height:40px;
    display: flex;
    justify-content: space-between;
    padding: 0 3%;
    border-bottom: 1px solid #dedede;
  }
  .classification li {
    list-style: none;
    flex: 0 1 70px;
    font-size: 0.68em;
    line-height: 40px;
    text-align: center;
    color: #000;
  }
  .down {
    margin-left: 5px;
    font-size: 0.8em;
  }
</style>
