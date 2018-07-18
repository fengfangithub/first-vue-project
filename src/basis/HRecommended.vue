<template>
  <div class="container">
    <router-link to="/Person" tag="div" v-for="d in dishes" class="dishes">
      <span class="name">{{d.name}}</span>
      <span class="tag">{{d.tag}}</span>
      <img :src="d.img" class="img">
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "HRecommended",
    data(){
      return {
        dishes: [
          {
            name: '品质套餐',
            tag: '搭配齐全吃得好',
            img: '/static/img/dishe1.5046c48.png'
          },
          {
            name: '品质套餐',
            tag: '品质升级亲民',
            img: '/static/img/dishe1.5046c48.png'
          },
          {
            name: '限量抢购',
            tag: '超值美味9.9元起',
            img: '/static/img/dishe1.5046c48.png'
          }
        ]
      }
    },

  }
</script>

<style scoped>
  .container {
    width: 94%;
    height: 120px;
    margin: 5px 3% 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .dishes {
    flex: 0 1 33%;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  .name {
    font-weight: bolder;
  }
  .tag {
    font-size:3px;
    text-align: center;
    line-height: 30px;
    border: 0.5px solid #bbbbbb;
    color: #7c7c7c;
    padding: 0 2px;
    line-height: 20px;
    margin: 5px 0 3px 0;
  }
  .img {
    width: 100%;
    height: 45%;
  }
</style>
