<template>
  <div>
    <v-layout row>
      <v-flex class='page-title'>
        <h3>Asset Categories</h3>
      </v-flex>
    </v-layout>
    <v-layout row v-for="type in assetTypes">
      <v-flex>
          <v-btn class = 'nav-btn':to ="`/assetCategory/${type}`">
            {{type}}
          </v-btn>
    </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  computed: {
    assetTypes: function(){
      return Object.keys(this.$store.getters.assetsByType)
    },
    assetWorth: function(){

    }
  }
}
</script>

<style>
</style>
