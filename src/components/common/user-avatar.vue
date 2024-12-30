1
<script setup lang="ts">
defineProps<{
  url: string
  size: number
}>()
</script>
<template>
  <img
    :src="url || `/src/assets/kmessage-icon.png`"
    alt="user avatar"
    :height="size"
    :width="size"
    class="object-cover aspect-square rounded-full"
  />
</template>
