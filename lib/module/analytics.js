import { NativeModules } from 'react-native';
const {
  RNUMengAnalytics
} = NativeModules;
const RNTUmengAnalytics = RNUMengAnalytics;
// 初始化时配置的渠道
export const CHANNEL = RNTUmengAnalytics.CHANNEL;
export const getDeviceInfo = () => {
  return RNTUmengAnalytics.getDeviceInfo();
};
export const signIn = (userId, provider) => {
  RNTUmengAnalytics.signIn(userId, provider);
};
export const signOut = () => {
  RNTUmengAnalytics.signOut();
}; // enterPage 和 leavePage 必须对称调用
// 在这里做一层保证

let currentPage;
export const enterPage = pageName => {
  if (!currentPage) {
    RNTUmengAnalytics.enterPage(pageName);
    currentPage = pageName;
  }
};
export const leavePage = pageName => {
  if (currentPage === pageName) {
    RNTUmengAnalytics.leavePage(pageName);
    currentPage = undefined;
  }
}; // 友盟文档规定：id，ts，du 是保留字段，不能作为 event id 及 key 的名称。

const bannedKeys = {
  id: true,
  ts: true,
  du: true
};

const checkEventId = eventId => {
  if (bannedKeys[eventId]) {
    throw new Error("[".concat(eventId, "] \u662F\u4FDD\u7559\u5B57\u6BB5\uFF0C\u4E0D\u80FD\u4F5C\u4E3A event id."));
  }
};

const checkEventDataKey = data => {
  for (let key in data) {
    if (bannedKeys[key]) {
      throw new Error("".concat(key, " \u662F\u4FDD\u7559\u5B57\u6BB5\uFF0C\u4E0D\u80FD\u4F5C\u4E3A event data \u7684 key."));
    }
  }
};

export const sendEvent = eventId => {
  checkEventId(eventId);
  RNTUmengAnalytics.sendEvent(eventId);
};
export const sendEventLabel = (eventId, label) => {
  checkEventId(eventId);
  RNTUmengAnalytics.sendEventLabel(eventId, label);
};
export const sendEventData = (eventId, data) => {
  checkEventId(eventId);
  checkEventDataKey(data);
  RNTUmengAnalytics.sendEventData(eventId, data);
};
export const sendEventCounter = (eventId, data, counter) => {
  checkEventId(eventId);
  checkEventDataKey(data);
  RNTUmengAnalytics.sendEventCounter(eventId, data, counter);
};
export const sendError = error => {
  // 安卓才有这个接口
  if (RNTUmengAnalytics.sendError) {
    RNTUmengAnalytics.sendError(error);
  }
};
//# sourceMappingURL=analytics.js.map