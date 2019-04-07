<template>
  <v-form>
    <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
        >
          <input
            type="file"
            @change="onFileSelected"
          ></input>
          <v-btn color="accent" @click="onUpload" > Upload </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "EditAssetForm",
  props: ["asset", "closeEditDialog"],
  data() {
    return {
      slectedFile: null
    };
  },
  methods: {
    onFileSelected(event) {
      this.slectedFile = event.target.files[0];
    },
    onUpload() {
      console.log("onPuload was fired!");
      let src =
        "https://images-na.ssl-images-amazon.com/images/I/81uYdvZVC-L._SL1500_.jpg";
      let asset = this.asset || {
        name: "IlFornino Stainless Steel Wood Fire Pizza Oven",
        assetType: "Appliance",
        serialNumber: "1234RTL09239001",
        value: "75000",
        photos: [
          {
            photoID: 66787,
            URL:
              "https://www.latimes.com/resizer/mXGCUylOYZm4x97eHTFM2npjWnM=/800x0/www.trbimg.com/img-5bedc9cb/turbine/la-camp-fire-roars-through-butte-county-201811-038"
          },
          {
            photoID: 66788,
            URL: "https://marshcdn.aws.com/assets/photos/66788"
          },
          {
            photoID: 66998,
            URL: "https://marshcdn.aws.com/assets/photos/66998"
          }
        ],
        isClaimed: true,
        isDocumented: false
      };
      this.$store.dispatch("addedImageToSrc", { src, asset });

      this.closeEditDialog();
    }
  }
};
</script>