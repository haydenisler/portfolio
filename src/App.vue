<template>
  <div id="app">
    <div id="main">
      <Hideout id="bg" />
      <div id="header-desktop">
        <router-link tag="div" to="/" id="logo"><span>HI</span></router-link>
        <div id="nav">
          <router-link tag="div" to="/projects" class="nav-button"><span>projects</span></router-link>
          <router-link tag="div" to="/resume" class="nav-button"><span>resume</span></router-link>
          <router-link tag="div" to="/contact" class="nav-button"><span>contact</span></router-link>
        </div>
      </div>
      <div id="header-mobile">
        <router-link tag="div" to="/"><span>HI</span></router-link>
      </div>
      <div id="badges-desktop">
        <a href="https://www.github.com/haydenisler" target="_blank" class="badge">
          <icon-base width="35px" height="35px" viewBox="0 0 24 24"><icon-github /></icon-base>
        </a>
        <a href="https://www.codepen.io/haydenisler" target="_blank" class="badge">
          <icon-base width="35px" height="35px" viewBox="0 0 24 24"><icon-codepen /></icon-base>
        </a>
        <a href="https://www.linkedin.com/in/hayden-isler-b47a909a/" target="_blank" class="badge">
          <icon-base width="35px" height="35px" viewBox="0 0 510 510"><icon-linkedin /></icon-base>
        </a>
        <a href="https://www.twitter.com/haydenisler" target="_blank" class="badge">
          <icon-base width="35px" height="35px" viewBox="0 0 24 24"><icon-twitter /></icon-base>
        </a>
      </div>
      <div id="content">
        <router-view />
      </div>
      <div id="footer-desktop">
        <span>: made with &#10084; by hayden isler :</span>
        <router-link tag="div" to="/mystery" id="mystery">
          <icon-base width="40px" height="40px" viewBox="0 -15 200 200"><icon-mystery /></icon-base>
        </router-link>
      </div>
      <div id="footer-mobile">
        <router-link tag="div" to="/projects" class="nav-button">
          <icon-base width="30px" height="30px" viewBox="0 0 24 24"><icon-projects /></icon-base>
          <span>projects</span>
        </router-link>
        <router-link tag="div" to="/resume" class="nav-button">
          <icon-base width="30px" height="30px" viewBox="0 0 24 24"><icon-resume /></icon-base>
          <span>resume</span>
        </router-link>
        <router-link tag="div" to="/contact" class="nav-button">
          <icon-base width="30px" height="30px" viewBox="0 0 24 24"><icon-email /></icon-base>
          <span>contact</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Hideout from '@/components/Hideout.vue';
import IconBase from '@/components/IconBase.vue';
import IconMystery from '@/components/icons/IconMystery.vue';
import IconEmail from '@/components/icons/IconEmail.vue';
import IconProjects from '@/components/icons/IconProjects.vue';
import IconResume from '@/components/icons/IconResume.vue';
import IconGithub from '@/components/icons/IconGithub.vue';
import IconCodepen from '@/components/icons/IconCodepen.vue';
import IconTwitter from '@/components/icons/IconTwitter.vue';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';

export default {
  data: () => {},
  components: {
    Hideout,
    IconBase,
    IconMystery,
    IconEmail,
    IconProjects,
    IconResume,
    IconGithub,
    IconCodepen,
    IconTwitter,
    IconLinkedin
  }
}
</script>

<style lang="scss">
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
  width: 100%;
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

#content {
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
@media screen and (max-width: 840px) {
  $content-gutters: 30px;

  /* hiding desktop elements */
  #header-desktop, #badges-desktop, #footer-desktop {
    display: none;
  }

  #main {
    display: grid;
    grid-template-columns: $content-gutters auto $content-gutters;
    grid-template-rows: 50px auto 60px;
    grid-template-areas:
      'header header header'
      'gutter-1 content gutter2'
      'footer footer footer'
    ;
  }

  #header-mobile {
    grid-area: header;
    padding: 0 $content-gutters;
    font-size: 1.7em;
    font-weight: 800;
    display: flex;
    flex-direction: row;
    align-items:flex-end;
  }

  #footer-mobile {
    grid-area: footer;
    background-color: $text-color-accent-1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    font-size: 0.8em;
    font-weight: 600;

    .nav-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $background-color;
      transition: color 0.1s ease-in;
      cursor: pointer;
      
      span {
        margin-top: 2px;
      }
    }

    .router-link-active {
      color: white;
    }
  }

  #content {
    grid-area: content;
    overflow: auto;
  }
}

/*
 ** DESKTOP STYLING
 */
@media screen and (min-width: 841px) {
  $content-gutters: 80px;

  /* hiding mobile elements */
  #header-mobile, #footer-mobile {
    display: none;
  }

  #main {
    display: grid;
    grid-template-columns: 80px $content-gutters auto $content-gutters;
    grid-template-rows: 100px auto 60px;
    grid-template-areas:
      'badges gutters-1 header gutters-2'
      'badges gutters-1 content gutters-2'
      'badges footer footer footer'
    ;
  }

  #header-desktop {
    grid-area: header;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    #logo {
      cursor: pointer;
      transition: scale 0.1s ease-in;
      font-weight: 800;
      font-size: 2.0em;
    }

    #logo:hover {
      scale: 1.15;
    }

    #nav {
      display: flex;
      justify-content: space-between;
      font-family: 'Raleway', sans-serif;
      width: 425px;
      color: $text-color-accent-1;
      font-size: 1em;

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

  #badges-desktop {
    grid-area: badges;
    background-color: $elevation-color-2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      color: white;
      text-decoration: none;
      margin: 30px 0px;
    }

    .badge {
      transition: scale 0.1s ease-in;
    }

    .badge:hover {
      scale: 1.1;
    }
  }

  #content {
    grid-area: content;
  }

  #footer-desktop {
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
