<script setup lang="ts">
import { useRoute } from 'vue-router';
import ChatHeader from './components/layout/header/chat-header.vue';
import { computed } from 'vue';
import ChatSidebar from './components/layout/chat/sidebar/chat-sidebar.vue';
const route = useRoute(); // Lấy thông tin route hiện tại

// Kiểm tra nếu route hiện tại là trang login
const showHeader = computed(() => route.name !== 'Login');
</script>

<template>
  <ChatHeader v-if="showHeader" />
  <main class="flex h-[calc(100svh-60px)] w-svw overflow-hidden text-[15px]">
    <ChatSidebar v-if="showHeader" />
    <RouterView />
  </main>
</template>
