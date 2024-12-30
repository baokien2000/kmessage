<template>
  <label
    :class="['base-input', className]"
    class="flex gap-3 bg-neutral-dark text-title items-center"
  >
    <slot name="icon-left"></slot>
    <input
   
      class="w-full bg-transparent outline-none"
      v-bind="$attrs"
      :type="type"
      :value="model"
      :id="props.id"
      @input="updateValue"
    />
    <slot name="icon-right"></slot>
  </label>
</template>

<script setup lang="ts">
// Define props for the component
const props = defineProps({
  type: {
    type: String,
    default: 'text' // Default type for the input
  },
  className: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  }
})

// Define v-model property
const model = defineModel<string | number>('modelValue', {
  required: true
})

function updateValue(event: Event) {
  const target = event.target as HTMLInputElement
  model.value = target.value
}
</script>

<style scoped>
.base-input {
  padding: 6px 16px;
  border-radius: 50px;
  outline: none;
  width: 100%;
}
</style>
