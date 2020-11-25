import { NativeEventEmitter, NativeModules } from 'react-native'

const { RNUMengPush } = NativeModules

const eventEmitter = new NativeEventEmitter(RNUMengPush)

export type ALIAS_TYPE = {
    SINA: string
    TENCENT: string
    QQ: string
    WEIXIN: string
    BAIDU: string
    RENREN: string
    KAIXIN: string
    DOUBAN: string
    FACEBOOK: string
    TWITTER: string
    [key: string]: string
}

export const ALIAS_TYPE: ALIAS_TYPE = {
    SINA: RNUMengPush.ALIAS_TYPE_SINA,
    TENCENT: RNUMengPush.ALIAS_TYPE_TENCENT,
    QQ: RNUMengPush.ALIAS_TYPE_QQ,
    WEIXIN: RNUMengPush.ALIAS_TYPE_WEIXIN,
    BAIDU: RNUMengPush.ALIAS_TYPE_BAIDU,
    RENREN: RNUMengPush.ALIAS_TYPE_RENREN,
    KAIXIN: RNUMengPush.ALIAS_TYPE_KAIXIN,
    DOUBAN: RNUMengPush.ALIAS_TYPE_DOUBAN,
    FACEBOOK: RNUMengPush.ALIAS_TYPE_FACEBOOK,
    TWITTER: RNUMengPush.ALIAS_TYPE_TWITTER,
}

export type NOTIFICATION_PLAY = {
    SERVER: number
    SDK_ENABLE: number
    SDK_DISABLE: number
}

export const NOTIFICATION_PLAY: NOTIFICATION_PLAY = {
    SERVER: RNUMengPush.NOTIFICATION_PLAY_SERVER,
    SDK_ENABLE: RNUMengPush.NOTIFICATION_PLAY_SDK_ENABLE,
    SDK_DISABLE: RNUMengPush.NOTIFICATION_PLAY_SDK_DISABLE,
}

export const start = () => {
    RNUMengPush.start()
}
/** 获取服务器端的所有标签 */
export const getTags = (): Promise<any> => {
    return RNUMengPush.getTags()
}
/**
 * 添加标签 示例：将“标签1”、“标签2”绑定至该设备
 * @param tags 
 */
export const addTags = (tags: string[]): Promise<any> => {
    return RNUMengPush.addTags(tags)
}
/** 删除标签,将之前添加的标签中的一个或多个删除 */
export const removeTags = (tags: string[]): Promise<any> => {
    return RNUMengPush.removeTags(tags)
}
/**
 * 别名绑定，将某一类型的别名ID绑定至某设备，老的绑定设备信息被覆盖，别名ID和deviceToken是一对一的映射关系
 * @param alias 
 * @param type 
 */
export const setAlias = (alias: string, type: string): Promise<any> => {
    return RNUMengPush.setAlias(alias, type)
}
/**
 * 别名增加，将某一类型的别名ID绑定至某设备，老的绑定设备信息还在，别名ID和device_token是一对多的映射关系
 * @param alias 
 * @param type 
 */
export const addAlias = (alias: string, type: string): Promise<any> => {
    return RNUMengPush.addAlias(alias, type)
}
/**
 * 移除别名ID
 * @param alias 
 * @param type 
 */
export const removeAlias = (alias: string, type: string): Promise<any> => {
    return RNUMengPush.removeAlias(alias, type)
}

export const setAdvanced = (options: any) => {
    RNUMengPush.setAdvanced(options)
}

export type PushListenerType = "register" | "remoteNotification" | "message"

/**
 * 添加监听
 * @param type 
 * @param listener 
 */
export const addListener = (type: PushListenerType, listener: (...args: any[]) => void) => {
    return eventEmitter.addListener(type, listener)
}
