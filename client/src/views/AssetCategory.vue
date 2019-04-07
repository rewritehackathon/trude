<template>
    <v-container>
        <v-layout>
            <v-flex>
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
                                {{ item.name }} 
                                <strong class="primary--text" > {{item.value}} </strong>
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
                            :src="item.photos[0].URL || 'https://www.arto.com/c.1067168/shopflow-1-06-0/img/no_image_available.jpeg'"
                            :width="'100%'"
                            ></v-img>
                            <v-card-text>
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
  computed: {
    assetsByType() {
      return this.$store.getters.assetsByType[this.type];
    },
    assetType() {
      return this.type;
    }
  },
  methods: {
    ClickEvent() {
      console.log("it fired");
    }
  }
};
</script>