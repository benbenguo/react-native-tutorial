/**
 * @flow
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StackNavigator,
    TabNavigator,
    TabBarBottom,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import MainPage from '../pages/main/index';
import StudyPage from '../pages/study/StudyPage';
import ActivityPage from '../pages/activity/ActivityPage';
import AccountPage from '../pages/account/AccountPage';

export const TabAppNavigator = TabNavigator(
    {
        Main: {
            screen:  MainPage,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '推荐',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon name="ios-disc-outline" size={30} color={tintColor} />
                )
            })
        },
        Study: {
            screen: StudyPage,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '学习',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon name="ios-musical-notes-outline" size={30} color={tintColor} />
                )
            })
        },
        Activity: {
            screen: ActivityPage,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '活动',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon name="ios-contacts-outline" size={30} color={tintColor} />
                )
            })
        },
        Account: {
            screen: AccountPage,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon name="ios-person-outline" size={30} color={tintColor} />
                )
            }
        }
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        initialRouteName: 'Main',
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#ffffff',
            inactiveTintColor: '#cccccc',
            style: {
                backgroundColor: '#333333'
            }
        }
    }
);

export const AppNavigator = StackNavigator(
    {
        Root: { screen: TabAppNavigator},
        // Detail: { screen: DetailScene},
        // Player: { screen: PlayerScene},
        // MvDetail: {screen: MvDetail},
        // UserDetail: {screen: UserDetail},
        // DjDetail: {screen: DjDetail},
    }, {
        // initialRouteName: 'Root', // 默认显示界面
        mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
        // headerMode: 'none',
});