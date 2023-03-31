<template>
 <div>Button {{ msg }}</div>
</template>

<script lang="ts" setup name="sv3-button">
import { defineProps } from 'vue'
import { buttonProps } from './types'
defineProps(buttonProps)
</script>

<style lang="scss" scoped>

</style>
