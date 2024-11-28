<script setup lang="ts">
import { UserMessageListMockup } from '@/mockup/chat'
import ChatCard from './chat-card.vue'
import { computed } from 'vue'
const props = defineProps({
  search: {
    type: String,
    default: ''
  }
})
const filteredUserMessageList = computed(() => {
  return UserMessageListMockup.filter((item) => {
    return item.name.toLowerCase().includes(props.search.toLowerCase())
  })
})
</script>
<template>
  <div class="overflow-y-auto flex flex-col relative" >
    <ChatCard
      v-for="item in filteredUserMessageList"
      :currentMessageUserId="2"
      :message="item"
      :key="item.id"
    />
  </div>
</template>
