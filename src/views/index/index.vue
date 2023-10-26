<script lang="ts" setup>
const state = reactive({
  imageSrc: new URL(`../../assets/images/liuzixi_bg.jpg`, import.meta.url).href,
})
const { imageSrc } = toRefs(state)
</script>

<template>
  <div class="imgbox">
    <img :src="imageSrc" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.imgbox {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  background: rgb(184, 23, 23);
}
.imgbox img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
