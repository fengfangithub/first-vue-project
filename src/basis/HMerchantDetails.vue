<template>
  <div>
    <router-link to="/Person" tag="section" v-for="merchant in merchants" class="merchant">
      <div class="merchant-info">
        <div class="logo">
          <img :src="merchant.img">
        </div>
        <div class="merchant-info-content">

        </div>
      </div>
      <div class="merchant-active"></div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "",
    data(){
      return {
        merchants: [
          {
            name: '阿里郎台式快餐厅',
             star: 5, //星级
            sale: 653, //月售
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531920831573&di=f2297e33ef66fd96bc31b7f704fc6d4a&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F016359572d6d9b6ac725b6903daae9.jpg%403000w_1l_2o_100sh.jpg',   //图片
            up_to_send: 7,// 起送费
            distribution: 1, //配送费
            mark: '保', //标志
            breakes: [
              {
                type: '减',
                describe: '满10减10，满20减15，满'
              },
              {
                type: '特',
                describe: '特价商品1元起'
              }
            ] //优惠
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .merchant {
    padding: 12px 0;
    border-bottom: 1px solid #f8f8f8;
  }
  .merchant-info {
    width: 94%;
    padding: 0 3%;
    display: flex;
    height: 60px;
    justify-content: space-between;
  }
  .logo {
    flex: 0 1 60px;
  }
  .logo img {
    width: 100%;
    height: 100%;
  }
  .merchant-info-content {
    flex: 0 1 80%;
    background-color: #7c7c7c;
  }
</style>
