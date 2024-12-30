<!--   
  <script setup lang="ts">
  import { cn } from '@/utils/cn';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  
  const props = defineProps < {
    PopoverPanelClass?: string
}>()
  </script>
  
  
<template>
      <Popover  class="relative">
        <PopoverButton
        >
          <slot name="button"/>
        </PopoverButton>
  
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-1 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-1 opacity-0"
        >
          <PopoverPanel
            :class="cn('absolute custom-shadow left-full ml-2 top-0 z-[100] w-fit h-fit',props.PopoverPanelClass)"
          >
            <slot name="content" />
          </PopoverPanel>
        </transition>
      </Popover>
  </template>
<style scoped>
  .custom-shadow {
    filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.2));
    box-shadow: 0 12px 28px 0 rgba(0, 0, 0, .2), 0 2px 4px 0 rgba(0, 0, 0, .1);
  }
</style> -->


<script setup lang="ts">
import Popover from '../ui/popover/Popover.vue';
import PopoverContent from '../ui/popover/PopoverContent.vue';
import PopoverTrigger from '../ui/popover/PopoverTrigger.vue';


</script>

<template>
  <Popover>
    <PopoverTrigger  as-child>
      <slot name="button"/>
    </PopoverTrigger>
    <PopoverContent side="right" align="start" class="custom-shadow drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.5))  bg-transparent w-fit p-0 border-0 shadow-[0_0_12px_4px_rgba(0,0,0,0.3)]">
      <slot name="content" class="custom-shadow " />
    </PopoverContent>
  </Popover>
</template>

