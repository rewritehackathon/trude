
<template>
  <div>
  <v-layout row align-center>
    <v-flex>
      <h2>FEMA Alert: {{this.$store.state.FEMA.incidentType}}</h2>
      <span>{{this.incidentBegin}} - </span>
      <span>{{this.incidentEnd}}</span>
      <span class = "last-updated"></span>
    </v-flex>
  </v-layout>
    <v-layout row align-center justify-center>
      <v-flex xs6 grow>
        <v-btn>
          Contact Info
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row align-center justify-center>
      <v-flex xs6 grow>
        <v-btn>
          <router-link to="/coverages">
          Coverages
        </router-link>
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
  import moment from 'moment'

export default {

  name: 'home',
  components: {
  },
  computed: {
    incidentBegin: function(){
      return moment(this.$store.state.FEMA.incidentBeginDate).format("dddd, MMMM Do YYYY")
    },
    incidentEnd: function(){
      return moment(this.$store.state.FEMA.incidentEndDate).format("dddd, MMMM Do YYYY")
    }
  }
}
</script>

<style>
  button{
    width: 100%;
  }
</style>
