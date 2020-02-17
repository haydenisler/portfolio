<template>
  <div id="app">
    <div id="header">
      <router-link tag="div" to="/" class="logo is-link"><span>HI</span></router-link>
      <div id="nav">
        <router-link tag="div" to="/projects" class="nav-button is-link"><span>Projects</span></router-link>
        <router-link tag="div" to="/resume" class="nav-button is-link"><span>Resume</span></router-link>
        <router-link tag="div" to="/contact" class="nav-button is-link"><span>Contact</span></router-link>
      </div>
    </div>
    <div id="badges"></div>
    <div id="content">
      <router-view />
    </div>
    <div id="footer"></div>
  </div>
</template>

<script>
export default {
  data: () => {}
}
</script>

<style lang="scss">
html {
  height: 100%
}

body {
  margin: 0;
  background-color: $background-color;
  width: 100vw;
  height: 100vh;
  font-family: 'Raleway', sans-serif;
}

#app {
  height: 100%;
  width: 100%;

  /* grid */
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 100px 1fr 60px;
  color: $text-color-main;
}

#header {
  /* grid area | header */
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;

  .logo {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 2.3em;
  }

  .is-link {
    cursor: pointer;
    transition: all 0.1s ease-in;
  }

  .is-link:hover {
    scale: 1.05;
    opacity: 0.8;
  }

  #nav {
    width: 425px;
    display: flex;
    justify-content: space-between;
    color: $text-color-accent;
    font-size: 1em;

    .nav-button {
      background-color: $text-color-accent;
      color: white;
      padding: 10px 25px;
      border-radius: 8px;
    }
  }
}

#badges {
  /* grid area | badges */
  grid-area: 1 / 1 / 4 / 2;
  background-color: $elevation-color-2;
}

#content {
  /* grid area | content */
  grid-area: 2 / 2 / 3 / 3;
}

#footer {
  /* grid area | footer */
  grid-area: 3 / 2 / 4 / 3;
  background-color: $elevation-color-1;
}

.text-accent {
  color: $text-color-accent;
}

</style>
