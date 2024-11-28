<script setup lang="ts">
import UserAvatar from '@/components/common/user-avatar.vue'
import ChatBoxMessage from './chat-box-message.vue'
import type { IMessageGroup } from '@/interfaces/message'
import { cn } from '@/utils/cn'
defineProps<{
  messageGroup: IMessageGroup
}>()
</script>

<template>
  <p class="text-center my-3 text-des text-xs">{{ messageGroup.time }}</p>
  <div :class="['flex gap-3 items-end w-full', { 'flex-row-reverse': messageGroup.isMyMessage }]">
    <UserAvatar :url="messageGroup.avatar" :size="28" />
    <div class="flex flex-col gap-0.5 w-full">
      <ChatBoxMessage
        :isMyMessage="messageGroup.isMyMessage"
        v-for="(message, index) in messageGroup.messages"
        :key="message.id"
        :className="
          cn({
            'rounded-bl-lg': index === 0 && !messageGroup.isMyMessage,
            'rounded-tl-lg':
              index === messageGroup.messages.length - 1 && !messageGroup.isMyMessage,
            'rounded-l':
              index !== 0 &&
              index !== messageGroup.messages.length - 1 &&
              !messageGroup.isMyMessage,

            'rounded-br-lg': index === 0 && messageGroup.isMyMessage,
            'rounded-tr-lg': index === messageGroup.messages.length - 1 && messageGroup.isMyMessage,
            'rounded-r':
              index !== 0 && index !== messageGroup.messages.length - 1 && messageGroup.isMyMessage
          })
        "
        >{{ message.content }}</ChatBoxMessage
      >
    </div>
  </div>
</template>
