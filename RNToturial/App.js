/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
} from 'react-native';
import SessionOne from './src/pages/SessionOne';
import SessionTwo from './src/pages/SessionTwo';
import DetailList from './src/pages/DetailList';
import SessionHtmlView from './src/pages/SessionHtmlView';
import AnimateList from './src/pages/AnimateList';
import Opacity from './src/pages/animate/Opacity';
import Interpolate from './src/pages/animate/Interpolate';
// import ExpectDetail from './src/pages/animate/ExpectDetail';
import ScanScreen from './src/pages/ScanScreen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      	// <SessionOne />
        // <SessionTwo />
        // <DetailList />
        // <SessionHtmlView />
        

        // Animated
        // <Opacity />
        // <Interpolate />
        // <AnimateList />
        // <ExpectDetail />
        <ScanScreen />
    );
  }
}