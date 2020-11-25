package com.reactnativeumeng

import android.app.Application
import android.os.Bundle
import com.umeng.commonsdk.UMConfigure

class RNUmengModule() {

    companion object {
        var channel = ""
        // 初始化友盟
        @JvmStatic
        fun init(app: Application, metaData: Bundle, debug: Boolean) {
            val appKey = metaData.getString("UMENG_APP_KEY", "").trim()
            val pushSecret = metaData.getString("UMENG_PUSH_SECRET", "").trim()
            channel = metaData.getString("UMENG_CHANNEL", "").trim()

            UMConfigure.setLogEnabled(debug)
            UMConfigure.init(app, appKey, channel, UMConfigure.DEVICE_TYPE_PHONE, pushSecret)
        }
    }

}
