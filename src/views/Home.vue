<template>
  <div id="home">
    <div id="headlines">
      <div>
        <div class="headline"><span>Hello, I'm Hayden Isler.</span></div>
        <div class="sub-headline"><span>: Full Stack Developer from <em>Austin, TX</em> :</span></div>
      </div>
    </div>
    <div id="feature">
      <span>I build <strong>smart</strong>, <strong>data driven</strong> applications.</span>
    </div>
    <div id="work-headline">
      <span>View my work:</span>
    </div>
    <div id="action"></div>
    <div id="work">
      <SmallCard card-name="bankstanding"/>
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
$main-content-padding: 50px;

#home {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 15% 15% 10% auto;
  height: 100%;
  width: 100%; 
}

#headlines {
  grid-area: 1 / 1 / 2 / 6;
  padding-left: $main-content-padding;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .headline {
    font-size: 2.2em;
    font-weight: 800;
    width: 100%;
  }

  .sub-headline {
    font-size: 1em;
    margin-top: 10px;
    font-style: oblique;
  }
}

#feature {
  grid-area: 2 / 1 / 3 / 6;
  font-weight: 800;
  font-size: 2.6em;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 30px $main-content-padding;
}

#work-headline {
  grid-area: 3 / 1 / 4 / 3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 $main-content-padding;
  font-size: 2.2em;
  font-weight: 800;
  border-bottom: solid 1px;
  border-color: rgba(255, 255, 255, 0.3);
}

#action {
  grid-area: 3 / 3 / 4 / 6;
  padding: 40px 0px 30px 0px;
  margin: 0 $main-content-padding;
}

#work {
  grid-area: 4 / 1 / 5 / 6;
  margin: 40px $main-content-padding;
  display: flex;
  flex-direction: row;
}
</style>
