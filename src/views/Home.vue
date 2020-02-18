<template>
  <div id="home">
    <div id="headlines">
      <div class="headline"><span>I'm Hayden Isler. I build <strong>smart</strong>, <strong>data driven</strong> applications.</span></div>
      <div class="sub-headline"><span>: Full Stack Developer from <em>Austin, TX</em> :</span></div>
    </div>
    <div id="action"></div>
    <div id="work"></div>
  </div>
</template>

<script>
import SmallCard from '@/components/SmallCard.vue';

export default {
  components: {
    SmallCard
  }
}
</script>

<style lang="scss" scoped>
$main-content-padding: 50px;

#home {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
}

#home::after {
  content: "HELLO.";
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 80px;
  margin-left: 140px;
  font-weight: 800;
  font-size: 400px;
  color: #1f1f1f;
  z-index: -1;
}

#headlines {
  .headline {
    font-size: 2.2em;
    font-weight: 800;
  }

  .sub-headline {
    font-size: 1em;
    margin-top: 10px;
    font-style: oblique;
  }
}

#work-headline {
  font-size: 2.2em;
  font-weight: 800;
}

#action {}

#work {}
</style>
