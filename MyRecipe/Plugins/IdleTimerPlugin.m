//
//  IdelTimerPlugin.m
//  MyRecipe
//
//  Created by KO on 13/02/03.
//  Copyright (c) 2013年 KO. All rights reserved.
//

#import "IdleTimerPlugin.h"

@implementation IdleTimerPlugin

- (void)setIdleTimer:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options {
    
    //get the callback id
    
    NSString* callbackId = [arguments pop];

    NSString* status = [arguments objectAtIndex:0];
    NSString* temp = [arguments objectAtIndex:1];
    CGFloat period = temp.floatValue;
    NSLog(@"setIdleTimer:%@", status);
    UIApplication* app = [UIApplication sharedApplication];

    if ([status isEqual:@"enabled"]) {
        app.idleTimerDisabled = NO;
    } else if ([status isEqualToString:@"disabled"]) {
        app.idleTimerDisabled = YES;
        [self performSelector:@selector(_enableIdleTimer) withObject:nil afterDelay: 60 * period];
    }
    
    NSString* message = (app.idleTimerDisabled ? @"disabled" : @"enabled");
    CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK 
                                                messageAsString:message];
    [self writeJavascript:[result toSuccessCallbackString:callbackId]];
}

- (void)_enableIdleTimer
{
    [NSObject cancelPreviousPerformRequestsWithTarget:self
                                             selector:@selector(enableIdleTimer) object:nil];
    
    [[UIApplication sharedApplication] setIdleTimerDisabled:NO];
    NSLog(@"enableIdleTimer auto");
}

@end
