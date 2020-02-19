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
        <router-link tag="div" to="/mystery" id="mystery">
          <icon-base width="40px" height="40px" viewBox="0 -15 200 200"><icon-mystery /></icon-base>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Hideout from '@/components/Hideout.vue';
import IconBase from '@/components/IconBase.vue';
import IconMystery from '@/components/icons/IconMystery.vue';

export default {
  data: () => {},
  components: {
    Hideout,
    IconBase,
    IconMystery
  }
}
</script>

<style lang="scss">
$content-gutters: 80px;

html {
  height: 100%
}

body {
  margin: 0;
  background-color: $background-color;
  width: 100%;
  height: 100%;
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
  z-index: -2;
}

#main {
  height: 100%;
  width: 100%;
  color: $text-color-main;
}

#header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  #logo {
    font-weight: 800;
    font-size: 2.0em;
  }

  #nav {
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
  }
}

#content {
  /* grid area | content */
  height: 100%;
  width: 100%;
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

/*
 ** MOBILE STYLING
 */
@media screen and (max-width: 800px) {
  #main {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  #header {
    background-color: $text-color-accent-1;
  }
  
  #badges {
    display: none;
  }

  #footer {
    display: none;
  }
}

/*
 ** DESKTOP STYLING
 */
@media screen and (min-width: 801px) {

  #main {
    display: grid;
    grid-template-columns:
      [ badges-begin                  ] 100px
      [ badges-end     gutter-1-end   ] $content-gutters
      [ gutter-2-end   content-begin  ] auto
      [ content-end    gutter-2-begin ] $content-gutters
      [ gutter-2-end                  ]
    ;
    grid-template-rows:
      [ header-begin                  ] 100px
      [ header-end      content-begin ] auto
      [ content-end     footer-begin  ] 60px
      [ footer-end                    ]
    ;
    grid-template-areas:
      'badges gutters-1 header gutters-2'
      'badges gutters-1 content gutters-2'
      'badges footer footer footer'
    ;
  }

  #header {
    grid-area: header;

    #logo {
      cursor: pointer;
      transition: scale 0.1s ease-in;
    }

    #logo:hover {
      scale: 1.15;
    }

    #nav {
      width: 425px;
      color: $text-color-accent-1;

      .nav-button {
        color: $text-color-accent-1;
        font-weight: 400;
        font-size: 1em;
        padding: 10px 25px;
        border: solid $text-color-accent-1 1px;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 600;
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
    grid-area: badges;
    background-color: $elevation-color-2;
  }

  #content {
    grid-area: content;
  }

  #footer {
    grid-area: footer;
    background-color: $elevation-color-1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    font-size: 0.8em;
    color: rgba(255, 255, 255, 0.4);
    padding: 0 $content-gutters;

    #mystery {
      cursor: pointer;
    }

    .router-link-active {
      color: white;
    }
  }
}

</style>
