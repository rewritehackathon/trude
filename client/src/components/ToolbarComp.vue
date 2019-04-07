<template>
  <v-toolbar color="primary" app>
    <v-toolbar-side-icon class="white--text"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text" >Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn class="white--text" flat>Link One</v-btn>
      <v-btn class="white--text" flat>Link Two</v-btn>
      <v-btn class="white--text" flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "ToolbarComp"
};
</script>