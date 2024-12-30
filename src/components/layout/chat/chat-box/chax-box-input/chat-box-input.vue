<script setup lang="ts">
import BaseInput from '@/components/common/base-input.vue'
import EmojiIcon from '@/icons/emoji-icon.vue'
import { cn } from '@/utils/cn';
import { ref } from 'vue'
import ChatBoxVoiceInput from './chat-box-voice-input.vue';
import socket from '@/sockets';
import { useMe } from '@/stores/me';
import { useRoute } from 'vue-router';

interface IFile {
    url: string
    file: File
}
const route = useRoute()
const inputValue = ref('')
const inputMode = ref('text') // text, emoji, voice, file
const inputFiles = ref<IFile[]>([])
const loading = ref('idle')

const {me} = useMe()
const handleChanheMode = (mode: string) => {
    console.log('mode', mode)
    inputMode.value = mode
}
const onFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    let file = target.files
    if (file) {
        const files = Array.from(file).map((file) => {
            return {
                url: URL.createObjectURL(file),
                file: file
            }
        })
        inputFiles.value = inputFiles.value.concat(files)
        console.log('files', files)
        inputMode.value = 'file'
        console.log('file', file)
    }
}
const onClear = () => {
    inputFiles.value = []
    inputMode.value = 'text'
}

const onDeleteImage = (url: string) => {
    inputFiles.value = inputFiles.value.filter((file) => file.url !== url)
}

// create a timer to record the voice
// increment the timer every second
// stop the timer when the user clicks the stop button

// when the user clicks the stop button, the timer should stop and the voice should be recorded
// the voice should be recorded for the duration of the timer
// the voice should be saved as a file
// the file should be added to the inputFiles array
// the inputMode should be set to 'file'

// when the user clicks the send button, the input value should be sent to the server
// if the input value is empty, the send button should be a heart icon

const handleSendMessage = () => {
    socket.emit("sendMessage", {
        channel: route.params.id,
        content: inputValue.value,
        user: me
     });
    inputValue.value = ''
}
console.log('inputFiles', route.params.id)
</script>
<template>
    <div class="flex items-end gap-3 p-4">
        <!-- Back Button -->
        <button
            v-if="inputMode !== 'text'"
            class="flex size-6 h-9 min-w-6 items-center"
            @click="onClear"
        >
            <VsxIcon
                iconName="AddCircle"
                class="rotate-45"
                :size="24"
                color="var(--main-theme-color)"
                type="bold"
            />
        </button>
        <!-- Upload File -->
        <label
            for="files-upload"
            v-if="inputMode === 'text'"
            class="flex size-6 h-9 min-w-6 cursor-pointer items-center"
        >
            <VsxIcon iconName="Image" :size="24" color="var(--main-theme-color)" type="bold" />
            <input
                @change="onFileChange"
                multiple
                name="file-upload"
                id="files-upload"
                type="file"
                class="hidden"
            />
        </label>
        <!-- Audio Button -->

       <ChatBoxVoiceInput :inputMode="inputMode" :handleChanheMode="handleChanheMode"  />
        <!-- Input -->
        <label
            v-if="inputMode !== 'voice'"
            class="flex w-full flex-col overflow-hidden rounded-[20px] bg-neutral-dark text-title"
            for="chat-input"
        >
            <!-- Files -->
            <div v-if="inputMode === 'file'" class="flex w-fit gap-2 px-4 py-2">
                <label
                    for="file-upload"
                    class="flex size-12 cursor-pointer items-center justify-center rounded-lg bg-main hover:bg-neutral-dark"
                >
                    <VsxIcon iconName="Image" :size="24" color="#E4E6EA" type="bold" />
                    <input
                        @change="onFileChange"
                        multiple
                        name="file-upload"
                        id="file-upload"
                        type="file"
                        class="hidden"
                    />
                </label>
                <div
                    v-for="(file, index) in inputFiles"
                    :key="`${file.file.name}-${index}`"
                    class="relative flex items-center gap-2"
                >
                    <img :src="file.url" class="aspect-square h-12 w-auto rounded-lg" />
                    <button
                        @click="onDeleteImage(file.url)"
                        class="absolute -right-1.5 -top-1.5 rounded-full bg-neutral-dark"
                    >
                        <VsxIcon iconName="CloseCircle" :size="16" color="#b0b3b8" />
                    </button>
                </div>
            </div>

            <BaseInput
                id="chat-input"
                className="h-9"
                autocomplete="off"
                v-model="inputValue"
                placeholder="Aa"
            >
                <template #icon-right>
                    <EmojiIcon class="size-5 text-main-theme-color" />
                </template>
            </BaseInput>
        </label>

        <!-- Send Button -->
        <button class="flex size-6 h-9 min-w-6 items-center">
            <VsxIcon
                v-if="inputValue.length === 0 && inputMode !== 'voice'"
                iconName="Heart"
                :size="24"
                color="var(--main-theme-color)"
                type="bold"
            />
            <VsxIcon
                v-else
                iconName="Send"
                @click="handleSendMessage"
                :size="24"
                color="var(--main-theme-color)"
                type="bold"
            />
        </button>
    </div>
</template>
