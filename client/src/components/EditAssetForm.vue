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
          <v-btn color="primary" @click="onUpload" > Upload </v-btn>
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
      let src =
        "https://images-na.ssl-images-amazon.com/images/I/81uYdvZVC-L._SL1500_.jpg";
      let asset = this.asset;
      this.$store.dispatch("addedImageToSrc", { src, asset });

      this.closeEditDialog();
    }
  }
};
</script>