<template>
  <v-toolbar color="accent" app>
    <!-- <v-toolbar-side-icon class="white--text"></v-toolbar-side-icon> -->
    <v-toolbar-title @click="goToIndex" class="white--text" >Insurance Pal</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <!-- <v-btn class="white--text" flat>Link One</v-btn>
      <v-btn class="white--text" flat>Link Two</v-btn>
      <v-btn class="white--text" flat>Link Three</v-btn> -->
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "ToolbarComp",
  methods: {
    goToIndex() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
.v-toolbar__title {
  opacity: 0.9;
}
</style>
