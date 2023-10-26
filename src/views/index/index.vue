<script lang="ts" setup>
import Music from '@/components/Music.vue'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'
const state = reactive({
  imageSrc: new URL(`../../assets/images/liuzixi_bg.jpg`, import.meta.url).href,
})
const { imageSrc } = toRefs(state)

const particlesInit = async (engine: Engine) => {
  await loadFull(engine)
}

const particlesLoaded = async (container: any) => {
  console.log('Particles container loaded', container)
}

const options = {
  fullScreen: {
    enable: true,
  },
  particles: {
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    color: {
      value: ['#ebd50f', '#1E00FF', '#FF0061', '#E1FF00', '#00FF9E'],
    },
    shape: {
      type: ['circle', 'square', 'star', 'polygon', 'triangle'], // 可用的粒子外观类型有："circle","edge","triangle", "polygon","star"
    },
    opacity: {
      value: {
        max: 1,
        min: 0,
      },
      animation: {
        enable: true,
        speed: 1,
        startValue: 'max',
        destroy: 'min',
      },
    },
    size: {
      value: { min: 5, max: 8 },
    },
    life: {
      duration: {
        sync: true,
        value: 5,
      },
      count: 1,
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
        acceleration: 20,
      },
      speed: {
        min: 25,
        max: 50,
      },
      drift: {
        min: -2,
        max: 2,
      },
      decay: 0.05,
      direction: 'none',
      outModes: {
        default: 'destroy',
        top: 'none',
      },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      direction: 'random',
      move: true,
      animation: {
        enable: true,
        speed: 60,
      },
    },
    tilt: {
      direction: 'random',
      enable: true,
      move: true,
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        speed: 60,
      },
    },
    roll: {
      darken: {
        enable: true,
        value: 25,
      },
      enable: true,
      speed: {
        min: 15,
        max: 25,
      },
    },
    wobble: {
      distance: 30,
      enable: true,
      move: true,
      speed: {
        min: -15,
        max: 15,
      },
    },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      resize: true,
    },
  },
  detectRetina: true,
  background: {
    // color: '#a51a1a',
  },
  responsive: [
    {
      maxWidth: 700,
      options: {
        particles: {
          move: {
            speed: 30,
            decay: 0.05,
          },
        },
      },
    },
  ],
  emitters: [
    {
      direction: 'top-right',
      rate: {
        delay: 0.1,
        quantity: 10,
      },
      position: {
        x: 0,
        y: 50,
      },
      size: {
        width: 0,
        height: 0,
      },
    },
    {
      direction: 'top-left',
      rate: {
        delay: 0.1,
        quantity: 10,
      },
      position: {
        x: 100,
        y: 50,
      },
      size: {
        width: 0,
        height: 0,
      },
    },
  ],
}
</script>

<template>
  <Particles
    id="tsparticles"
    :particles-init="particlesInit"
    :particles-loaded="particlesLoaded"
    :options="options"
  >
  </Particles>
  <div class="imgbox">
    <img :src="imageSrc" alt="" />
  </div>
  <Music
    class="bg-music"
    auto-pay
    url="https://storage.beta.custouch.com/res/audios/38/bgmusic.mp3"
  ></Music>
</template>

<style lang="scss" scoped>
#tsparticles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.bg-music {
  z-index: 100;
  display: none;
}
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
