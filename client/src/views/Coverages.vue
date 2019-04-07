<template>
  <div>
  <v-layout row align-center>
    <v-flex class='page-title'>
      <h2>Coverages</h2>
    </v-flex>
  </v-layout>

  <v-layout v-for="coverage in coverages">
    <v-btn class = 'nav-btn' to="/assets">
        {{coverage.name}}
    </v-btn>
  </v-layout>
  </div>
</template>

<script>
export default {
  computed: {
    coverages: function() {
      return this.$store.state.mockData.customer.policies[0].coverage;
    }
  },
  methods: {
    goToAssets: function() {
      this.$router.push("/assets");
    }
  }
};
</script>

<style>
</style>
