<script setup lang="ts">
import { createUser } from '@/services/auth';
import { reactive } from 'vue';
interface IError{
  password: string | null,
  confirmPassword: string | null
}
const props = defineProps<{
  formType: string
  toggleFormType: (type: string) => void
  email: string
  isLoading: boolean
}>()
const defaultError = { password: null, confirmPassword: null }
const error = reactive<IError>(defaultError)
const emit = defineEmits(['update:isLoading'])
const onValidation = (password: string, confirmPassword: string) => {
  if (!props.email) {
    alert('Something went wrong, please try again')
    props.toggleFormType('sign-in')
    return true
  }
  if (!password || !confirmPassword) {
    if (!password) error.password = 'Password is required'
    if (!confirmPassword) error.confirmPassword = 'Confirm password is required'
    return true
  }
  if (password.length < 8) {
    error.password = 'Password must be at least 8 characters'
    return true
  }
  if (password !== confirmPassword) {
    error.confirmPassword = 'Password does not match'
    return true
  }
  error.password = null
  return false
}
const onSubmit = async (e: Event) => {
  console.log("im here");
  error.confirmPassword = null
  error.password = null
  emit('update:isLoading', true)

  const form = e.target as HTMLFormElement
  const password = form.password.value
  const confirmPassword = form['confirm-password'].value
  const isError = onValidation(password,confirmPassword)
  if (isError) {
    emit('update:isLoading', false)
    return
  }
  const res = await createUser(props.email, password)
  if (res.status === 200) {
    alert(res.data.message)
    props.toggleFormType('sign-in')
  } else {
    alert('Failed to create account')
  }
  console.log("res", res);
  emit('update:isLoading', false)
}
</script>
<template>
  <h1 class="text-center text-2xl font-bold uppercase">Create Account</h1>
  <p class="text-center">Enter your password</p>

  <form
  @submit.prevent="onSubmit" class="flex flex-col gap-3 my-5 text-black">
    <input
      type="email"
      readonly
      :defaultValue="props.email"
      class="h-10 px-3 rounded border bg-neutral-dark/20 text-des border-black/10 outline-none"
    />
    <div>
    <input
    type="password"
:readonly="props.isLoading"
    name="password"
    placeholder="Password"
    class="h-10 px-3 rounded border w-full  bg-neutral-dark text-white border-black/10 outline-none"
    />
    <p v-if="error.password" class="text-error text-xs  " >{{error.password}}</p>
  </div>
  <div >
    <input
      type="password"
      :readonly="props.isLoading"
      name="confirm-password"
      placeholder="Confirm password"
      class="h-10 px-3 rounded border w-full  bg-neutral-dark text-white border-black/10 outline-none"
    />
    <p v-if="error.confirmPassword" class="text-error text-xs  " >{{error.confirmPassword}}</p>
  </div>
    <button
    :disabled="props.isLoading"
  type="submit"
    class="w-full h-10 rounded  text-title hover:text-white bg-neutral-dark hover:bg-neutral-light"
  >
    Create Account
  </button>
  </form>
  
  <div class="text-sm flex gap-2 items-center justify-start mt-3">
    <button :disabled="props.isLoading" @click="toggleFormType('sign-in')" class="w-fit underline underline-offset-2">
      Back to login
    </button>
  </div>
</template>
