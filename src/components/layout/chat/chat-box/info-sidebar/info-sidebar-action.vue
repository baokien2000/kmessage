<script setup lang="ts">
import IconBox from '@/components/common/icon-box.vue';
</script>

<template>
    <div class="flex gap-4 my-2 items-center justify-center text-[13px] text-title">
        <div class="flex flex-col gap-2 items-center">
            <IconBox class="p-2">
                <VsxIcon iconName="UserSquare" :size="20"  type="bold" />
            </IconBox>
            <p class="whitespace-nowrap">Thông tin</p>    
        </div>
        <div class="flex flex-col gap-2 items-center">
            <IconBox class="p-2">
                <VsxIcon iconName="Notification" :size="20" type="bold" />
            </IconBox>
            <p class="whitespace-nowrap">Tắt thông báo</p>    
        </div>
        <div class="flex flex-col gap-2 items-center">
            <IconBox class="p-2">
                <VsxIcon iconName="SearchNormal1" :size="20" type="linear" />
            </IconBox>
            <p class="whitespace-nowrap">Tìm kiếm</p>    
        </div>
    </div>
</template>