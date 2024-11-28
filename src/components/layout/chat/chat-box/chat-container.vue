<script setup lang="ts">
import ChatBoxHeader from './chat-box-header.vue';
import ChatBoxInput from './chat-box-input.vue';
import ChatBoxList from './chat-box-list/chat-box-list.vue';
import InfoSidebar from './info-sidebar/info-sidebar.vue';


</script>

<template>
  <article class="flex flex-col flex-1">
    <ChatBoxHeader />
    <!-- <ChatBoxEmpty /> -->
    <ChatBoxList />
    <ChatBoxInput />
  </article>
  <InfoSidebar/>
</template>
