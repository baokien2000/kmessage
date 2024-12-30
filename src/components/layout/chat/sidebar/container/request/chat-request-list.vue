<script setup lang="ts">
import { UserMessageListMockup } from '@/mockup/chat'
import { computed } from 'vue'
import ChatRequestCard from './chat-request-card.vue';
const props = defineProps({
  search: {
    type: String,
    default: ''
  },
  isEdit: {
    type: Boolean,
    default: false
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
    <ChatRequestCard
    :isEdit="props.isEdit"
      v-for="item in filteredUserMessageList"
      :currentMessageUserId="2"
      :message="item"
      :key="item.id"
    />
  </div>
</template>
