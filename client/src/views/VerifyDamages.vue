<template>
  <div>
    <v-layout>
      <v-flex>
        <h3>Document Asset Damage</h3>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-btn>
          Add Photo
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout v-for="category in assetsByType">
      <v-expansion-panel>
        <v-expansion-panel-content>
          <template v-slot:header>
            <div>
              {{category[0].assetType}}
            </div>
          </template>
          <v-card v-for="item in category">
            <v-card-text>
              <v-layout row align-center justify-space-between>
                <v-flex>
                  <span>Claimed:</span>
                  <v-switch
                  v-model="item.isClaimed">
                  </v-switch>
                </v-flex>
                <v-flex>
                  {{item.name}}
                </v-flex>
                <v-flex justify-end>
                  Photographed:
                  <v-checkbox v-model="item.isDocumented" :disabled="!item.isClaimed">
                  </v-checkbox>
                </v-flex>
            </v-layout>
            </v-card-text>
            <v-divider></v-divider>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-btn v-if="allDocumented">
          <router-link to="/confirm">
            Finalize Claim
          </router-link>
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {

  computed: {
    assetsByType: function(){
      return this.$store.getters.assetsByType
    },
    allDocumented: function(){
      let assets = this.$store.state.mockData.customer.policies[0].assets
      let allDoc = true
      assets.forEach(item=>{
        if(item.isClaimed && !item.isDocumented){
          allDoc = false
        }
      })
      return allDoc
    }
  }
}
</script>

<style>
</style>
