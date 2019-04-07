<template>
  <div>
    <v-layout>
      <v-flex class='page-title'>
        <h3>Document Asset Damage</h3>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-btn class='nav-btn' @click="openEditDialog(item)">
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
              <v-layout row align-center>
                <v-flex shrink>
                  <span class='control-label'>Claimed:</span>
                  <v-switch
                  v-model="item.isClaimed">
                  </v-switch>
                </v-flex>
                <v-flex class = 'item-name' grow>
                  {{ item.name.length > 35 ? item.name.substring(0, 22) + "..." : item.name}}
                </v-flex>
                <v-flex justify-end shrink>
                  <div class='photo-check control-label'>
                    Photographed:
                  </div>
                  <v-checkbox v-model="item.isDocumented" class='photo-check' :disabled="!item.isClaimed">
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
        <v-btn v-if="allDocumented" class='nav-btn' to='/confirm'>
            Finalize Claim
        </v-btn>

                    <!-- Add Photo Dialog -->
                    <v-dialog
                    v-model="editAssetModal"
                    width="500"
                    >
                    <v-card>
                        <v-card-title
                        class="headline primary white--text"
                        primary-title
                        >
                        Add/Change Photo
                        </v-card-title>

                        <EditAssetForm :closeEditDialog="closeEditDialog" :asset="assetToedit" />

                        <v-divider></v-divider>
                    </v-card>
                    </v-dialog>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import EditAssetForm from "@/components/EditAssetForm.vue";
export default {
  components: {
    EditAssetForm
  },
  data() {
    return {
      editAssetModal: false,
      assetToedit: null
    };
  },
  computed: {
    assetsByType: function() {
      return this.$store.getters.assetsByType;
    },
    allDocumented: function() {
      let assets = this.$store.state.mockData.customer.policies[0].assets;
      let allDoc = true;
      assets.forEach(item => {
        if (item.isClaimed && !item.isDocumented) {
          allDoc = false;
        }
      });
      return allDoc;
    }
  },
  methods: {
    openEditDialog(item) {
      this.editAssetModal = true;
      this.assetToedit = item;
      console.log("it fired: ", item);
    },
    closeEditDialog() {
      this.editAssetModal = false;
      this.assetToedit = null;
    }
  }
};
</script>

<style>
div .v-expansion-panel__header{
  color: var(--v-primary-darken2)
}
.v-input--switch, .v-input--checkbox{
   margin-top:0px !important;
 }
 .photo-check{
   justify-content: flex-end;
   text-align: right;
 }
 .control-label{
   color: var(--v-accent-lighten2)
 }
 .item-name{
   text-align: left;
   color: var(--v-accent-darken1);
   font-size: 1.2em;
 }
</style>
