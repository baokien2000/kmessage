<script setup lang="ts">
import ArrowUpIcon from '@/icons/arrow-up-icon.vue';
import PinIcon from '@/icons/pin-icon.vue';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'
import { defineProps } from 'vue'

defineProps<{
 buttonName: string
} > ()

</script>

<template>
    <Disclosure v-slot="{ open }">
      <DisclosureButton class="p-2 hover:bg-neutral-light rounded-lg flex text-title justify-between items-center w-full">
        <span class="text-[15px] whitespace-nowrap py-1.5 font-semibold">{{buttonName}}</span>
        <!-- <VsxIcon :class="open ? 'rotate-180' : ''" iconName="ArrowDown2" :size="20" type="linear" /> -->
        <ArrowUpIcon :class="open ? 'rotate-180' : ''" />  
      </DisclosureButton>

      <DisclosurePanel >
        <slot></slot>
      </DisclosurePanel>
    </Disclosure>
  </template>
  
