<template>
  <div>
    <div class="as">Button {{ msg }} buttons</div>
    <div>你好</div>
  </div>
</template>

<script setup name="sv3-button">
import { buttonProps } from './types'
// defineOptions({
//   name: 'sv3-button'
// })
defineProps(buttonProps)
</script>

<style lang="scss" scoped>
.as {
  color: red;
}
</style>
