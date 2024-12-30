<script setup lang="ts">
import socket from '@/sockets';
import { useRoute } from 'vue-router';
import ChatBoxHeader from './chat-box-header.vue';
import ChatBoxList from './chat-box-list/chat-box-list.vue';
import ChatBoxInput from './chax-box-input/chat-box-input.vue';
import InfoSidebar from './info-sidebar/info-sidebar.vue';
import { watch ,ref} from 'vue';

const route = useRoute()
const joinRoom = (roomId: string) => {
  console.log("Joining room:", roomId);
  socket.emit("joinRoom", roomId);
};

const leaveRoom = (roomId: string) => {
  console.log("Leaving room:", roomId);
  socket.emit("leaveRoom", roomId);
};


socket.on("connect", () => {
  console.log("Connected to server:", socket.id);
    joinRoom(route.params.id as string);
});

watch(() => route.params.id, (newRoomId, oldRoomId) => {
  if (oldRoomId) {
    leaveRoom(oldRoomId as string);
  }
  joinRoom(newRoomId as string);
});

</script>

<template>
  <article class="flex flex-col flex-1">

    <ChatBoxHeader />
    <!-- <ChatBoxEmpty /> -->
    <ChatBoxList />
      <!-- Print messages -->
    <ChatBoxInput />
  </article>
  <InfoSidebar/>
</template>
