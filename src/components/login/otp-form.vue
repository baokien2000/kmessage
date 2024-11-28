<script setup lang="ts">
import type { IFormTab } from '@/interfaces/auth';
import { verifyOTP } from '@/services/auth';
import { ref, reactive } from 'vue'

const props = defineProps<{
  toggleFormType: (type: string) => void
  default?: string
  digitCount: number
  nextFormType: IFormTab
  email: string
  isLoading: boolean
}>()
const emit = defineEmits(['update:isLoading'])
const digits: (string | null)[] = reactive([])

if (props.default && props.default.length === props.digitCount) {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = props.default.charAt(i)
  }
} else {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = null
  }
}

const otpCont = ref<HTMLElement | null>(null)
const handlePaste = (event: ClipboardEvent) => {
  // event.preventDefault()
  const paste = event.clipboardData?.getData('text')
  if (paste) {
    for (let i = 0; i < props.digitCount; i++) {
      digits[i] = paste.charAt(i)
    }
  }
}
const handleKeyDown = (event: KeyboardEvent, index: number) => {
  if (!event.ctrlKey &&  event.key !== 'v' &&event.key !== 'Tab' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' ) {
     event.preventDefault()
  }
 
  if (event.key === 'Backspace') {
    digits[index] = null

    if (index !== 0 && otpCont.value) {
      ;(otpCont.value.children[index - 1] as HTMLElement).focus()
    }

    return
  }

  if (/^([0-9])$/.test(event.key)) {
    digits[index] = event.key

    if (index !== props.digitCount - 1 && otpCont.value) {
      ;(otpCont.value.children[index + 1] as HTMLElement).focus()
    }
  }
}

const onContinue = async () => {
  emit('update:isLoading', true)
  const otp = digits.join('')
  console.log('otp', otp)
  const res = await verifyOTP(props.email, otp)
  if(res.status !== 200){
    emit('update:isLoading', false)
    alert(res.data.error)
    return
  }
  console.log("res", res);
  alert(res.data.message)

  props.toggleFormType(props.nextFormType)
  emit('update:isLoading', false)
}
</script>

<template>
  <h1 class="text-center text-2xl font-bold uppercase">otp Verification</h1>
  <p class="text-center">Enter the otp sent to your email to continue</p>
  <div class="my-5 text-black flex items-center justify-center gap-2" ref="otpCont">
    <input
      type="text"
      :readonly="props.isLoading"
      v-on:paste="handlePaste"
      class="size-[44px] bg-neutral-dark text-white rounded-[5px] text-center font-bold text-[24px] mb-2"
      v-for="(el, ind) in digits"
      :key="el ?? 0 + ind"
      v-model="digits[ind]"
      @keydown="handleKeyDown($event, ind)"
      :autofocus="ind === 0"
      maxlength="1"
    />
  </div>
  <button :disabled="props.isLoading" @click="onContinue" class="w-full h-10 rounded bg-neutral-dark hover:bg-neutral-light" >
    Continue
  </button>
  <div class="text-sm flex gap-2 items-center justify-start mt-3">
    <button  :disabled="props.isLoading" @click="toggleFormType('sign-in')" class="w-fit underline underline-offset-2">
      Back to login
    </button>
  </div>
</template>
