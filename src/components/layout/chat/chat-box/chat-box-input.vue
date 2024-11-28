<script setup lang="ts">
import BaseInput from '@/components/common/base-input.vue'
import EmojiIcon from '@/icons/emoji-icon.vue'
import { ref } from 'vue'
const inputValue = ref('')
</script>
<template>
  <div class="p-4 flex gap-3 items-center">
    <!-- <VsxIcon iconName="AddCircle" :size="24" color="var(--main-theme-color)" type="bold" /> -->
    <VsxIcon iconName="Image" :size="24" color="var(--main-theme-color)" type="bold" />
    <VsxIcon iconName="Paperclip2" :size="24" color="var(--main-theme-color)" type="bold" />
    <VsxIcon iconName="Microphone2" :size="24" color="var(--main-theme-color)" type="bold" />

    <BaseInput v-model="inputValue" placeholder="Aa">
      <template #icon-right>
        <EmojiIcon class="size-5 text-main-theme-color" />
      </template>
    </BaseInput>
    <VsxIcon iconName="Heart" :size="24" color="var(--main-theme-color)" type="bold" />
  </div>
</template>
