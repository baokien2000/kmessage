<script setup lang="ts">
import IconBox from '@/components/common/icon-box.vue'
import { useLayout } from '@/stores/layout'
import ChatRequestList from './chat-request-list.vue'
import ChatRestrictedList from './chat-restricted-list.vue';
const layoutStore = useLayout()
const handleBack = () => {
    layoutStore.onSidebarChange('main')
}

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
            <h1 class="text-2xl font-bold text-title">Restricted accounts</h1>

           
        </div>
        <span class="px-4 text-sm text-des"
            >Restrict helps you limit interactions with someone you know without having to block them.</span
        >
        <div class="flex flex-col h-full overflow-hidden">

            <button class="p-2 rounded-lg flex active:bg-[#515253] items-center gap-3 group mx-2 hover:bg-neutral-dark">
                <IconBox className="bg-[#3B3D3E] group-hover:bg-[#4F5051] p-2">
                    <VsxIcon iconName="Add" :size="24" color="#E2E5E9" type="linear" />
                </IconBox>
                <span class="font-semibold text-base">Add people</span>
            </button>
            <ChatRestrictedList />
        </div>
    </aside>
</template>
