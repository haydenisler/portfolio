<template>
  <div id="home">
    <div class="headline"><span>Hello, I'm Hayden Isler.</span></div>
    <div class="sub-headline"><span>...a full stack web developer in <em>Austin, Texas</em>.</span></div>
  </div>
</template>

<style lang="scss" scoped>
#home {
  padding-left: 80px;
  padding-top: 40px;
}

.headline {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5em;
  font-weight: 800;
  width: 100%;
}

.sub-headline {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  margin-top: 15px;
  font-style: oblique;
}

em {
  font-style: normal;
  color: $text-color-accent;
}

</style>