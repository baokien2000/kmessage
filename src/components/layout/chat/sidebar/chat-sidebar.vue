<script setup lang="ts">
import { useLayout } from '@/stores/layout';
import MainSidebar from './container/main/main-sidebar.vue';
import { storeToRefs } from 'pinia';
import RequestSidebar from './container/request/request-sidebar.vue';
import { cn } from '@/utils/cn';
import ArchivedSidebar from './container/archived/archived-sidebar.vue';
import RestrictedSidebar from './container/restricted/restricted-sidebar.vue';

const layoutStore = useLayout();

const { sidebar } = storeToRefs(layoutStore);

</script>



<template>
  <div class="overflow-hidden flex max-w-[360px]">
    <MainSidebar :className="cn(sidebar === 'main' ? 'translate-x-0 opacity-100 ':' -translate-x-full opacity-0','relative transition-all duration-500 ease-in-out		')"  />
    <RequestSidebar  :className="cn(sidebar === 'request' ? ' -translate-x-full opacity-100':'translate-x-0 opacity-0','relative transition-all duration-500 ease-in-out		')" />
    <ArchivedSidebar  :className="cn(sidebar === 'archived' ? '-translate-x-[200%] opacity-100':' -translate-x-full opacity-0','relative transition-all duration-500 ease-in-out		')" />
    <RestrictedSidebar  :className="cn(sidebar === 'restricted' ? '-translate-x-[300%] opacity-100':' -translate-x-[200%] opacity-0','relative transition-all duration-500 ease-in-out		')" />
  </div>

</template>
