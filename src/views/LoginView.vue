<script lang="ts">
import SpinnerLoading from '@/components/loading/SpinnerLoading.vue'
import CreateAccountForm from '@/components/login/create-account-form.vue'
import ForgotForm from '@/components/login/forgot-form.vue'
import OtpForm from '@/components/login/otp-form.vue'
import ResetForm from '@/components/login/reset-form.vue'
import SignInForm from '@/components/login/sign-in-form.vue'
import SignUpForm from '@/components/login/sign-up-form.vue'
import { cn } from '@/utils/cn'
import { ref } from 'vue'
</script>
<script setup lang="ts">
const formType = ref('sign-in')
const email = ref('')
const isLoading = ref(false) 

const setEmail = (value: string) => {
  email.value = value
}
const toggleFormType = (type: string) => {
  formType.value = type
}
</script>
<template>
  <div class="w-svw h-svh bg-[#252728] flex justify-center items-center">
    <div class="h-[400px] w-[700px] rounded-lg relative">
      <img
        src="/src/assets/login-background.jpg"
        alt="background"
        class="rounded-lg w-full h-full object-cover"
      />
      <div
        :class="cn('left-1/2', {
          'left-0': formType === 'sign-in' || formType.includes('otp'),
        })"
        class="py-10 px-5 text-white h-full w-[350px] transition-all duration-500 rounded-lg bottom-0 absolute"
      >
        <SpinnerLoading v-if="isLoading" />
        <img
          v-if="!isLoading"
          src="/src/assets/kmessage-icon.png"
          alt="background"
          class="rounded-lg w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      </div>
      <div
      :class="cn('right-1/2', {
          'right-0': formType === 'sign-in' || formType.includes('otp'),
        })"
       
        class="bg-black/40 py-10 px-5 text-white h-full transition-all duration-500 w-[350px] rounded-lg bottom-0 absolute"
      >
        <SignInForm
          v-if="formType === 'sign-in'"
          :formType="formType"
          :toggleFormType="toggleFormType"
          :isLoading="isLoading"
          @update:isLoading="isLoading = $event"
        />
        <SignUpForm
          v-if="formType === 'sign-up'"
          :toggleFormType="toggleFormType"
          :setEmail="setEmail"
          @update:isLoading="isLoading = $event"
          :isLoading="isLoading"
        />
        <ForgotForm
          v-if="formType === 'forgot'"
          :toggleFormType="toggleFormType"
          :setEmail="setEmail"
          @update:isLoading="isLoading = $event"
          :isLoading="isLoading"
        />
        <OtpForm
          :digit-count="6"
          v-if="formType === 'otp'"
          :toggleFormType="toggleFormType"
          nextFormType="reset"
          :email="email"
          @update:isLoading="isLoading = $event"
          :isLoading="isLoading"
        />
        <OtpForm
          :digit-count="6"
          v-if="formType === 'sign-up-otp'"
          :toggleFormType="toggleFormType"
          nextFormType="create-account"
          :email="email"
           @update:isLoading="isLoading = $event"
           :isLoading="isLoading"
        />
        <ResetForm
          v-if="formType === 'reset'"
          :formType="formType"
          :toggleFormType="toggleFormType"
          :isLoading
          :email="email"
          @update:isLoading="isLoading = $event"
        />
        <CreateAccountForm
          v-if="formType === 'create-account'"
          :isLoading
          :formType="formType"
           :email="email"
          :toggleFormType="toggleFormType"
                @update:isLoading="isLoading = $event"
          />
      </div>
    </div>
  </div>
</template>

<!-- <style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> -->
