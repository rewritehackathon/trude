<template>
  <v-app>
    <ToolbarComp />
    <v-content>
      <v-container fluid>
        <transition
          name="fade"
          mode="out-in"
          >
          <router-view/>
        </transition>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import ToolbarComp from "@/components/ToolbarComp.vue";

export default {
  name: "App",
  components: {
    ToolbarComp
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
footer{
  background-color: var(--v-accent-base) !important;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.25s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
.nav-btn {
  width: 100%;
  margin-left: 0px !important;
  margin-right: 0px !important;
  color: var(--v-primary-darken1) !important;
}
.page-title{
  margin-top: 3vh;
  margin-bottom: 3vh;
  color: white;
}
</style>
