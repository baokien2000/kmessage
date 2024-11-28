<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '@/components/common/base-input.vue'
import ChatList from './chats/chat-list.vue'
import ChatSearch from './search/chat-search.vue'
import IconBox from '@/components/common/icon-box.vue'
import ChatSidebarMoreButton from './chat-sidebar-more-button.vue'

const inputValue = ref('')
const isSearch = ref(false)
const say = (msg: string) => {
  alert(msg)
}
const onSearchClick = () => (isSearch.value = true)
const onBackClick = () => {
  isSearch.value = false
  inputValue.value = ''
}
</script>

<template>
  <aside
    class="text-white gap-3 min-w-[360px] max-h-svh border-r w-[360px] h-full border-stroke pt-4 flex flex-col"
  >
    <div class="flex justify-start px-4 items-center gap-3">
      <h1 class="font-bold text-2xl text-title">Đoạn chat</h1>
      <div class="ml-auto">

        <ChatSidebarMoreButton/>
      </div>
     <IconBox >
        <VsxIcon iconName="Add" :size="24" color="#E2E5E9" type="linear" />
      </IconBox>
    </div>
    <div class="px-4 flex gap-3">
      <button @click="onBackClick" v-if="isSearch">
        <VsxIcon iconName="ArrowLeft" :size="20" color="#E2E5E9" type="linear" />
      </button>
      <BaseInput @click="onSearchClick" v-model="inputValue" placeholder="Tìm kiếm">
        <template #icon-left>
          <VsxIcon iconName="SearchNormal1" :size="18" color="#E2E5E9" type="linear" />
        </template>
      </BaseInput>
    </div>
    <ChatList v-if="!isSearch" :search="inputValue" />
    <ChatSearch v-else :search="inputValue" />
    <!-- <ChatEmpty /> -->
  </aside>
</template>
