export type IFormTab =
    | 'sign-in'
    | 'sign-up'
    | 'forgot-password'
    | 'reset'
    | 'create-account'
    | 'sign-up-otp'

export interface IUser {
    _id: string | null
    name: string
    email: string
    updatedAt: string
    createdAt: string
    avatar: string
}
