export declare type DeviceInfo = {
    deviceId: string;
    mac?: string;
};
export declare const CHANNEL: string;
export declare const getDeviceInfo: () => Promise<DeviceInfo>;
export declare const signIn: (userId: string, provider: string) => void;
export declare const signOut: () => void;
export declare const enterPage: (pageName: string) => void;
export declare const leavePage: (pageName: string) => void;
export declare const sendEvent: (eventId: string) => void;
export declare const sendEventLabel: (eventId: string, label: string) => void;
export declare const sendEventData: (eventId: string, data: object) => void;
export declare const sendEventCounter: (eventId: string, data: object, counter: number) => void;
export declare const sendError: (error: string) => void;
