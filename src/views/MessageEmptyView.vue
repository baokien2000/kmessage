<script setup lang="ts">
import ChatBoxNoSelect from '@/components/layout/chat/chat-box/chat-box-no-select.vue';
import { useMessageStore } from '@/stores/message';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const messageStore = useMessageStore();
const { currentMessage } = storeToRefs(messageStore); 
const router= useRouter()

onMounted(() => {
    console.log("currentMessage.value.id",currentMessage.value.id)
    if (currentMessage.value.id) {
        router.push('/messages/' + currentMessage.value.id)
    }
})
</script>

<template>
 
    <ChatBoxNoSelect />
</template>
