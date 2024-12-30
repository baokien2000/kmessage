<script setup lang="ts">
import UserAvatar from '@/components/common/user-avatar.vue'
import ChatBoxMessage from './chat-box-message.vue'
import type { IMessage, IMessageGroup } from '@/interfaces/message'
import { cn } from '@/utils/cn'
import { useMe } from '@/stores/me';
import { storeToRefs } from 'pinia';
import { format } from "date-fns";
const props = defineProps<{
  messageGroup: IMessage[]
}>()
const meStore = useMe();
const { me } = storeToRefs(meStore); 

const firstMessage = props.messageGroup[0]
console.log("props.messageGroup",props.messageGroup)
const isMyMessage = firstMessage.user._id === me.value._id
</script>

<template>
  <div class="flex flex-col gap-3 w-full">
  <p class="text-center my-3 text-des text-xs">{{ format(firstMessage.createdAt,'MMM dd, p') }}</p>
  <div :class="['flex gap-3 items-end w-full', { 'flex-row-reverse': isMyMessage }]">
    <UserAvatar :url="firstMessage.user.avatar" :size="28" />
    <div class="flex flex-col-reverse gap-0.5 w-full">
      <ChatBoxMessage
        :isMyMessage="isMyMessage"
        v-for="(message, index) in messageGroup"
        :key="message._id"
        :className="
          cn({
            'rounded-bl-lg': index === 0 && !isMyMessage,
            'rounded-tl-lg':
              index === messageGroup.length - 1 && !isMyMessage,
            'rounded-l':
              index !== 0 &&
              index !== messageGroup.length - 1 &&
              !isMyMessage,

            'rounded-br-lg': index === 0 && isMyMessage,
            'rounded-tr-lg': index === messageGroup.length - 1 && isMyMessage,
            'rounded-r':
              index !== 0 && index !== messageGroup.length - 1 && isMyMessage
          },  messageGroup.length === 1 && 'rounded-2xl')"
        
        >{{ message.content }}</ChatBoxMessage
      >
    </div>
  </div>
</div>
</template>
