<template>
  <div>
    <v-layout row>
      <v-flex>
        <h3>Asset Categories</h3>
      </v-flex>
    </v-layout>
    <v-layout row v-for="type in assetTypes">
      <v-flex>
        <v-btn>
          <router-link :to ="{name: 'AssetCategory', params:{type: type}}">
            {{type}}
          </router-link>
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
