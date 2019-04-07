<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-alert
                :value="true"
                color="info"
                icon="info"
                outline
                >
                The red <v-icon class="red--text accent-3">
                    close
                </v-icon> icon indicates we have no photo on file for the listed asset.
                </v-alert>
                <v-card>

                    <v-card-title primary-title class="primary headline white--text" >
                        <h1> {{assetType}} </h1>
                    </v-card-title>
                    
                    <template>
                    <v-expansion-panel popout >
                        <v-expansion-panel-content
                        v-for="(item,i) in assetsByType"
                        :key="i"
                        >
                        <template v-slot:header>
                            <div> 
                                {{ item.name.substring(0, 15) + "..." }} 
                                <v-icon v-if="item.photos[0].URL" right class="green--text accent-4">
                                    done
                                </v-icon>   
                                <v-icon v-if="!item.photos[0].URL" right class="red--text accent-3">
                                    close
                                </v-icon>   
                                <v-btn @click.stop="openEditDialog(item)" icon flat>
                                    <v-icon right>
                                        edit
                                    </v-icon>
                                </v-btn>  
                            </div>
                        </template>
                        <v-card
                        >
                            <v-img
                            :src="item.photos[0].URL || defaultImgURL"
                            :width="'100%'"
                            ></v-img>
                            <v-card-text>
                                <div>
                                    <strong class="primary--text" > Asset:</strong> {{ item.name }}
                                </div>
                                <div>
                                    <strong class="primary--text" > Value:</strong> {{ item.value + ".00" }}
                                </div>
                                <div>
                                    <strong class="primary--text" > Serial Number: </strong> {{item.serialNumber}}
                                </div>

                            </v-card-text>
                        </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-card >
                        <v-card-text>
                            <template >
                                <v-btn @click.stop="addNewAssetDialog" color="primary" >
                                    Add Asset
                                </v-btn>  
                            </template>
                        </v-card-text>
                    </v-card>

                    <v-divider></v-divider>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                      <v-btn color="primary" @click="returnToCoveredAssets" >Return to Covered Assets</v-btn>
                    </v-card-actions>

                    </template>

                    <!-- Edit Asset Dialog -->
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

                    <!-- Add Asset dialog -->
                    <v-dialog
                    v-model="addNewAssetModal"
                    width="500"
                    >
                    <v-card>
                        <v-card-title
                        class="headline primary white--text"
                        primary-title
                        >
                        Add Asset
                        </v-card-title>

                        <AddAssetForm :closeDialog="closeAddDialog" />

                        <v-divider></v-divider>
                    </v-card>
                    </v-dialog>

                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

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
      this.$router.push("/coverages");
    }
  }
};
</script>