<template>
    <div>
        <h1> {{assetType}} </h1>
    </div>
</template>

<script>
export default {
  name: "AssetCategory",
  props: ["type"],
  computed: {
    assetsByType() {
      return this.$store.getters.assetsByType;
    },
    assetType() {
      return;
    }
  }
};
</script>