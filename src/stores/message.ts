import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', () => {
    const currentMessage = reactive<any>({})

    // Hàm để cập nhật thông tin người dùng và lưu vào localStorage
    const setCurrentMessage = (userData: any) => {
        console.log('im in')
        Object.keys(userData).forEach((key) => {
            currentMessage[key] = userData[key]
        })
        localStorage.setItem('currentMessage', JSON.stringify(currentMessage))
    }

    // Hàm để tải thông tin người dùng từ localStorage
    const loadCurrentMessage = () => {
        const storedMessage = localStorage.getItem('currentMessage')
        if (storedMessage) {
            const parsedMessage = JSON.parse(storedMessage)
            Object.keys(parsedMessage).forEach((key) => {
                currentMessage[key] = parsedMessage[key]
            })
        }
    }

    // Tải thông tin người dùng từ localStorage khi store được khởi tạo
    loadCurrentMessage()

    return { currentMessage, setCurrentMessage }
})
