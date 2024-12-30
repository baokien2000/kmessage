<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
    inputMode: string,
    handleChanheMode: (mode: string) => void
}>()

const timer = ref(0)
const voiceTime = ref(0)
const interval = ref<number | null>(null)
const isPlaying = ref(false)
const elapsedTime = ref(0)
const mediaRecorder = ref<MediaRecorder | null>(null)
const audioChunks = ref<Blob[]>([])
const audioUrl = ref<string | null>(null)

const handleStartRecording = async () => {
    props.handleChanheMode('voice')
    timer.value = 0
    voiceTime.value = 0
    elapsedTime.value = 0
    audioChunks.value = []

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    mediaRecorder.value = new MediaRecorder(stream)
    mediaRecorder.value.ondataavailable = (event) => {
        audioChunks.value.push(event.data)
    }
    mediaRecorder.value.onstop = () => {
        const audioBlob = new Blob(audioChunks.value, { type: 'audio/wav' })
        audioUrl.value = URL.createObjectURL(audioBlob)
    }
    mediaRecorder.value.start()

    const startTime = Date.now()
    const updateTimer = () => {
        const elapsed = Date.now() - startTime
        timer.value = Math.min(elapsed / 1000, 120) // Update timer value in seconds, with a max of 120 seconds (2 minutes)
        if (timer.value < 120) {
            interval.value = requestAnimationFrame(updateTimer)
        } else {
            cancelAnimationFrame(interval.value!)
            voiceTime.value = timer.value
            mediaRecorder.value?.stop()
        }
    }

    interval.value = requestAnimationFrame(updateTimer)
}

const handleStopRecording = () => {
    if (interval.value !== null) {
        cancelAnimationFrame(interval.value)
        voiceTime.value = timer.value
        interval.value = null
        mediaRecorder.value?.stop()
    }
}

const handlePlayRecording = () => {
    if (audioUrl.value) {
        isPlaying.value = true
        const audio = new Audio(audioUrl.value)
        audio.play()
        audio.onended = () => {
            isPlaying.value = false
            elapsedTime.value = 0
        }

        const startTime = Date.now()
        const updateTimer = () => {
            const elapsed = Date.now() - startTime + elapsedTime.value * 1000
            timer.value = Math.min(elapsed / 1000, voiceTime.value) // Update timer value in seconds, with a max of voiceTime
            if (timer.value < voiceTime.value) {
                interval.value = requestAnimationFrame(updateTimer)
            } else {
                cancelAnimationFrame(interval.value!)
                elapsedTime.value = 0
                isPlaying.value = false
            }
        }

        interval.value = requestAnimationFrame(updateTimer)
    }
}

const handlePauseRecording = () => {
    if (interval.value !== null) {
        cancelAnimationFrame(interval.value)
        elapsedTime.value = timer.value
        interval.value = null
        isPlaying.value = false
    }
}

const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`
}
</script>

<template>
    <button
        v-if="inputMode === 'text'"
        class="flex size-6 h-9 min-w-6 items-center"
        @click="handleStartRecording"
    >
        <VsxIcon
            iconName="Microphone2"
            :size="24"
            color="var(--main-theme-color)"
            type="bold"
        />
    </button>
    <div
        class="relative flex h-9 w-full items-center justify-between overflow-hidden rounded-[20px] bg-main-theme-color px-2 text-title"
        v-if="inputMode === 'voice'"
    >
        <div class='absolute ease-linear left-0 top-0 z-[1] h-full bg-[red]/20 transition-all' :style="{
            width: `${(timer * 100) / (voiceTime === 0 ? 120 : voiceTime)}%`
        }" />
        <div class="min-w-7 z-10 relative">
            <VsxIcon v-if='voiceTime === 0' iconName="StopCircle" class="cursor-pointer" :size="28" color="#fff" type="bold" @click="handleStopRecording" />
            <VsxIcon v-else-if="!isPlaying" iconName="PlayCircle" class="cursor-pointer" :size="28" color="#fff" type="bold" @click="handlePlayRecording"/>
            <VsxIcon v-else iconName="PauseCircle" class=" cursor-pointer" :size="28" color="#fff" type="bold" @click="handlePauseRecording"/>
        </div>
        <div class="rounded-[20px] bg-white px-2 text-[13px] font-bold text-main-theme-color">
            {{ formatTime(timer) }}
        </div>
    </div>
</template>