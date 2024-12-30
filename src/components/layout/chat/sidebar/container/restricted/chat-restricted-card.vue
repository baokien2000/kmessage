<script setup lang="ts">
import type { IChannel } from '@/interfaces/message';
import type { PropType } from 'vue';

defineProps({
  currentMessageUserId: {
    type: Number
  },
  message: {
    type: Object as PropType<IChannel>,
    required: true
  },
})
</script>

<template>
  <div
    :class="{
      'bg-blue-grey-dark  hover:bg-blue-grey-dark': currentMessageUserId === message.id
    }"
    class="flex gap-3 items-center group relative mx-2 rounded-lg cursor-pointer p-2 hover:bg-neutral-dark"
  >
  <!-- User Avatar -->
    <div class="relative min-w-10">
      <img
        :src="message.avatar"
        alt="user avatar"
        height="40"
        width="40"
        class="object-cover aspect-square rounded-full"
      />
    </div>
    <!-- Message Content -->

      <p class="text-[15px] text-title font-semibold">{{ message.name }}</p>
   
  </div>
</template>
