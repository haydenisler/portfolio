<template>
  <div id="app">
    <div id="main">
      <Hideout id="bg" />
      <div id="header">
        <router-link tag="div" to="/" id="logo"><span>HI</span></router-link>
        <div id="nav">
          <router-link tag="div" to="/projects" class="nav-button"><span>projects</span></router-link>
          <router-link tag="div" to="/resume" class="nav-button"><span>resume</span></router-link>
          <router-link tag="div" to="/contact" class="nav-button"><span>contact</span></router-link>
        </div>
      </div>
      <div id="badges"></div>
      <div id="content">
        <router-view />
      </div>
      <div id="footer">
        <span>: made with &#10084; by hayden isler :</span>
      </div>
    </div>
  </div>
</template>

<script>
import Hideout from '@/components/Hideout.vue';

export default {
  data: () => {},
  components: {
    Hideout
  }
}
</script>

<style lang="scss">
$main-content-padding: 50px;

html {
  height: 100%
}

body {
  margin: 0;
  background-color: $background-color;
  width: 100vw;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  height: 100%;
}

#bg {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
}

#main {
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
  margin: 0 $main-content-padding;
  border-bottom: solid 1px;
  border-color: rgba(255, 255, 255, 0.3);

  #logo {
    font-weight: 800;
    font-size: 2.0em;
    cursor: pointer;
    transition: scale 0.1s ease-in;
  }

  #logo:hover {
    scale: 1.15;
  }

  #nav {
    width: 425px;
    display: flex;
    justify-content: space-between;
    color: $text-color-accent-1;
    font-family: 'Raleway', sans-serif;
    font-size: 1em;

    .nav-button {
      color: $text-color-accent-1;
      font-weight: 400;
      font-size: 1em;
      padding: 10px 25px;
      border: solid $text-color-accent-1 1px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.1s ease-in;
    }

    .nav-button:hover {
      background-color: $text-color-accent-1;
      color: white;
    }

    .router-link-active {
      background-color: $text-color-accent-1;
      color: white;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 $main-content-padding;
  font-family: 'Raleway', sans-serif;
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.4);

}

em {
  color: $text-color-accent-1;
}

strong {
  font-weight: inherit;
  font-style: normal;
  color: $text-color-accent-2;
  animation: pulse 2s ease-in-out infinite;

  .pulsing {
    @keyframes pulse {
      0% { 
        text-shadow: rgba(233, 30, 98, 0.5) 0 0 0;
      }
      38% {
        text-shadow: rgba(233, 30, 98, 0.5) 0 0 20px;
      }
      60% {
        text-shadow: rgba(233, 30, 98, 0) 0 0 20px;
      }
      100% {
        text-shadow: rgba(233, 30, 98, 0) 0 0 20px;
      }
    }
  }
}

</style>
