<script setup lang="ts">
import { sendOTP } from '@/services/auth';
import { reactive } from 'vue';
interface IError{
  email: string | null
}
const props = defineProps<{
  toggleFormType: (type: string) => void
  setEmail: (value: string) => void
  isLoading: boolean
}>()
const emit = defineEmits(['update:isLoading'])
const error = reactive<IError>({ email: null })

const onValidation = (email:string) => {
  if (!email) {
    error.email = 'Email is required'
    return true
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    error.email = 'Email is invalid'
    return true
  }

  error.email = null
  return false
}
const onSubmit = async (e: Event) => {
  emit('update:isLoading', true)

  const form = e.target as HTMLFormElement
  const email = form.email.value
  const isError = onValidation(email)
  if (isError) {
    emit('update:isLoading', false)
    return
  }
  const res = await sendOTP(email)
  if (res.status === 200) {
    
    console.log("res", res);
    emit('update:isLoading', false)
    props.setEmail(email)
    props.toggleFormType('sign-up-otp')
  } else {
    emit('update:isLoading', false)
    console.log("res", res);
    alert('Failed to send OTP')
  }
}

</script>

<template>
  <h1 class="text-center text-2xl font-bold uppercase">Welcome</h1>
  <p class="text-center">Sign up to continue</p>
  <form
  @submit.prevent="onSubmit"
>
<div class="flex flex-col gap-1 my-5 text-black">
  <input
  name="email"
  type="text"
  :readonly="props.isLoading"
  placeholder="Email"
  class="h-10 px-3 rounded border bg-neutral-dark text-white  border-black/10 outline-none"
  />
  <p v-if="error.email" class="text-error text-xs  " >{{error.email}}</p>
</div>
<button :disabled="props.isLoading" type="submit"   class="w-full h-10 rounded bg-neutral-dark hover:bg-neutral-light"  >Continue</button>
</form>
  <div class="text-sm flex gap-2 items-center justify-end mt-3">
    <p class="text-center">Already have an account?</p>
    <button :disabled="props.isLoading" @click="toggleFormType('sign-in')" class="w-fit underline underline-offset-2">
      Sign in
    </button>
  </div>
</template>
