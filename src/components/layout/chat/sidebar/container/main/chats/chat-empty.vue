<script setup lang="ts">
  const props = defineProps<{ subTitle?: string }>()
</script>
<template>
  <div class="flex items-center flex-col gap-1 justify-center flex-1">
    <VsxIcon class="mb-5" iconName="Message" :size="128" color="#B0B3B8" type="linear" />
    <p class="text-title text-xl font-bold">No messages</p>
    <span class="text-des">{{props.subTitle ?? 'Tin nhắn mới sẽ hiển thị tại đây. '}}</span>
  </div>
</template>
