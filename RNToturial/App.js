/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import Item from './src/components/Item';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <ScrollView>
			<StatusBar 
				hidden={false} 
				backgroundColor={ styles.statusBar.backgroundColor }
				barStyle='dark-content' />

			{/* style 介绍 */}
			<View style={[
				{
					marginTop: 20,
					height: 100,
					backgroundColor: 'black',
				},
				styles.bk,
			]} />

			<View style={{
				height: 10,
			}} />

			{/* flexbox 介绍 */}
        	<View style={{
				height: 200,
				flexDirection: 'row',
				justifyContent: 'space-around',
				alignItems: 'center',
				backgroundColor: 'green',
			}}>
				<View style={{
					// flex: 1,
					width: 100,
					height: 50,
					backgroundColor: 'yellow', 
				}} />

				<View style={{
					// flex: 1,
					width: 100,
					height: 50,
					backgroundColor: 'gray', 
				}} />

				<View style={{
					// flex: 1,
					width: 100,
					height: 50,
					backgroundColor: 'pink', 
				}} />
			</View>

			<View style={{
				height: 10,
			}} />

			{/* 自定义组件 */}
			<Item />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	statusBar: {
		backgroundColor: '#ffffff',
	},

	bk: {
		backgroundColor: 'red',
	}
});
