<script setup lang="ts">
import type { IChannel } from '@/interfaces/message';
import type { PropType } from 'vue';
import ChatCardMoreButton from './chat-card-more-button.vue';

defineProps({
  currentMessageUserId: {
    type: String
  },
  channel: {
    type: Object as PropType<IChannel>,
    required: true
  }
})
</script>

<template>
  <div
    :class="{
      'bg-blue-grey-dark  hover:bg-blue-grey-dark': currentMessageUserId === channel._id
    }"
    class="flex gap-3 items-center group relative mx-2 rounded-lg cursor-pointer p-2 hover:bg-neutral-dark"
  >
    <!-- User Avatar -->

    <div class="relative min-w-14">
      <img
        :src="channel.avatar"
        alt="user avatar"
        height="56"
        width="56"
        class="object-cover aspect-square rounded-full"
      />
      <div
        v-if="channel.isActive"
        class="h-4 w-4 rounded-full bg-success border-2 border-main absolute bottom-0 right-0"
      />
    </div>
    <!-- Message Content -->

    <div class="">
      <p class="text-[15px] text-title font-semibold">{{ channel.name }}</p>
      <div class="gap-1 text-[13px] text-des flex">
        <span
          :class="{ 'text-title font-medium': channel.unread?.includes('111') }"
          class="line-clamp-1"
          >{{ channel.lastMessage?.content }}</span
        >
        <span>{{ channel.updatedAt }}</span>
      </div>
    </div>
    <!-- New message Marker -->
    <div v-if="channel.isActive" class="h-3 ml-auto min-w-3 w-3 rounded-full bg-blue-light" />

    <!-- Message Action -->
    <ChatCardMoreButton/>
  </div>
</template>
