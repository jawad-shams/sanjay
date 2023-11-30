<template>
  <div>
    <div>
      <!-- <top-bar></top-bar> -->
      <dashboard-content></dashboard-content>
      <!-- <footer-comp></footer-comp> -->
    </div>
  </div>
</template>

<script>
import DashboardContent from "../components/ContentView.vue";

export default {
  components: {
    DashboardContent,
   
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Montseerat";
  src: local("Montseerat"), url(../assets/Montserrat-Bold.ttf) format("truetype");
}

.fF{
  font-family: Montseerat;

}

</style>
