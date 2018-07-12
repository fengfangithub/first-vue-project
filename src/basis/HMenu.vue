<template>
  <div class="h-menu">
    <div class="container">
      <div class="menus">
        <div class="layer" v-for="menu in menus">
          <router-link to="/Person" class="menu" tag="div" v-for="m in menu.menu1">
            <div class="img"></div>
            <span>{{m}}</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="bt">
      <span class="m-show"></span>
      <span class="m-close"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HMenu",
    data() {
      return {
        menus: [
        {
          menu1: ['美食','超市便利','果蔬生鲜','下午茶','医疗健康']
        },
        {
          menu1: ['打牌5折','浪漫鲜花','麻辣烫','地方菜系','披萨意面']
        }]
      }
    },
  }
</script>

<style scoped>
  .h-menu {
    width: 100%;
    height: 170px;
    overflow: hidden;
    padding: 15px 0;
  }
  .container {
    width: 200%;
    display: flex;
    height: 160px;
  }
  .menus {
    height: 100%;
    width: 50%;
  }
  .layer {
    height: 50%;
    display: flex;
    flex-wrap: wrap;
    padding: 0 3%;
    justify-content: space-between;
  }
  .menu {
    width: 16%;
    font-size: 0.65em;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    color: #363636;
    text-decoration: none;
  }
  .img{
    width: 40px;
    height: 40px;
    padding: 0;
    margin: 0;
    background-image: url("../assets/img1.jpg");
    background-size: cover;
    border-radius: 50%;
  }
  .menu span {
    padding: 0;
    display: inline-block;
    margin-top: 8px;
  }
  .bt {
    width: auto;
    height: 10px;
    display: flex;
    justify-content: center;
  }
  .m-show {
    display: block;
    width: 10px;
    height: 10px;
    background-color: #595959;
    float: left;
    margin-right: 5px;
    border-radius: 50%;
  }
  .m-close{
    display: block;
    width: 10px;
    height: 10px;
    background-color: #cccccc;
    float: left;
    margin-right: 5px;
    border-radius: 50%;
  }
</style>
