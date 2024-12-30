import type { IUser } from './auth'

export interface IMessage {
    _id: string
    content?: string
    attachment?: string
    createdAt: string
    channel: string
    user: IUser
}

export interface IChannel {
    _id: string
    name: string
    avatar: string
    lastMessage?: IMessage
    members: any[]
    unread: string[]
    isActive: boolean
    createdAt: string
    updatedAt: string
}

export interface ISearchUser {
    id: number
    name: string
    avatar: string
}

export interface ISearchUserMessage {
    id: number
    name: string
    avatar: string
    message: {
        id: string
        content: string
        time: string
        isMyMessage: boolean
    }
    resultCount: number
}

export interface IMessageGroup {
    id: number
    avatar: string
    isMyMessage: boolean
    messages: IMessage[]
    time: string
}

export interface IMessageList {
    messagesGroup: IMessageGroup[]
    totalMessages: number
    lastMessage: IMessage
}
