export declare type ALIAS_TYPE = {
    SINA: string;
    TENCENT: string;
    QQ: string;
    WEIXIN: string;
    BAIDU: string;
    RENREN: string;
    KAIXIN: string;
    DOUBAN: string;
    FACEBOOK: string;
    TWITTER: string;
    [key: string]: string;
};
export declare const ALIAS_TYPE: ALIAS_TYPE;
export declare type NOTIFICATION_PLAY = {
    SERVER: number;
    SDK_ENABLE: number;
    SDK_DISABLE: number;
};
export declare const NOTIFICATION_PLAY: NOTIFICATION_PLAY;
export declare const start: () => void;
/** 获取服务器端的所有标签 */
export declare const getTags: () => Promise<any>;
/**
 * 添加标签 示例：将“标签1”、“标签2”绑定至该设备
 * @param tags
 */
export declare const addTags: (tags: string[]) => Promise<any>;
/** 删除标签,将之前添加的标签中的一个或多个删除 */
export declare const removeTags: (tags: string[]) => Promise<any>;
/**
 * 别名绑定，将某一类型的别名ID绑定至某设备，老的绑定设备信息被覆盖，别名ID和deviceToken是一对一的映射关系
 * @param alias
 * @param type
 */
export declare const setAlias: (alias: string, type: string) => Promise<any>;
/**
 * 别名增加，将某一类型的别名ID绑定至某设备，老的绑定设备信息还在，别名ID和device_token是一对多的映射关系
 * @param alias
 * @param type
 */
export declare const addAlias: (alias: string, type: string) => Promise<any>;
/**
 * 移除别名ID
 * @param alias
 * @param type
 */
export declare const removeAlias: (alias: string, type: string) => Promise<any>;
export declare const setAdvanced: (options: any) => void;
export declare type PushListenerType = "register" | "remoteNotification" | "message";
/**
 * 添加监听
 * @param type
 * @param listener
 */
export declare const addListener: (type: PushListenerType, listener: (...args: any[]) => void) => import("react-native").EmitterSubscription;
