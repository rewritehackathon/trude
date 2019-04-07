<template>
  <div>
  <v-layout row align-center>
    <v-flex>
      <h2>Coverages</h2>
    </v-flex>
  </v-layout>
  <!-- <v-layout row align-center>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="coverage in coverages">
        <template v-slot:header>
          <div>
            {{coverage.name}}
          </div>
        </template>
        <v-card>
          <v-card-text>
            Coverage Amount: {{coverage.coverageAmount}}</br>
            Cost: {{coverage.cost}}
          </v-card-text>
          <v-card-actions>
            <v-btn flat>
              <router-link to="/assets">
                Verify Declarations
              </router-link>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-layout> -->
  <v-layout v-for="coverage in coverages">
    <v-btn to="/assets">
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
