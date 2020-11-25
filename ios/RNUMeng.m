#import "RNUMeng.h"

#import <UMCommon/UMConfigure.h>
#import <UMCommon/MobClick.h>

@implementation RNUMeng

static NSString *CHANNEL = @"";

+ (void)init:(NSString *)appKey channel:(NSString *)channel debug:(BOOL)debug {
    CHANNEL = channel;
    [UMConfigure initWithAppkey:appKey channel:channel];
    [UMConfigure setLogEnabled:debug];
}

@end
