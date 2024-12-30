<script setup lang="ts">
import IconBox from '@/components/common/icon-box.vue'
import { ref } from 'vue'
import ChatList from '../main/chats/chat-list.vue'
import { useLayout } from '@/stores/layout'
import { storeToRefs } from 'pinia'
import ChatRequestList from './chat-request-list.vue'
const layoutStore = useLayout()
const handleBack = () => {
    layoutStore.onSidebarChange('main')
}
const handleEditToggle = () => {
    isEdit.value = !isEdit.value
}
const isEdit = ref(false)
const props = defineProps<{
    className?: string
}>()
</script>
<template>
    <aside
        :class="props.className"
        class="flex h-full max-h-svh w-[360px] min-w-[360px] flex-col gap-3 border-r border-stroke pt-4 text-white"
    >
        <div class="flex items-center justify-start gap-3 px-4">
            <IconBox @click="handleBack" className="bg-main">
                <VsxIcon iconName="ArrowLeft" :size="24" color="#E2E5E9" type="linear" />
            </IconBox>
            <h1 class="text-2xl font-bold text-title">Requests</h1>

            <IconBox @click="handleEditToggle" className="ml-auto">
                <VsxIcon iconName="Edit" :size="24" color="#E2E5E9" type="linear" />
            </IconBox>
        </div>
        <span class="px-4 text-sm text-des"
            >You can open a message request for more info on who sent it. They won't be notified you
            opened it.</span
        >
        <ChatRequestList :isEdit="isEdit" />
        <div v-if="isEdit" class="flex items-center gap-4 p-4 pt-1">
            <button
                class="w-full rounded-md bg-neutral-dark py-2 font-semibold text-title hover:bg-[#4F5051] disabled:cursor-not-allowed disabled:text-des disabled:hover:bg-neutral-dark disabled:hover:text-des"
            >
                Mask as read
            </button>
            <button
                disabled
                class="w-full rounded-md bg-neutral-dark py-2 font-semibold text-title hover:bg-[#4F5051] disabled:cursor-not-allowed disabled:text-des disabled:hover:bg-neutral-dark disabled:hover:text-des"
            >
                Delete
            </button>
        </div>
        <!-- <ChatEmpty /> -->
    </aside>
</template>
