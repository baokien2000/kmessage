<script setup lang="ts">
import { useLayout } from '@/stores/layout';
import { cn } from '@/utils/cn';
import { storeToRefs } from 'pinia';
import InfoSidebarAvatar from './info-sidebar-avatar.vue';
import InfoSidebarAction from './info-sidebar-action.vue';
import InfoSidebarDisclosure from './info-sidebar-disclosure.vue';
const layoutStore = useLayout();

const { isInfoOpen } = storeToRefs(layoutStore);

</script>
<template>
    <aside
        :class="cn(' h-full w-full border-l border-stroke overflow-y-scroll transition-all duration-500', isInfoOpen ? 'max-w-[360px] overflow-x-hidden ' : 'max-w-0')">
        <InfoSidebarAvatar />
        <InfoSidebarAction/>
        <InfoSidebarDisclosure/>
    </aside>
</template>