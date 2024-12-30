import MessageRepository from '@/respositories/message'

export async function getMessage(lastMessageTime: number, channel: string) {
    return await MessageRepository.getMessage(lastMessageTime, channel)
}
