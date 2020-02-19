<template>
  <div id="home">
    <div id="home-bg"><span>HELLO.</span></div>
    <div id="headlines">
      <div class="headline"><span>I'm Hayden Isler. I build <strong>smart</strong>, <strong>data driven</strong> applications.</span></div>
      <div class="sub-headline"><span>: Full Stack Developer from <em>Austin, TX</em> :</span></div>
    </div>
    <div id="work">
    </div>
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

#home {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 20% 40px auto 40px 20%; 
  width: 100%;
  height: 100%;
}

#home-bg {
  grid-area: 1 / 1 / 6 / 7;
  position: relative;
  height: 100%;
  width: 100%;
  z-index: -1;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  color: #1f1f1f;
  font-weight: 800;
  font-size: 15vw;
}

#headlines {
  grid-area: 1 / 1 / 2 / 7;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

#work {
  width: 100%;
  height: 100%;
  grid-area: 3 / 1 / 4 / 7;
  overflow-x: auto;

  .card {
    margin-right: 50px;
  }
}

#action {
  grid-area: 5 / 1 / 6 / 4;
}

#hire {
   grid-area: 5 / 4 / 6 / 7;
};
</style>
