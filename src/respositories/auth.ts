import axios from 'axios'
import api, { baseURL } from '.'

class AuthRepository {
    static signIn = async (email: string, password: string) => {
        const payload = { email, password }
        const url = `${baseURL}/auth/signIn`
        const controller = new AbortController()

        try {
            const response = await axios({
                url: url,
                method: 'post',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: payload,
                signal: controller.signal
            })
            // get cookie, but it still undefined

            return response
        } catch (error: any) {
            return error.response
        }
    }
    static signOut = async () => {
        const url = `${baseURL}/auth/signOut`
        const controller = new AbortController()

        try {
            const response = await axios({
                url: url,
                method: 'post',
                withCredentials: true,
                signal: controller.signal
            })

            return response
        } catch (error: any) {
            return error.response
        }
    }

    static refreshToken = async () => {
        const url = `${baseURL}/auth/refreshToken`
        const controller = new AbortController()

        try {
            const response = await axios({
                url: url,
                method: 'post',
                withCredentials: true,
                signal: controller.signal
            })

            return response
        } catch (error: any) {
            return error.response
        }
    }
    // static signUp = async (email: string, password: string) => {
    //     const payload = { email, password }
    //     const url = `${baseURL}/users/create`
    //     const controller = new AbortController()

    //     try {
    //         const response = await axios({
    //             url: url,
    //             method: 'post',
    //             data: payload,
    //             withCredentials: true,
    //             signal: controller.signal
    //         })

    //         return response
    //     } catch (error: any) {
    //         return error.response
    //     }
    // }
    // static resetPassword = async (email: string, password: string, token: string) => {
    //     const payload = { email, password, token }
    //     const url = `${baseURL}/users/resetPassword`
    //     const controller = new AbortController()

    //     try {
    //         const response = await axios({
    //             url: url,
    //             method: 'post',
    //             data: payload,
    //             withCredentials: true,
    //             signal: controller.signal
    //         })

    //         return response
    //     } catch (error: any) {
    //         return error.response
    //     }
    // }
    // static changePassword = async (user: any, oldPassword: string, newPassword: string) => {
    //     const url = `${baseURL}/users/changePassword`
    //     const payload = { userId: user._id, email: user.email, oldPassword, newPassword }
    //     const controller = new AbortController()
    //     try {
    //         const response = await axios({
    //             url: url,
    //             method: 'put',
    //             headers: {
    //                 Authorization: `Bearer ${user.accessToken}`
    //             },
    //             data: payload,
    //             withCredentials: true,
    //             signal: controller.signal
    //         })

    //         return response
    //     } catch (error: any) {
    //         return error.response
    //     }
    // }

    static sendOTP = async (email: string) => {
        const payload = { email }
        const url = `${baseURL}/otp/sendOTP`
        console.log('url', url)
        const controller = new AbortController()

        try {
            const response = await axios({
                url: url,
                method: 'post',
                data: payload,
                withCredentials: true,
                signal: controller.signal
            })

            return response
        } catch (error: any) {
            return error.response
        }
    }
    static verifyOTP = async (email: string, otp: string) => {
        const url = `${baseURL}/otp/verifyOTP`
        const payload = { email, otp }
        const controller = new AbortController()
        try {
            const response = await axios({
                url: url,
                method: 'post',
                data: payload,
                withCredentials: true,
                signal: controller.signal
            })
            return response
        } catch (error: any) {
            return error.response
        }
    }

    static createUser = async (email: string, password: string) => {
        const payload = { email, password }
        const url = `${baseURL}/users/create`
        const controller = new AbortController()
        try {
            const response = await axios({
                url: url,
                method: 'post',
                data: payload,
                withCredentials: true,
                signal: controller.signal
            })
            return response
        } catch (error: any) {
            return error.response
        }
    }

    static getMe = async (accessToken: string) => {
        const controller = new AbortController()
        try {
            const response = await api({
                url: '/users/me',
                method: 'get',
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                signal: controller.signal
            })
            return response
        } catch (error: any) {
            return error.response
        }
    }

    static resetPassword = async (email: string, password: string) => {
        const payload = { email, password }
        const url = `${baseURL}/users/resetPassword`
        const controller = new AbortController()
        try {
            const response = await axios({
                url: url,
                method: 'put',
                data: payload,
                withCredentials: true,
                signal: controller.signal
            })
            return response
        } catch (error: any) {
            return error.response
        }
    }
    // static verifyCaptcha = async (token: string) => {
    //     const url = `${baseURL}/users/verifyCaptcha`
    //     const controller = new AbortController()
    //     try {
    //         const response = await axios({
    //             url: url,
    //             method: 'post',
    //             data: { token },
    //             signal: controller.signal
    //         })

    //         return response
    //     } catch (error: any) {
    //         return error.response
    //     }
    // }

    // static verifyToken = async (accessToken: string, email: string) => {
    //     const url = `${baseURL}/users/verifyToken`
    //     const controller = new AbortController()
    //     try {
    //         const response = await axios({
    //             url: url,
    //             method: 'get',
    //             // withCredentials: true,
    //             params: { email },
    //             headers: {
    //                 Authorization: `Bearer ${accessToken}`,
    //                 'Content-Type': 'application/json'
    //             },
    //             signal: controller.signal
    //         })

    //         return response
    //     } catch (error: any) {
    //         return error.response
    //     }
    // }
}

export default AuthRepository
