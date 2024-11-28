<script setup lang="ts">
import { cn } from '@/utils/cn';
import { defineProps } from 'vue'

// Định nghĩa các props mặc định
defineProps({
  className: String
})
</script>

<template>
  <button
    :class="cn('bg-neutral-dark p-1 rounded-full hover:bg-white/20', className)"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>
