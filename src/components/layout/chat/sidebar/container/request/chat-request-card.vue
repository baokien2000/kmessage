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
  isEdit: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    :class="{
      'bg-blue-grey-dark  hover:bg-blue-grey-dark': currentMessageUserId === message.id
    }"
    class="flex gap-3 items-center group relative mx-2 rounded-lg cursor-pointer p-2 hover:bg-neutral-dark"
  >
  <!-- Checkbox -->
  <input
    v-if="isEdit"
    type="checkbox"
    class="h-5 w-5 min-w-5 rounded-sm accent-blue-light border border-stroke"
  />
  <!-- User Avatar -->
    <div class="relative min-w-14">
      <img
        :src="message.avatar"
        alt="user avatar"
        height="56"
        width="56"
        class="object-cover aspect-square rounded-full"
      />
      <div
        v-if="message.isActive"
        class="h-4 w-4 rounded-full bg-success border-2 border-main absolute bottom-0 right-0"
      />
    </div>
    <!-- Message Content -->

    <div class="">
      <p class="text-[15px] text-title font-semibold">{{ message.name }}</p>
      <div class="gap-1 text-[13px] text-des flex">
        <span
          :class="{ 'text-title font-medium': message.lastMessage?.isRead }"
          class="line-clamp-1"
          >{{ message.lastMessage?.content }}</span
        >
        <span>{{ message.lastMessage?.time }}</span>
      </div>
    </div>
    <!-- New message Marker -->
    <div v-if="message.isActive" class="h-3 ml-auto min-w-3 w-3 rounded-full bg-blue-light" />

    <!-- Message Action -->
  </div>
</template>
