<script setup lang="ts">
import IconBox from '@/components/common/icon-box.vue'
import { useLayout } from '@/stores/layout'
import ChatEmpty from '../main/chats/chat-empty.vue'
const props = defineProps<{ className?: string }>()

const layoutStore = useLayout()
const handleBack = () => layoutStore.onSidebarChange('main')
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
            <h1 class="text-2xl font-bold text-title">Archived chats</h1>
        </div>

        <ChatEmpty sub-title="Archived messages will be displayed here." />
    </aside>
</template>
