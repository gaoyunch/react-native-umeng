
import { NativeModules } from 'react-native'

const { RNUMengAnalytics } = NativeModules;

const RNTUmengAnalytics = RNUMengAnalytics;

export type DeviceInfo = {
    deviceId: string
    mac?: string
}

// 初始化时配置的渠道
export const CHANNEL: string = RNTUmengAnalytics.CHANNEL

export const getDeviceInfo = (): Promise<DeviceInfo> => {
    return RNTUmengAnalytics.getDeviceInfo()
}

export const signIn = (userId: string, provider: string) => {
    RNTUmengAnalytics.signIn(userId, provider)
}

export const signOut = () => {
    RNTUmengAnalytics.signOut()
}

// enterPage 和 leavePage 必须对称调用
// 在这里做一层保证
let currentPage: string | undefined
export const enterPage = (pageName: string) => {
    if (!currentPage) {
        RNTUmengAnalytics.enterPage(pageName)
        currentPage = pageName
    }
}

export const leavePage = (pageName: string) => {
    if (currentPage === pageName) {
        RNTUmengAnalytics.leavePage(pageName)
        currentPage = undefined
    }
}

// 友盟文档规定：id，ts，du 是保留字段，不能作为 event id 及 key 的名称。
const bannedKeys: { [key: string]: any } = {
    id: true,
    ts: true,
    du: true,
}

const checkEventId = (eventId: string) => {
    if (bannedKeys[eventId]) {
        throw new Error(`[${eventId}] 是保留字段，不能作为 event id.`)
    }
}
const checkEventDataKey = (data: object) => {
    for (let key in data) {
        if (bannedKeys[key]) {
            throw new Error(`${key} 是保留字段，不能作为 event data 的 key.`)
        }
    }
}

export const sendEvent = (eventId: string) => {
    checkEventId(eventId)
    RNTUmengAnalytics.sendEvent(eventId)
}

export const sendEventLabel = (eventId: string, label: string) => {
    checkEventId(eventId)
    RNTUmengAnalytics.sendEventLabel(eventId, label)
}

export const sendEventData = (eventId: string, data: object) => {
    checkEventId(eventId)
    checkEventDataKey(data)
    RNTUmengAnalytics.sendEventData(eventId, data)
}

export const sendEventCounter = (eventId: string, data: object, counter: number) => {
    checkEventId(eventId)
    checkEventDataKey(data)
    RNTUmengAnalytics.sendEventCounter(eventId, data, counter)
}

export const sendError = (error: string) => {
    // 安卓才有这个接口
    if (RNTUmengAnalytics.sendError) {
        RNTUmengAnalytics.sendError(error)
    }
}
