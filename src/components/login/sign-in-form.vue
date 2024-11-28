<script setup lang="ts">
import { signIn } from '@/services/auth';
import { useRouter } from 'vue-router';

const props = defineProps<{
  formType: string
  toggleFormType: (type: string) => void
  isLoading: boolean
}>()
const emit = defineEmits(['update:isLoading'])
const router = useRouter()

const onSubmit = async (e: Event)  => {
  emit('update:isLoading', true)
  const form = e.target as HTMLFormElement
  const email = form.email.value
  const password = form.password.value
  const res = await signIn(email, password)
  switch (res.status) {
    case 200:
      router.push('/')
      break
    case 401:
      alert('Email or password is incorrect')
      break
    default:
      alert('Failed to sign in')
  }
  emit('update:isLoading', false)
  console.log("res", res);
}
</script>

<template>
  <h1 class="text-center text-2xl font-bold text-title uppercase">Welcome</h1>
  <p class="text-center text-title">Sign in to your account to continue</p>
  <form
  @submit.prevent="onSubmit"
 class="flex flex-col gap-4 my-5 text-white">
    <input
      type="text"
      name="email"
      :readonly="props.isLoading"
      placeholder="Email"
      class="h-10 px-3 rounded border bg-neutral-dark border-black/10 outline-none"
    />
    <input
      type="password"
      :readonly="props.isLoading"
      name="password" 
      placeholder="Password"
      class="h-10 px-3 rounded border bg-neutral-dark border-black/10 outline-none"
    />
    <button
      @click="toggleFormType('forgot')"
      :disabled="props.isLoading"
      type="button"
      class="text-sm text-title hover:text-white underline underline-offset-4 text-end"
    >
      Forgot your password?
    </button>
    <button :disabled="props.isLoading" type="submit"  class="w-full h-10 rounded bg-neutral-dark hover:bg-neutral-light">
      Login
    </button>
  </form>
  <div class="text-sm flex text-title gap-2 items-center justify-end mt-3">
    <p class="text-center">Don't have an account?</p>
    <button :disabled="props.isLoading" @click="toggleFormType('sign-up')" class="w-fit underline hover:text-white underline-offset-2">
      Sign up
    </button>
  </div>
</template>
