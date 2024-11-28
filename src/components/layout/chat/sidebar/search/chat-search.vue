<script setup lang="ts">
import { ref } from 'vue'
import SearchList from './user/search-list.vue'
import SearchMessageList from './message/search-message-list.vue'
type ETAB = 'Liên hệ' | 'Tin nhắn'
const props = defineProps({
  search: {
    type: String,
    default: ''
  }
})
const currentTab = ref('Liên hệ')
const onTabClick = (tab: ETAB) => {
  console.log('tab', tab)
  currentTab.value = tab
  console.log('currentTab === tab', currentTab.value === tab)
}
</script>
<template>
  <div class="flex flex-col gap-3 overflow-auto">
    <div class="flex gap-1 px-4">
      <button
        v-for="tab in ['Liên hệ', 'Tin nhắn']"
        :key="tab"
        @click="onTabClick(tab as ETAB)"
        :class="{
          'bg-blue-grey-dark': currentTab === tab,
          'bg-neutral-dark': currentTab !== tab,
          'py-1 rounded w-fit px-4 text-left text-white hover:bg-blue-grey-dark': true
        }"
      >
        {{ tab }}
      </button>
    </div>
    <SearchList v-if="currentTab === 'Liên hệ'" :search="search" />
    <SearchMessageList v-else :search="search" />
    <!-- <p  class="text-center my-5 text-des">Nhấn "Enter" để tìm kiếm.</p> -->
  </div>
</template>
