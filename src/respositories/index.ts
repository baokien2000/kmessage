export const baseURL = import.meta.env.VITE_API_URL

import axios from 'axios'

// Tạo một instance của Axios
const api = axios.create({
    baseURL: baseURL, // Đường dẫn cơ bản cho mọi API
    withCredentials: true, // Cho phép gửi cookie HttpOnly
    headers: {
        'Content-Type': 'application/json'
    }
})

// Thêm interceptor xử lý lỗi 401
api.interceptors.response.use(
    (response) => response, // Xử lý thành công
    async (error) => {
        if (error.response.status === 401 && !error.config._retry) {
            error.config._retry = true // Đánh dấu request đã retry
            try {
                // Gọi API làm mới token
                const { data } = await api.post('/auth/refresh-token')
                // Gắn token mới vào header
                api.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`
                error.config.headers['Authorization'] = `Bearer ${data.accessToken}`
                return api(error.config) // Gửi lại request
            } catch (refreshError) {
                console.error('Failed to refresh token:', refreshError)
                // Chuyển hướng đến trang login nếu refresh token hết hạn
                window.location.href = '/login'
            }
        }
        return Promise.reject(error) // Trả lỗi nếu không xử lý được
    }
)

export default api
