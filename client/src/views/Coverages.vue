<template>
  <div>
  <v-layout row align-center>
    <v-flex>
      <h2>Coverages</h2>
    </v-flex>
  </v-layout>
  <v-layout row align-center>
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
              Verify Declarations
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-layout>
  </div>
</template>

<script>
export default{
  computed: {
    coverages:  function(){
      return this.$store.state.mockData.customer.policies[0].coverage
    },
  }
}
</script>

<style>
</style>
