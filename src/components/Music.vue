<template>
  <div class="img-box">
    <img
      ref="imgRef"
      :class="{ rotate: playStatus }"
      src="https://storage.beta.custouch.com/res/8082/stopMusic.png"
      alt="music"
      @click="controlMusic"
    />
    <!-- @play="onPlay" -->
    <audio id="bg-music" ref="audioRef" playsinline :src="musicUrl" loop autoplay></audio>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'Music',
  // eslint-disable-next-line vue/require-prop-types
  props: ['url'],
  setup(props) {
    const audioRef = ref<null | HTMLAudioElement>(null)
    const imgRef = ref<null | HTMLImageElement>(null)
    let playStatus = ref(false)
    const musicImg = ref({
      play: 'https://storage.beta.custouch.com/res/8080/music.png',
      pause: 'https://storage.beta.custouch.com/res/8082/stopMusic.png',
    })
    const musicUrl = props.url
    const controlMusic = () => {
      if (audioRef.value && imgRef.value) {
        if (playStatus.value) {
          audioRef.value.pause()
          imgRef.value.src = musicImg.value['pause']
        } else {
          audioRef.value.play()
          imgRef.value.src = musicImg.value['play']
        }
      }
      playStatus.value = !playStatus.value
    }
    return { musicUrl, audioRef, controlMusic, imgRef, playStatus }
  },
}
</script>
<style scoped lang="scss">
// 元素持续旋转关键帧
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.img-box {
  position: fixed;
  width: 27px;
  height: 27px;
  img {
    width: 100%;
    height: 100%;
  }
}
// 旋转类
.rotate {
  animation: rotation 3s linear infinite;
}
</style>
