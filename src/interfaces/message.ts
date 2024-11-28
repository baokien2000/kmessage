export interface IMessage {
  id: string
  content: string
  time: string
  isRead: boolean
  isMyMessage: boolean
}

export interface IUserMessage {
  id: number
  name: string
  avatar: string
  messages: IMessage[]
  lastMessage?: IMessage
  isActive: boolean
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
