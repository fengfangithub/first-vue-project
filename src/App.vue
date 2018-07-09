<template>
  <div id="app" v-bind:style="{height: height + 'px'}">
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data(){
      return {
        height: window.innerHeight
      }
    }
  }
</script>

<style>

</style>
