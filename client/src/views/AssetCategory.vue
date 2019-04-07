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
                    <v-expansion-panel>
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
                                <v-btn @click.stop="ClickEvent" icon flat>
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
                    </template>


                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: "AssetCategory",
  props: ["type"],
  data() {
    return {
      defaultImgURL: "https://semantic-ui.com/images/wireframe/image.png"
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
    ClickEvent() {
      console.log("it fired");
    }
  }
};
</script>