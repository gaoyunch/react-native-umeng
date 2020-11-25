"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addListener = exports.setAdvanced = exports.removeAlias = exports.addAlias = exports.setAlias = exports.removeTags = exports.addTags = exports.getTags = exports.start = exports.NOTIFICATION_PLAY = exports.ALIAS_TYPE = void 0;

var _reactNative = require("react-native");

const {
  RNUMengPush
} = _reactNative.NativeModules;
const eventEmitter = new _reactNative.NativeEventEmitter(RNUMengPush);
const ALIAS_TYPE = {
  SINA: RNUMengPush.ALIAS_TYPE_SINA,
  TENCENT: RNUMengPush.ALIAS_TYPE_TENCENT,
  QQ: RNUMengPush.ALIAS_TYPE_QQ,
  WEIXIN: RNUMengPush.ALIAS_TYPE_WEIXIN,
  BAIDU: RNUMengPush.ALIAS_TYPE_BAIDU,
  RENREN: RNUMengPush.ALIAS_TYPE_RENREN,
  KAIXIN: RNUMengPush.ALIAS_TYPE_KAIXIN,
  DOUBAN: RNUMengPush.ALIAS_TYPE_DOUBAN,
  FACEBOOK: RNUMengPush.ALIAS_TYPE_FACEBOOK,
  TWITTER: RNUMengPush.ALIAS_TYPE_TWITTER
};
exports.ALIAS_TYPE = ALIAS_TYPE;
const NOTIFICATION_PLAY = {
  SERVER: RNUMengPush.NOTIFICATION_PLAY_SERVER,
  SDK_ENABLE: RNUMengPush.NOTIFICATION_PLAY_SDK_ENABLE,
  SDK_DISABLE: RNUMengPush.NOTIFICATION_PLAY_SDK_DISABLE
};
exports.NOTIFICATION_PLAY = NOTIFICATION_PLAY;

const start = () => {
  RNUMengPush.start();
};
/** 获取服务器端的所有标签 */


exports.start = start;

const getTags = () => {
  return RNUMengPush.getTags();
};
/**
 * 添加标签 示例：将“标签1”、“标签2”绑定至该设备
 * @param tags 
 */


exports.getTags = getTags;

const addTags = tags => {
  return RNUMengPush.addTags(tags);
};
/** 删除标签,将之前添加的标签中的一个或多个删除 */


exports.addTags = addTags;

const removeTags = tags => {
  return RNUMengPush.removeTags(tags);
};
/**
 * 别名绑定，将某一类型的别名ID绑定至某设备，老的绑定设备信息被覆盖，别名ID和deviceToken是一对一的映射关系
 * @param alias 
 * @param type 
 */


exports.removeTags = removeTags;

const setAlias = (alias, type) => {
  return RNUMengPush.setAlias(alias, type);
};
/**
 * 别名增加，将某一类型的别名ID绑定至某设备，老的绑定设备信息还在，别名ID和device_token是一对多的映射关系
 * @param alias 
 * @param type 
 */


exports.setAlias = setAlias;

const addAlias = (alias, type) => {
  return RNUMengPush.addAlias(alias, type);
};
/**
 * 移除别名ID
 * @param alias 
 * @param type 
 */


exports.addAlias = addAlias;

const removeAlias = (alias, type) => {
  return RNUMengPush.removeAlias(alias, type);
};

exports.removeAlias = removeAlias;

const setAdvanced = options => {
  RNUMengPush.setAdvanced(options);
};

exports.setAdvanced = setAdvanced;

/**
 * 添加监听
 * @param type 
 * @param listener 
 */
const addListener = (type, listener) => {
  return eventEmitter.addListener(type, listener);
};

exports.addListener = addListener;
//# sourceMappingURL=push.js.map