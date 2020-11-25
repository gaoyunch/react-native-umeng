package com.reactnativeumeng

import android.app.Application
import com.facebook.react.bridge.*
import com.umeng.analytics.MobclickAgent
import com.umeng.commonsdk.statistics.common.DeviceConfig

class RNUMengAnalyticsModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext), LifecycleEventListener {

    companion object {
        // 初始化友盟统计
        @JvmStatic
        fun analytics() {
            // 手动采集
            MobclickAgent.setPageCollectionMode(MobclickAgent.PageMode.MANUAL)
        }
    }

    init {
        reactContext.addLifecycleEventListener(this);
    }

    override fun getName(): String {
        return "RNUMengAnalytics"
    }

    override fun getConstants(): Map<String, Any>? {
        val constants: MutableMap<String, Any> = HashMap()
        constants["CHANNEL"] = RNUmengModule.channel
        return constants

    }

    @ReactMethod
    fun getDeviceInfo(promise: Promise) {
        val deviceId = DeviceConfig.getDeviceIdForGeneral(reactContext)
        val mac = DeviceConfig.getMac(reactContext)
        val map = Arguments.createMap()
        map.putString("deviceId", deviceId)
        map.putString("mac", mac)
        promise.resolve(map)
    }

    @ReactMethod
    fun signIn(name: String, provider: String?) {
        val hasProvider = provider?.isNotEmpty() ?: false
        if (hasProvider) {
            MobclickAgent.onProfileSignIn(provider, name)
        } else {
            MobclickAgent.onProfileSignIn(name)
        }
    }

    @ReactMethod
    fun signOut() {
        MobclickAgent.onProfileSignOff()
    }

    @ReactMethod
    fun enterPage(pageName: String) {
        MobclickAgent.onPageStart(pageName)
    }

    @ReactMethod
    fun leavePage(pageName: String) {
        MobclickAgent.onPageEnd(pageName)
    }

    @ReactMethod
    fun sendEvent(eventId: String) {
        MobclickAgent.onEvent(reactContext, eventId)
    }

    @ReactMethod
    fun sendEventLabel(eventId: String, label: String) {
        MobclickAgent.onEvent(reactContext, eventId, label)
    }

    @ReactMethod
    fun sendEventData(eventId: String, data: ReadableMap) {
        val map = data.toHashMap()
        MobclickAgent.onEventObject(reactContext, eventId, map)
    }

    @ReactMethod
    fun sendEventCounter(eventId: String, data: ReadableMap, counter: Int) {
        val map = HashMap<String, String>()
        for ((key, value) in data.toHashMap()) {
            map[key] = value as String
        }
        MobclickAgent.onEventValue(reactContext, eventId, map, counter)
    }

    @ReactMethod
    fun sendError(error: String) {
        MobclickAgent.reportError(reactContext, error)
    }

    override fun onHostResume() {
        MobclickAgent.onResume(reactContext.currentActivity)
    }

    override fun onHostPause() {
        MobclickAgent.onPause(reactContext.currentActivity)
    }

    override fun onHostDestroy() {

    }

}