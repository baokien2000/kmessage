<script setup lang="ts">
import BaseDisclosure from '@/components/common/base-disclosure.vue'
import AaIcon from '@/icons/aa-icon.vue'
import BellSlashIcon from '@/icons/bell-slash-icon.vue'
import PinIcon from '@/icons/pin-icon.vue'

const disclosureItems = [
    {
        title: 'Thông tin về đoạn chat',
        buttons: [{ icon: PinIcon, text: 'Xem tin nhắn đã ghim' }]
    },
    {
        title: 'Tùy chỉnh đoạn chat',
        buttons: [
            { icon: 'Colorfilter', text: 'Đổi chủ đề' },
            { icon: 'Heart', text: 'Thay đổi biểu tượng cảm xúc' },
            { icon: AaIcon, text: 'Chỉnh sửa biệt danh' }
        ]
    },
    {
        title: 'File phương tiện và file',
        buttons: [
            { icon: 'Image', text: 'File phương tiện' },
            { icon: 'DocumentText', text: 'File' }
        ]
    },
    {
        title: 'Quyền riêng tư & hỗ trợ',
        buttons: [
            { icon: BellSlashIcon, text: 'Tắt thông báo' },
            { icon: 'Timer1', text: 'Tin nhắn tự hủy' },
            { icon: 'MessageRemove', text: 'Hạn chế' },
            { icon: 'MinusCirlce', text: 'Chặn' },
            { icon: 'Flag', text: 'Báo cáo' }
        ]
    }
]
</script>

<template>
    <div class="p-2">
        <BaseDisclosure
            v-for="(item, index) in disclosureItems"
            :key="index"
            :button-name="item.title"
        >
            <button
                v-for="(button, btnIndex) in item.buttons"
                :key="btnIndex"
                class="flex w-full cursor-pointer items-center gap-2 whitespace-nowrap rounded-lg p-2 text-title hover:bg-neutral-light"
            >
                <div
                    v-if="typeof button.icon === 'string'"
                    class="flex size-5 items-center justify-center"
                >
                    <VsxIcon
                        :iconName="button.icon"
                        :size="20"
                        color="var(--main-theme-color)"
                        type="bold"
                    />
                </div>
                <div v-else class="flex size-5 items-center justify-center">
                    <component :is="button.icon" />
                </div>
                <span class="p-1.5 text-[15px] font-semibold">{{ button.text }}</span>
            </button>
        </BaseDisclosure>
    </div>
</template>
