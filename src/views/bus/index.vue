<template>
  <div class="imgbox">
    <img :src="currentImg" alt="" />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  imgList: {
    type: Array,
    default: () => {
      const images = []
      for (let index = 0; index < 11; index++) {
        images.push(new URL(`../../assets/images/liuzixi_${index}.jpg`, import.meta.url))
        // images.push(new URL(`http://blessson-image.test.upcdn.net/liuzixi_${index}.jpg`))
      }
      return images
    },
  },
})
const prevIndex = ref(0)
const currentImg = ref(props.imgList[prevIndex.value] as string)
const interval = ref()
onMounted(() => {
  interval.value = setInterval(() => {
    changeImg()
  }, 3000)
})
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
const changeImg = (): void => {
  const images = props.imgList
  let i = Math.floor(Math.random() * images.length)
  while (i === prevIndex.value) {
    i = Math.floor(Math.random() * images.length)
  }
  currentImg.value = props.imgList[i] as string
  ;[prevIndex.value, i] = [i, 0]
}
</script>
<style lang="scss" scoped>
.imgbox {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
}
.imgbox img {
  height: 100%;
  width: 100%;
  object-fit: scale-down;
  /* 使用动画 */
  // animation: showImg 15s linear infinite;
}

/* 创建动画 */
@keyframes showImg {
  0% {
    /* 此阶段图片准备慢慢放大 */
    transform: scale(0.05);
    // border-radius: 50%;
  }
  25% {
    /* 此阶段图片已放大到正常大小，准备旋转 */
    transform: scale(1);
    // border-radius: 50%;
    transform: rotate(0deg);
  }
  50%,
  70% {
    /* 此阶段图片已旋转360度 */
    // transform: rotate(180deg);
  }
  80% {
    /* 此阶段图片仍保留在旋转360度的状态，即停顿一会 */
    // transform: rotate(360deg);
  }
  100% {
    /* 此阶段图片已缩小到近乎消失 */
    transform: scale(0.05);
    // border-radius: 50%;
  }
}
</style>
