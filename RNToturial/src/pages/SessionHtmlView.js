/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import HTML from 'react-native-render-html';

class SessionHtmlView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const htmlContent = `<p style="line-height: 20;"><strong><span style="font-size: 14px; color: rgb(0, 0, 0);">邀请分享</span></strong></p><p style="line-height: 20;"><span style="font-size: 14px; color: rgb(0, 0, 0);">每邀请一位好友注册“笃学问道”的国学平台，你就立赢一张6-20元优惠券 和1天会员时长。&nbsp;邀请越多，赢得越多。</span></p><p style="line-height: 20;"><span style="font-size: 14px;">1. 进入“我的”-“分享就赚”。</span></p><p style="line-height: 20;"><span style="font-size: 14px; color: rgb(0, 0, 0);">2. 分享给好友。</span></p><p style="line-height: 20;"><span style="font-size: 14px; color: rgb(0, 0, 0);">3. 好友手机号领取新人注册优惠券。</span></p><p style="line-height: 20;"><span style="font-size: 14px; color: rgb(0, 0, 0);">4.好友注册登录“笃学问道APP”。</span></p><p style="line-height: 20;"><span style="font-size: 14px; color: rgb(0, 0, 0);">5. 坐收“笃学问道”国学平台付费会员时长和优惠券。</span></p><p style="line-height: 20;"><span style="font-size: 14px; color: rgb(0, 0, 0);">&nbsp;</span></p><p style="line-height: 20;"><strong><span style="font-size: 14px;">会员专享</span></strong><br/></p><p style="line-height: 20;"><span style="font-size: 14px; color: rgb(0, 0, 0);">1.免费畅听畅看畅享精品专栏。</span></p><p style="line-height: 20;"><span style="font-size: 14px; color: rgb(0, 0, 0);">2.免费欣赏诗词曲文赋专业大家的赏析。</span></p><p style="line-height: 20;"><span style="font-size: 14px; color: rgb(0, 0, 0);">3.会员专享优惠购（电子书，付费专栏）。</span></p><p style="line-height: 20;"><span style="font-size: 14px; color: rgb(0, 0, 0);">4.会员专享优惠券。</span></p><p style="line-height: 20;"><span style="font-size: 14px; color: rgb(0, 0, 0);">&nbsp;</span></p><p style="line-height: 20;"><strong><span style="font-size: 14px;">活动规则</span></strong></p><p style="line-height: 20;"><span style="font-size: 14px; color: rgb(0, 0, 0);">1.将当前分享页面分享给您未下载过笃学问道APP的好友，好友通过您分享的页面链接进入新人领取优惠券页面，领取成功后到应用商店下载最新版笃学问道APP，并进行手机号登录后，您即可获得1天付费会员时长和一张6-20元优惠券。</span></p><p style="line-height: 20;"><span style="font-size: 14px; color: rgb(0, 0, 0);">2.优惠券将于好友下载APP并完成手机登录后十分钟内发放。</span></p><p style="line-height: 20;"><span style="font-size: 14px; color: rgb(0, 0, 0);">3.优惠券适用于全平台商品。</span></p><p style="line-height: 20;"><span style="font-size: 14px; color: rgb(0, 0, 0);">4.笃学问道有权对本活动时间和规则做出调整，请注意活动页面说明。<br/></span></p><p style="line-height: 20;"><span style="font-size: 14px; color: rgb(0, 0, 0);">5.笃学问道在法律允许的范围内享有本活动的最终解释权。</span></p><p><br/></p>`;        const htmlContent2 = `<p style="line-height: 20;"></p>`
        return (
            <ScrollView>
                <View style={{
                    marginTop: 100,
                }}>
                    <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />
                </View>
            </ScrollView>
        );
    }
}

export default SessionHtmlView;

const styles = StyleSheet.create({
    a: {
      fontWeight: '300',
      color: '#FF3366', // make links coloured pink
    },
});