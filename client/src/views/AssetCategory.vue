<template>
    <v-container>
        <v-layout>
            <v-flex>
              <v-card>
                    <v-card-title primary-title class="accent headline white--text" >
                        <h1> {{assetType}} </h1>
                    </v-card-title>
                <v-card>


                    <template>
                    <v-expansion-panel popout >
                        <v-expansion-panel-content
                        v-for="(item,i) in assetsByType"
                        :key="i"
                        >
                        <template v-slot:header >
                            <v-card-text class="bye_padding" >
                              <p class="text-lg-left">
                                    <v-icon v-if="item.photos[0].URL" left class="green--text accent-4">
                                        photo_camera
                                    </v-icon>
                                    <v-icon v-if="!item.photos[0].URL" left class="red--text accent-3">
                                        photo_camera
                                    </v-icon>
                                    {{ item.name}}
                              </p>
                            </v-card-text>
                        </template>
                        <v-card
                        >
                            <v-img
                            :src="item.photos[0].URL || defaultImgURL"
                            :width="'100%'"
                            ></v-img>
                            <v-card-text> 
                                <v-btn @click.stop="openEditDialog(item)" icon color="accent" large  >
                                    <v-icon center >
                                        add_a_photo
                                    </v-icon>
                                </v-btn>
                              <p class="text-md-left" >
                                <div>
                                    <strong class="accent--text" > Asset:</strong> {{ item.name }}
                                </div>
                                <div>
                                    <strong class="accent--text" > Value:</strong> {{ item.value + ".00" }}
                                </div>
                                <div>
                                    <strong class="accent--text" > Serial Number: </strong> {{item.serialNumber}}
                                </div>

                              </p>

                            </v-card-text>
                        </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-card >
                        <v-card-text>
                            <template >
                                <v-btn @click.stop="addNewAssetDialog" color="accent" >
                                    Add Asset
                                </v-btn>
                            </template>
                        </v-card-text>
                    </v-card>

                    <v-divider></v-divider>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                      <v-btn color="accent" @click="returnToCoveredAssets" >Return to Covered Assets</v-btn>
                    </v-card-actions>

                    </template>

                    <!-- Edit Asset Dialog -->
                    <v-dialog
                    v-model="editAssetModal"
                    width="500"
                    >
                    <v-card>
                        <v-card-title
                        class="headline accent white--text"
                        primary-title
                        >
                        Add/Change Photo
                        </v-card-title>

                        <EditAssetForm :closeEditDialog="closeEditDialog" :asset="assetToedit" />

                        <v-divider></v-divider>
                    </v-card>
                    </v-dialog>

                    <!-- Add Asset dialog -->
                    <v-dialog
                    v-model="addNewAssetModal"
                    width="500"
                    >
                    <v-card>
                        <v-card-title
                        class="headline accent white--text"
                        primary-title
                        >
                        Add Asset
                        </v-card-title>

                        <AddAssetForm :closeDialog="closeAddDialog" />

                        <v-divider></v-divider>
                    </v-card>
                    </v-dialog>

                </v-card>

              </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style lang="css">
.bye_padding {
  padding: 0;
}
</style>

<script>
import EditAssetForm from "@/components/EditAssetForm.vue";
import AddAssetForm from "@/components/AddAssetForm.vue";
export default {
  name: "AssetCategory",
  components: {
    EditAssetForm,
    AddAssetForm
  },
  props: ["type"],
  data() {
    return {
      defaultImgURL: "https://semantic-ui.com/images/wireframe/image.png",
      editAssetModal: false,
      assetToedit: null,
      addNewAssetModal: false
    };
  },
  computed: {
    assetsByType() {
      return this.$store.getters.assetsByType[this.type];
    },
    assetType() {
      return this.type;
    },
    missingAPhoto() {
      return !!this.$store.getters.assetsByType[this.type].filter(item => {
        return !item.photos[0].URL;
      }).length;
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
    },
    closeAddDialog() {
      this.addNewAssetModal = false;
    },
    addNewAssetDialog() {
      this.addNewAssetModal = true;
    },
    returnToCoveredAssets() {
      this.$router.push("/assets");
    }
  }
};
</script>
