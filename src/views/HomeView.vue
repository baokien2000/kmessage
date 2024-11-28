<script setup lang="ts">
import ChatContainer from '@/components/layout/chat/chat-box/chat-container.vue'
import ChatSidebar from '@/components/layout/chat/sidebar/chat-sidebar.vue'
import ChatHeader from '@/components/layout/header/chat-header.vue';
</script>

<template>
  <ChatHeader />
  <main class="flex h-[calc(100svh-60px)] w-svw overflow-hidden text-[15px]">
    <ChatSidebar />
    <ChatContainer />
  </main>
</template>
