<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout justify-content-center wrap >
        <v-flex
          xs12
          md12
          sm12
          lg12
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="10"
            label="Asset Name"
            required
          ></v-text-field>
        </v-flex>

      <v-flex 
          xs12
          md12
          sm12
          lg12
      >
        <v-select
          :items="assetTypes"
          label="Asset Type"
          v-model="assetType"
        ></v-select>
      </v-flex>

        <v-flex xs12 sm6 md3>
          <v-text-field
            v-model="value"
            type="number"
            label="Value"
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md12
          sm12
          lg12
        >
          <v-text-field
            v-model="serialNumber"
            :rules="nameRules"
            :counter="10"
            label="Serial Number"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >   
        Add Photo
          <input
            type="file"
          >
           </input> 
        </v-flex>
        <v-flex
          xs12
          md12
          sm12
          lg12
        >
          <v-btn color="primary" @click="handleAddAsset" >
              Add Asset
          </v-btn>

        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "AddAssetForm",
  props: ["closeDialog"],
  data() {
    return {
      assetTypes: ["Appliance", "Furniture", "Transport Vehicle"],
      assetType: "",
      serialNumber: "",
      value: 0,
      photo: "",
      valid: false,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 255 || "Name must be less than 255 characters"
      ]
    };
  },
  methods: {
    handleAddAsset() {
      let newAsset = {
        name: this.name,
        assetType: this.assetType,
        serialNumber: this.serialNumber,
        value: this.value,
        photos: [
          {
            URL:
              "https://images-na.ssl-images-amazon.com/images/I/71Vfp5kfXeL._SL1500_.jpg"
          }
        ]
      };

      this.$store.dispatch("addAsset", newAsset);
      this.closeDialog();
    }
  }
};
</script>