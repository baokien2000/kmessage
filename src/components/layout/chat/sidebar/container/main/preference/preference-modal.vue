<script setup lang="ts">
import BaseSwitch from '@/components/common/base-switch.vue'
import IconBox from '@/components/common/icon-box.vue'
import UserAvatar from '@/components/common/user-avatar.vue'
import Dialog from '@/components/ui/dialog/Dialog.vue'
import DialogClose from '@/components/ui/dialog/DialogClose.vue'
import DialogContent from '@/components/ui/dialog/DialogContent.vue'
import DialogDescription from '@/components/ui/dialog/DialogDescription.vue'
import DialogFooter from '@/components/ui/dialog/DialogFooter.vue'
import DialogHeader from '@/components/ui/dialog/DialogHeader.vue'
import DialogTitle from '@/components/ui/dialog/DialogTitle.vue'
import DialogTrigger from '@/components/ui/dialog/DialogTrigger.vue'
import { Switch } from '@headlessui/vue'
import { ref } from 'vue'
const notificationEnabled = ref(false);
const doNotDisturbEnabled = ref(false);</script>
<template>
    <Dialog>
        <DialogTrigger
            class="flex items-center gap-2.5 rounded-md p-1.5 text-title hover:bg-neutral-dark"
        >
            <div class="size-5">
                <VsxIcon iconName="Setting2" :size="20" color="#E2E5E9" type="linear" />
            </div>
            <p class="font-semibold">Preferences</p>
        </DialogTrigger>
        <DialogContent class="gap-0 border-[#303233] bg-main p-0 [&>button]:hidden">
            <DialogHeader class="relative">
                <DialogClose
                    class="absolute right-4 top-1/2 inline-flex -translate-y-1/2 transform rounded-full"
                    aria-label="Close"
                >
                    <IconBox className="bg-[#3B3D3E] group-hover:bg-[#4F5051] p-2">
                        <VsxIcon
                            iconName="Add"
                            class="rotate-45"
                            :size="24"
                            color="#E2E5E9"
                            type="linear"
                        />
                    </IconBox>
                </DialogClose>
                <DialogTitle
                    class="border-b border-stroke p-4 text-center text-2xl font-semibold text-white"
                    >Preferences
                </DialogTitle>
            </DialogHeader>
            <div class="flex flex-col gap-3 p-4 text-white">
                <p class="px-2 text-xl font-bold leading-5 text-white">Account</p>
                <button class="flex w-full items-center gap-4 rounded-lg p-2 hover:bg-neutral-dark">
                    <UserAvatar
                        url="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-dep-thien-nhien-thump-1024x536.jpg.webp"
                        :size="40"
                    />
                    <div class="flex h-fit flex-col items-start gap-1">
                        <p class="text-[20px] font-medium leading-5">Bao Kien</p>
                        <span class="text-des">See your profile</span>
                    </div>
                </button>
                <hr class="border-stroke" />
                <button
                    class="flex w-full items-center gap-4 rounded-lg p-2 py-3 hover:bg-neutral-dark"
                >
                    <VsxIcon
                        iconName="NotificationCircle"
                        class="rotate-90"
                        :size="24"
                        color="#E2E5E9"
                        type="bold"
                    />
                    <p class="text-[20px] font-medium leading-5">Active Status: ON</p>
                </button>

                <hr class="border-stroke" />
                <p class="px-2 text-xl font-bold leading-5 text-white">Notifications</p>
                <div class="flex w-full items-center gap-4 p-2">
                    <VsxIcon
                        iconName="Notification"
                        :size="24"
                        class="min-w-6"
                        color="#E2E5E9"
                        type="bold"
                    />
                    <div class="flex h-fit flex-col items-start gap-1">
                        <p class="text-[20px] font-medium leading-5">Notification sounds</p>
                        <span class="text-des"
                            >Use sounds to notify you about incoming messages, calls, video chats,
                            and in-app sounds.
                        </span>
                    </div>
                    <BaseSwitch
            v-model="notificationEnabled"
          />
                </div>

                <div class="flex w-full items-center gap-4 p-2">
                    <VsxIcon
                        iconName="Notification"
                        :size="24"
                        class="min-w-6"
                        color="#E2E5E9"
                        type="bold"
                    />
                    <div class="flex h-fit flex-col items-start gap-1 mr-auto">
                        <p class="text-[20px] font-medium leading-5">Do Not Disturb</p>
                        <span class="text-des"
                            >Mute notifications for a specific period of time.
                        </span>
                    </div>

                    <BaseSwitch
            v-model="doNotDisturbEnabled"
          />
                </div>
                <hr class="border-stroke" />
                <button
                    class="flex w-full items-center gap-4 rounded-lg p-2 py-3 hover:bg-neutral-dark"
                >
                    <VsxIcon iconName="MinusCirlce" :size="24" color="#E2E5E9" type="bold" />
                    <p class="text-[20px] font-medium leading-5">Manage Blocking</p>
                </button>
            </div>
        </DialogContent>
    </Dialog>
</template>
