<template>
  <div>
    <div class="pt-8 px-8 bg">
      <v-row class="justify-space-between">
        <v-col cols="12" lg="2" md="12" sm="12">
          <v-toolbar-title class="text-center">
            <img
              src="../assets/Group 4639.svg"
              alt=""
              width="50%"
              class="ml-8 ml-md-4 cursor-pointer"
              to="/"
            />
          </v-toolbar-title>
        </v-col>

        <v-col cols="12" lg="5" md="12" sm="12" class="d-none d-md-block">
          <div class="d-flex justify-end">
            <span
              class="body-1 font-weight-bold raleway text px-2 navItemBorder"
              >Patients’ Acacess</span
            >
            <span class="body-1 font-weight-bold raleway mx-md-8"
              >Doctors’ Access</span
            >
            <span class="body-1 font-weight-bold raleway mr-8">Blogs</span>
            <span class="body-1 font-weight-bold raleway px-4 navBarBtn"
              >En<img src="../assets/arrow.svg" alt="" class="ml-2"
            /></span>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
