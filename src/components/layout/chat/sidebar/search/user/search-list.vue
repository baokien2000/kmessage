<script setup lang="ts">
import { SearchUserListMockup } from '@/mockup/chat'
import { computed } from 'vue'
import SearchCard from './search-card.vue'
const props = defineProps({
  search: {
    type: String,
    default: ''
  }
})
const friendFilter = computed(() => {
  return SearchUserListMockup.friend.filter((item) => {
    return item.name.toLowerCase().includes(props.search.toLowerCase())
  })
})
const ortherFilter = computed(() => {
  return SearchUserListMockup.orther.filter((item) => {
    return item.name.toLowerCase().includes(props.search.toLowerCase())
  })
})
</script>
<template>
  <div class="overflow-auto flex flex-col">
    <p class="text-title font-medium px-4 mb-3">Bạn bè</p>
    <SearchCard v-for="item in friendFilter" :user="item" :key="item.id" />
    <p v-if="friendFilter.length === 0" class="text-center my-5 text-des">
      Không tìm thấy ai trong bạn bè
    </p>
    <p class="text-title font-medium px-4 my-3">Người khác</p>
    <SearchCard v-for="item in ortherFilter" :user="item" :key="item.id" />
    <p v-if="ortherFilter.length === 0" class="text-center my-5 text-des">
      Không tìm thấy ai trong hệ thống
    </p>
  </div>
</template>
