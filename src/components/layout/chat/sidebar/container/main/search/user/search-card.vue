<script setup lang="ts">
import IconBox from '@/components/common/icon-box.vue'
import type { IMessage, ISearchUser } from '@/interfaces/message'
import type { PropType } from 'vue'

defineProps({
  user: {
    type: Object as PropType<ISearchUser>,
    required: true
  }
})
</script>

<template>
  <div
    class="flex gap-3 items-center group relative mx-2 rounded-lg cursor-pointer p-2 hover:bg-neutral-dark"
  >
    <!-- User Avatar -->

    <div class="relative min-w-14">
      <img
        :src="user.avatar"
        alt="user avatar"
        height="56"
        width="56"
        class="object-cover aspect-square rounded-full"
      />
    </div>
    <!-- Message Content -->

    <p class="text-[15px] text-title font-semibold">{{ user.name }}</p>
  </div>
</template>
