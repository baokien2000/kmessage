<script setup lang="ts">
import BasePopover from '@/components/common/base-popover.vue'
import IconBox from '@/components/common/icon-box.vue'

const menuItems = [
  { iconName: 'MessageNotif', text: 'Mask as unread' },
  { divider: true },
  { iconName: 'Notification', text: 'Mute notifications' },
  { iconName: 'UserSquare', text: 'View profile' },
  { divider: true },
  { iconName: 'Call', text: 'Audio call' },
  { iconName: 'Video', text: 'Video call' },
  { divider: true },
  { iconName: 'UserMinus', text: 'Block' },
  { iconName: 'Archive', text: 'Archive chat' },
  { iconName: 'MessageRemove', text: 'Delete chat' },
  { iconName: 'Information', text: 'Report' }
]
</script>

<template>
  <BasePopover PopoverPanelClass="" >
    <template v-slot:button>
      <IconBox
      class="absolute invisible hover:bg-[#4F5052] border border-[#333535] group-hover:visible top-1/2 -translate-y-1/2 right-8 transform"
    >        <VsxIcon iconName="More" :size="24" color="#E2E5E9" type="linear" />
      </IconBox>
    </template>
    <template v-slot:content>
      <div class="flex h-fit w-[360px] flex-col gap-1 rounded-lg bg-main p-2">
        <template v-for="(item, index) in menuItems" :key="index">
          <hr v-if="item.divider" class="my-0.5 h-[0.5px] border-0 bg-des/50" />
          <button
            v-else
            class="flex items-center gap-2.5 rounded-md p-1.5 text-title hover:bg-neutral-dark"
          >
            <div class="size-5">
              <VsxIcon :iconName="item.iconName" :size="20" color="#E2E5E9" type="linear" />
            </div>
            <p class="font-semibold">{{ item.text }}</p>
          </button>
        </template>
      </div>
    </template>
  </BasePopover>
</template>