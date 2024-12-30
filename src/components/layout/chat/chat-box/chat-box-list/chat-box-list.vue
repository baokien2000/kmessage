<script setup lang="ts">
import UserAvatar from '@/components/common/user-avatar.vue'
import type { IMessage } from '@/interfaces/message'
import { getMessage } from '@/services/message'
import socket from '@/sockets'
import { useInfiniteScroll } from '@vueuse/core'
import { ref } from 'vue'
import ChatBoxMessageGroup from './chat-box-message-group.vue'
import { useRoute } from 'vue-router'
import ChatBoxEmpty from './chat-box-empty.vue'
import SpinnerLoading from '@/components/loading/SpinnerLoading.vue'
import SmallSpinner from '@/components/loading/small-spinner.vue'
import { watch } from 'vue'

const route = useRoute()

const el = ref(null)
const messageList = ref<IMessage[][]>([])
const isLoading = ref(true)
const canLoadMore = ref(true)
const TIME_BETWEEN_MESSAGE = 300000


watch(() => route.params.id, async (newChannel, oldChannel) => {
    if (newChannel !== oldChannel) {
        isLoading.value = true
        canLoadMore.value = true
        messageList.value = []
        await onLoadMore()
    }
})

socket.on('message', (data) => {
    console.log('socket message', data)
    const lastMessageTime = new Date(messageList.value[0][0].createdAt).getTime()
    const currentMessageTime = new Date(data.createdAt).getTime()
    const isLessThanFiveMinute = currentMessageTime - lastMessageTime < TIME_BETWEEN_MESSAGE
    const isSameUserMessage = messageList.value[0][0].user._id === data.user._id

    if (isSameUserMessage && isLessThanFiveMinute) messageList.value[0].unshift(data)
    else messageList.value.unshift([data])
})
// onBeforeUnmount(() => {
//     socket.off('message')
// })
const onLoadMore = async () => {
    isLoading.value = true
    const lastMessageTime = new Date(
        messageList.value?.[messageList.value.length - 1]?.[0]?.createdAt ?? Date.now()
    ).getTime()

    const message = await getMessage(lastMessageTime, route.params.id as string)
    if (message && message.length > 0)  messageList.value = [...messageList.value, ...message]
    else canLoadMore.value = false
    isLoading.value = false
}
useInfiniteScroll(el, onLoadMore, {
    distance: 10,
    direction: 'top',
    canLoadMore: () => canLoadMore.value,
})

console.log('messageList', messageList.value)
</script>
<template>
     <div v-if="messageList.length === 0 && !isLoading"  class="flex flex-1 flex-col items-center gap-3 overflow-auto p-4">
        <ChatBoxEmpty />
    </div>
    <div  v-else ref="el" class="flex flex-1 flex-col-reverse items-center gap-3 overflow-auto p-4">
        <!-- User seen or not -->
        <div class="ml-auto">
            <UserAvatar
                url="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-dep-thien-nhien-thump-1024x536.jpg.webp"
                :size="14"
            />
        </div>
        <ChatBoxMessageGroup
            v-for="messageGroup in messageList"
            :key="messageGroup[0]._id"
            :messageGroup="messageGroup"
        />
        <div v-if="isLoading" class="flex items-center my-auto relative size-10 min-h-10 min-w-10  justify-center gap-2">
            <SmallSpinner :size="25"/>
        </div>
    </div>
   
</template>
