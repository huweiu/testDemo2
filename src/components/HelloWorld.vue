<template>
  <div id="huwei">
    <highlightjs autodetect :code="'hello world hello worldhello worldhello world'" />
  </div>
</template>

<script setup>
import hljsVuePlugin from '@highlightjs/vue-plugin';

const highlightjs = hljsVuePlugin.component
</script>

<style lang="scss" scoped>

</style>