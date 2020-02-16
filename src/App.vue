<template>
  <div id="app">
    <div> Hi! </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      msg: 'Hello!'
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=VT323&display=swap');

html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
  background-image: linear-gradient(
    #f9ad6a,
    #ff7b89, 
    #8a5082, 
    #6f5f90, 
    #205072, 
    #329d9c, 
    #56c596, 
    #7be495
  );
  background-size: 100% 800%;
  animation: background-animation 30s /*240s*/ linear infinite;

  @keyframes background-animation {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
}



#app {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
