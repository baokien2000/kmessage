<script setup lang="ts">
import UserAvatar from '@/components/common/user-avatar.vue'
import ChatBoxMessageGroup from './chat-box-message-group.vue'
import { MessageListMockup } from '@/mockup/chat'
</script>

<template>
  <div class="flex flex-col gap-3 items-center flex-1 p-4 overflow-auto">
    <ChatBoxMessageGroup
      v-for="messageGroup in MessageListMockup.messagesGroup"
      :key="messageGroup.id"
      :messageGroup="messageGroup"
    />

    <!-- User seen or not -->
    <div class="ml-auto">
      <UserAvatar
        url="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-dep-thien-nhien-thump-1024x536.jpg.webp"
        :size="14"
      />
    </div>
  </div>
</template>
