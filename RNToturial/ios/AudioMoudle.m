//
//  AudioMoudle.m
//  RNToturial
//
//  Created by Dean on 2018/8/20.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "AudioMoudle.h"

@implementation AudioMoudle

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(mergeAudio:(NSString *)name details:(NSDictionary *)details
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *phone = [RCTConvert NSString:details[@"phone"]];
  NSString *code = [RCTConvert NSString:details[@"code"]];
  
}

@end
