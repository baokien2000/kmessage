<script setup lang="ts">
import { UserMessageListMockup } from '@/mockup/chat';
import { useMessageStore } from '@/stores/message';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const search = ref('')
const router = useRouter()
const { setCurrentMessage } = useMessageStore()
const filteredUserMessageList = computed(() => {
  return UserMessageListMockup.filter((item) => {
    return item.name.toLowerCase().includes(search.value.toLowerCase())
  })
})
const onSelect = (item:any) => {
    search.value = ''
    setCurrentMessage(item)
    router.push('/messages/' + item.id)
}
</script>

<template>
 
    <div class="text-white">
        <div class="flex items-center gap-3 p-4 border-b border-stroke">
            <p>To:</p>
            <input 
                v-model="search"
            type="text" class="w-full bg-transparent border-none focus:outline-none" placeholder="User name">
        </div>
        <div class="overflow-y-auto h-fit max-h-96 w-96  m-5 rounded-lg custom-shadow drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.5)) shadow-[0_0_12px_4px_rgba(0,0,0,0.3)]" >
            <button  v-for="item in filteredUserMessageList" :key="item._id" @click="onSelect(item)" class="flex w-full hover:bg-neutral-dark items-center gap-3 p-2 border-b border-stroke">
                <img :src="item.avatar" alt="avatar" class="w-10 h-10 rounded-full">
                <div>
                    <p class="text-base font-semibold">{{ item.name }}</p>
                </div>
            </button>
        </div>  
    </div>
</template>
