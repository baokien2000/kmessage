<script setup lang="ts">
import { UserMessageListMockup } from '@/mockup/chat'
import ChatRestrictedCard from './chat-restricted-card.vue';

</script>
<template>
  <div class="overflow-y-auto flex flex-col relative" >
    <ChatRestrictedCard
      v-for="item in UserMessageListMockup"
      :currentMessageUserId="2"
      :message="item"
      :key="item.id"
    />
  </div>
</template>
