import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { IUser } from '@/interfaces/auth'

export const useMe = defineStore('me', () => {
    // Trạng thái lưu thông tin người dùng
    const me = reactive<IUser>({
        _id: null,
        name: '',
        email: '',
        updatedAt: '',
        createdAt: '',
        avatar: ''
    })

    // Hàm để cập nhật thông tin người dùng
    const setMe = (userData: IUser) => {
        me._id = userData._id
        me.name = userData.name
        me.email = userData.email
    }

    // Hàm để xóa thông tin người dùng (khi logout)
    const clearMe = () => {
        me._id = null
        me.name = ''
        me.email = ''
        me.updatedAt = ''
        me.createdAt = ''
    }

    return { me, setMe, clearMe }
})
