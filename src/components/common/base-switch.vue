<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps<{
  modelValue: boolean;
  onChange?: (value: boolean) => void;
}>();

const emit = defineEmits(['update:modelValue']);
const toggle = () => {
  emit('update:modelValue', !props.modelValue);
  if (props.onChange) props.onChange(!props.modelValue);
};
</script>

<template>
  <div
    @click="toggle"
    :class="[
      'relative inline-flex items-center h-[32px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75',
      modelValue ? 'bg-teal-900' : 'bg-teal-700',
    ]"
  >
    <span class="sr-only">Toggle setting</span>
    <span
      :class="[
        'pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out',
        modelValue ? 'translate-x-7' : 'translate-x-0',
      ]"
    ></span>
  </div>
</template>

<style scoped>
</style>
