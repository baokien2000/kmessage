<script setup lang="ts">
import { SearchMessageListMockup, SearchUserListMockup } from '@/mockup/chat'
import { computed } from 'vue'
import SearchCard from './search-card.vue'
import SearchMessageCard from './search-message-card.vue'
const props = defineProps({
  search: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div class="overflow-auto flex flex-col">
    <SearchMessageCard v-for="item in SearchMessageListMockup" :user="item" :key="item.id" />
    <p v-if="SearchMessageListMockup.length === 0" class="text-center my-5 text-des">
      Không tìm thấy tin nhắn nào.
    </p>
  </div>
</template>
