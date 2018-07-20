<template>
  <div>
    <router-link to="/Person" tag="section" v-for="merchant in merchants" class="merchant">
      <div class="merchant-info">
        <div class="logo">
          <img :src="merchant.img">
        </div>
        <div class="merchant-info-content">
          <section class="name">{{merchant.name}}<span class="mark">{{merchant.mark}}</span></section>
          <section class="sales">
            <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
            <span class="star">{{merchant.star}}</span>
            <span>月售</span><span>{{merchant.sale}}</span><span>单</span>
          </section>
          <section class="price">
            <div class="price-left">
              <span><i class="fa fa-yen"></i>{{merchant.up_to_send}}</span><span>起送</span><span class="segmentation"></span><span>优惠配送费</span><span><i class="fa fa-yen"></i>{{merchant.distribution}}</span>
            </div>
            <div class="price-right">
              <span>{{merchant.distance}}</span><span class="segmentation"></span><span>{{merchant.time}}</span>
            </div>
          </section>
        </div>
      </div>
      <div class="merchant-active">
        <section class="active" v-for="active in merchant.breakes">
          <span class="type">{{active.type}}</span><span>{{active.describe}}</span>
        </section>
      </div>
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
            distance: '1.21km', //距离
            time: '47分钟', //送达时间
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
          },
          {
            name: '天府荷叶饭',
            star: 5, //星级
            sale: 653, //月售
            img: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1204/13/c6/11242247_11242247_1334318121515_mthumb.jpg',   //图片
            up_to_send: 7,// 起送费
            distribution: 1, //配送费
            mark: '保', //标志
            distance: '1.21km', //距离
            time: '47分钟', //送达时间
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
          },
          {
            name: '牛晓萌牛排饭',
            star: 5, //星级
            sale: 653, //月售
            img: 'http://img.zcool.cn/community/01d9ba568f297d6ac725af2341c437.JPG',   //图片
            up_to_send: 7,// 起送费
            distribution: 1, //配送费
            mark: '保', //标志
            distance: '1.21km', //距离
            time: '47分钟', //送达时间
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
    border-bottom: 1px solid #dddddd;
  }
  .merchant-info {
    width: 94%;
    padding: 0 3%;
    display: flex;
    height: 75px;
    justify-content: space-between;
  }
  .logo {
    flex: 0 1 60px;
    font-size: 0;
  }
  .logo img {
    padding-top: 3px;
    width: 100%;
    height: 80%;
  }
  .merchant-info-content {
    flex: 0 1 80%;
    border-bottom: 1px dotted #e7e7e7;
  }
  .name {
    font-size: 0.9em;
    font-weight: bolder;
  }
  .sales {
    line-height: 18px;
    color: #1f1f1f;
    letter-spacing: 1.5px;
  }
  .sales span{
    font-size: 0.65em;
  }
  .sales i {
    font-size: 0.6em;
    color: #ffd750;
  }
  .price {
    line-height: 18px;
    color:#1f1f1f;
    letter-spacing: 1.5px;
  }
  .price-left {
    float: left;
  }
  .price span{
    font-size: 0.65em;
  }
  .segmentation {
    width: 1px;
    height: 10px;
    background-color: #7c7c7c;
    display: inline-block;
    margin: 0 5px;
  }
  .price-right{
    float: right;
  }
  .mark {
    float: right;
    font-size: 0.7em;
    font-weight: normal;
    border: 0.5px solid #d8d8d8;
    padding:2px 2px;
    line-height: 15px;
  }
  .merchant-active {
    width: 94%;
    padding: 0 3%;
  }
  .active {
    margin-left: 20%;
    width: 80%;
    font-size: 0.65em;
    display: flex;
    align-items: center;
    padding: 5px 0;
  }
  .type {
    color: white;
    background-color: #b25032;
    margin-right: 5px;
    display: block;
    width: 18px;
    height: 18px;
    text-align: center;
    line-height: 20px;
    border-radius: 3px;
  }
</style>
