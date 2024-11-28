<script setup>
  import UserAvatar from '@/components/common/user-avatar.vue';
import SpinnerLoading from '@/components/loading/SpinnerLoading.vue';
import { signOut } from '@/services/auth';
import { useMe } from '@/stores/me';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const meStore = useMe()
const router = useRouter() 
const loading = ref("idle")
const onLogout = async () => {
  loading.value = 'logout'
  meStore.clearMe()
  await signOut()
  router.push('/login')
  console.log('logout')
  loading.value = "idle"
}
</script>



<template>
    <Menu as="div" class="relative inline-block text-left h-10">
        <MenuButton
        >
        <UserAvatar url="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-dep-thien-nhien-thump-1024x536.jpg.webp" :size="40" />
        </MenuButton>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 rounded-lg text-white w-56 origin-top-right ounded-md bg-neutral-dark shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-main text-white' : 'text-des',
                  'group flex  gap-2 font-semibold w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                :disabled="loading !== 'idle'"
              >
              <VsxIcon iconName="InfoCircle" :size="24" color="currentColor" type="linear" />

                Info
              </button>
            </MenuItem>
          </div>
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-main text-white' : 'text-des',
                  'group flex w-full gap-2 font-semibold items-center rounded-md px-2 py-2 text-sm',
                ]"
                @click="onLogout"
                :disabled="loading !== 'idle'"
              >
              <SpinnerLoading  v-if="loading === 'logout'" />
              <VsxIcon iconName="LogoutCurve" :size="24" color="currentColor" type="linear" />

                Log out
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
</template>
