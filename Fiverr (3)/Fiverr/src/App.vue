<template>
  <v-app>

    <v-main>
      <router-view @requestStatus="handleStatus" @overlay="toggleOverlay" />
      <v-overlay :value="showOverlay" color="black">
        <v-progress-circular
          indeterminate
          size="100"
          color="light"
        ></v-progress-circular>
      </v-overlay>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: "App",
  components: {
  },
  data: () => ({
    isShowing: false,
    statusData: null,
    showOverlay: false,
    firstname: "",
    email: "",
    address: ""
    //
  }),
  
    methods: {
      handleStatus(payload) {
        this.isShowing = true;
        this.statusData = payload;
        setTimeout(() => {
          this.isShowing = false;
        }, 5000);
      },
      toggleOverlay(payload) {
        this.showOverlay = payload;
      },
    },
  
};
</script>
