<script setup lang="ts">
import IconBox from '@/components/common/icon-box.vue';
import { useLayout } from '@/stores/layout';
import { useMessageStore } from '@/stores/message';
import { storeToRefs } from 'pinia';
const { onInfoIconToggle} = useLayout()
const messageStore = useMessageStore();
const { currentMessage } = storeToRefs(messageStore); 
</script>

<template>
  <div class="p-4 shadow-[0_0_4px_rgba(0,0,0,0.2)]">
    <div class="flex gap-3 items-center">
      <img
        src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-dep-thien-nhien-thump-1024x536.jpg.webp"
        alt="user avatar"
        height="40"
        width="40"
        class="object-cover aspect-square rounded-full"
      />
      <div class="flex flex-col">
        <p class="text-[17px] text-title font-medium">{{currentMessage.name}}</p>
        <span class="text-[13px] text-des">{{currentMessage.time}}</span>
      </div>
      <div class="flex items-center gap-3 ml-auto">
        <IconBox className="bg-transparent">
          <VsxIcon iconName="Call" :size="24" color="var(--main-theme-color)" type="bold" />
        </IconBox>
        <IconBox className="bg-transparent" @click="onInfoIconToggle">
          <VsxIcon iconName="InfoCircle" :size="24" color="var(--main-theme-color)" type="bold" />
        </IconBox>
      </div>
    </div>
  </div>
</template>
