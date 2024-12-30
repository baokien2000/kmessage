<script lang="ts" setup>
import EmojiIcon from '@/icons/emoji-icon.vue'
import ReplyIcon from '@/icons/reply-icon.vue'
import { cn } from '@/utils/cn'

defineProps<{
  className?: string
  isMyMessage?: boolean
}>()
</script>
<template>
  <div :class="['flex gap-3 items-center group w-full', { 'flex-row-reverse': isMyMessage }]">
    <div
      :class="[
        cn(
          'px-3 py-1.5 inline-block w-fit rounded-[16px] max-w-[600px]',
          isMyMessage ? 'bg-main-theme-color text-white' : 'bg-neutral-dark text-title',
          className
        )
      ]"
    >
      <slot></slot>
    </div>
    <div class="group-hover:flex hidden">
      <button class="rounded-full hover:bg-neutral-dark p-2">
        <EmojiIcon class="size-4 text-main-theme-color" />
      </button>
      <button class="rounded-full hover:bg-neutral-dark p-2">
        <ReplyIcon class="size-4" />
      </button>
      <button class="rounded-full hover:bg-neutral-dark p-2">
        <VsxIcon iconName="More" class="rotate-90" :size="16" color="#5584FF" type="linear" />
      </button>
    </div>
  </div>
</template>
