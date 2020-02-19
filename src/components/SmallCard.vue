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
$radius: 7px;

#card {
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 20%;

  #card-header {
    background-color: #1f1f1f;
    height: 75%;
    width: 100%;
    border-radius: $radius $radius 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #card-nav {
    background-color: $elevation-color-3;
    height: 25%;
    width: 100%;
    border-radius: 0px 0px $radius $radius;
  }
}
</style>