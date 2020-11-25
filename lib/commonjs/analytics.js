"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendError = exports.sendEventCounter = exports.sendEventData = exports.sendEventLabel = exports.sendEvent = exports.leavePage = exports.enterPage = exports.signOut = exports.signIn = exports.getDeviceInfo = exports.CHANNEL = void 0;

var _reactNative = require("react-native");

const {
  RNUMengAnalytics
} = _reactNative.NativeModules;
const RNTUmengAnalytics = RNUMengAnalytics;
// 初始化时配置的渠道
const CHANNEL = RNTUmengAnalytics.CHANNEL;
exports.CHANNEL = CHANNEL;

const getDeviceInfo = () => {
  return RNTUmengAnalytics.getDeviceInfo();
};

exports.getDeviceInfo = getDeviceInfo;

const signIn = (userId, provider) => {
  RNTUmengAnalytics.signIn(userId, provider);
};

exports.signIn = signIn;

const signOut = () => {
  RNTUmengAnalytics.signOut();
}; // enterPage 和 leavePage 必须对称调用
// 在这里做一层保证


exports.signOut = signOut;
let currentPage;

const enterPage = pageName => {
  if (!currentPage) {
    RNTUmengAnalytics.enterPage(pageName);
    currentPage = pageName;
  }
};

exports.enterPage = enterPage;

const leavePage = pageName => {
  if (currentPage === pageName) {
    RNTUmengAnalytics.leavePage(pageName);
    currentPage = undefined;
  }
}; // 友盟文档规定：id，ts，du 是保留字段，不能作为 event id 及 key 的名称。


exports.leavePage = leavePage;
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

const sendEvent = eventId => {
  checkEventId(eventId);
  RNTUmengAnalytics.sendEvent(eventId);
};

exports.sendEvent = sendEvent;

const sendEventLabel = (eventId, label) => {
  checkEventId(eventId);
  RNTUmengAnalytics.sendEventLabel(eventId, label);
};

exports.sendEventLabel = sendEventLabel;

const sendEventData = (eventId, data) => {
  checkEventId(eventId);
  checkEventDataKey(data);
  RNTUmengAnalytics.sendEventData(eventId, data);
};

exports.sendEventData = sendEventData;

const sendEventCounter = (eventId, data, counter) => {
  checkEventId(eventId);
  checkEventDataKey(data);
  RNTUmengAnalytics.sendEventCounter(eventId, data, counter);
};

exports.sendEventCounter = sendEventCounter;

const sendError = error => {
  // 安卓才有这个接口
  if (RNTUmengAnalytics.sendError) {
    RNTUmengAnalytics.sendError(error);
  }
};

exports.sendError = sendError;
//# sourceMappingURL=analytics.js.map