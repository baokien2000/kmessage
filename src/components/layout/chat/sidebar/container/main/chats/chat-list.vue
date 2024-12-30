<script setup lang="ts">
import { UserMessageListMockup } from '@/mockup/chat'
import ChatCard from './chat-card.vue'
import { computed } from 'vue'
import { useMessageStore } from '@/stores/message';
import { useRouter } from 'vue-router';
const router = useRouter()

const props = defineProps({
  search: {
    type: String,
    default: ''
  }
})
const {setCurrentMessage} = useMessageStore()
const handleClick = (item:any) => {
  setCurrentMessage(item)
  router.push('/messages/' + item._id)
}
const filteredUserMessageList = computed(() => {
  return UserMessageListMockup.filter((item) => {
    return item.name.toLowerCase().includes(props.search.toLowerCase())
  })
})
</script>
<template>
  <div class="overflow-y-auto flex flex-col relative" >
    <ChatCard
      v-for="item in filteredUserMessageList"
      @click="handleClick(item)"
      :channel="item"
      :key="item._id"
      :currentMessageUserId="(router.currentRoute.value.params.id as string)"
    />
  </div>
</template>
