<template>
  <video controls width="250">
    <source src="https://www.runoob.com/try/demo_source/movie.mp4" type="video/mp4">
  </video>

</template>

<script setup name="sv3-video">
import { videoProps } from './types'
// defineOptions({
//   name: 'sv3-button'
// })
defineProps(videoProps)
</script>

<style lang="scss" scoped>
.as {
  color: red;
}
</style>
