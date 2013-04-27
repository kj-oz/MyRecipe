//
//  IdelTimerPlugin.h
//  MyRecipe
//
//  Created by KO on 13/02/03.
//  Copyright (c) 2013年 KO. All rights reserved.
//

#import <Cordova/CDVPlugin.h>

@interface IdleTimerPlugin : CDVPlugin

- (void) setIdleTimer:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

@end
