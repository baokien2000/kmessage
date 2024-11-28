export type IFormTab =
    | 'sign-in'
    | 'sign-up'
    | 'forgot-password'
    | 'reset'
    | 'create-account'
    | 'sign-up-otp'

export interface IMe {
    _id: number | null
    name: string
    email: string
    updatedAt: string
    createdAt: string
}
