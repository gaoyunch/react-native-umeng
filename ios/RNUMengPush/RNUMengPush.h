#import <React/RCTEventEmitter.h>
#import <React/RCTBridgeModule.h>
#import <UserNotifications/UserNotifications.h>

@interface RNUMengPush : RCTEventEmitter <RCTBridgeModule, UNUserNotificationCenterDelegate>

+ (void)push:(NSDictionary *)launchOptions;

+ (void)didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken;
         
+ (void)didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler;

@end
