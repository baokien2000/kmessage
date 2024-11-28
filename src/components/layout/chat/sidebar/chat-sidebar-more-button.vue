<script setup lang="ts">
import BasePopover from '@/components/common/base-popover.vue'
import IconBox from '@/components/common/icon-box.vue'

const menuItems = [
  { iconName: 'Setting2', text: 'Preferences' },
  { divider: true },
  { iconName: 'Messages3', text: 'Message requests' },
  { iconName: 'ArchiveBox', text: 'Archived chats' },
  { iconName: 'MessageRemove', text: 'Restricted accounts' },
  { divider: true },
  { iconName: 'SecuritySafe', text: 'Privacy & safety', hasArrow: true },
  { divider: true },
  { iconName: 'MessageQuestion', text: 'Help' }
]
</script>

<template>
  <BasePopover>
    <template v-slot:button>
      <IconBox class="ml-auto">
        <VsxIcon iconName="More" :size="24" color="#E2E5E9" type="linear" />
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
            <VsxIcon :iconName="item.iconName" :size="20" color="#E2E5E9" type="linear" />
            <p class="font-semibold">{{ item.text }}</p>
            <VsxIcon
              v-if="item.hasArrow"
              class="ml-auto"
              iconName="ArrowRight2"
              :size="16"
              color="#E2E5E9"
              type="linear"
            />
          </button>
        </template>
      </div>
    </template>
  </BasePopover>
</template>