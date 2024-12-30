<template>
  <svg :class="spinnerClass" :style="spinnerStyle" viewBox="0 0 50 50">
    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
  </svg>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  size: {
    type: Number,
    default: 50
  }
})

const spinnerClass = 'spinner'
const spinnerStyle = computed(() => ({
  margin: `-${props.size / 2}px 0 0 -${props.size / 2}px`,
  width: `${props.size}px`,
  height: `${props.size}px`
}))
</script>

<style scoped>
.spinner {
  animation: rotate 2s linear infinite;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
}
.path {
  stroke: #fff;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>