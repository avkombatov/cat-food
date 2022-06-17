<template>
  <div class="container center">
    <p class="title">Ты сегодня покормил кота?</p>
    <app-food></app-food>
  </div>
</template>

<script>
import AppFood from './components/AppFood.vue'
export default {
  name: 'App',
  components: {
    AppFood
  }
}
</script>

<style lang="scss">
.container {
  padding-top: 40px;
  padding-bottom: 40px;
  background: url(img/Pattern.png);
}
.title {
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 1px 1px #000000;
  margin-bottom: 30px;
}
@media scree and (max-width: 1160px) {
  .center {
    padding-left: calc(50% - 500px);
    padding-right: calc(50% - 500px);
  }
}
@media screen and (max-width: 930px) {
  .center {
    padding-left: calc(50% - 380px);
    padding-right: calc(50% - 380px);
  }
  @media screen and (max-width: 500px) {
    .title {
      font-size: 27px;
    }
  }
  @media screen and (max-width: 375px) {
    .title {
      line-height: 30px;
      font-size: 26px;
    }
  }
}
</style>
