<template>
  <div id="card">
    <div id="card-header">{{ cardName }}</div>
    <div id="card-nav"></div>
  </div>
</template>

<script>
export default {
  props: {
    cardName: {
      type: String,
      required: false,
      default: 'New Card'
    }
  }
}
</script>

<style lang="scss" scoped>
#card {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 400px;

  #card-header {
    background-color: red;
    height: 70%;
    width: 100%;
    border-radius: 7px 7px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #card-nav {
    background-color: $elevation-color-3;
    height: 30%;
    width: 100%;
    border-radius: 0px 0px 7px 7px;
  }
}
</style>