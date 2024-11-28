<script setup lang="ts">
import UserAvatar from '@/components/common/user-avatar.vue';
import { useMe } from '@/stores/me';
import HeaderAvatar from './header-avatar.vue';
const meStore = useMe()

</script>
<template>
    <nav class="h-[60px] p-4 bg-main border-b border-stroke flex items-center justify-between">
        <img
          src="/src/assets/kmessage-logo.png"
          alt="background"
          class="rounded-lg w-fit h-10  object-cover"
        />
        <p class="text-white mx-auto">{{ meStore.me.email }}</p>

        <HeaderAvatar/>
</nav>
</template>