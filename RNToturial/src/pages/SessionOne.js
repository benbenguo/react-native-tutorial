/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Item from '../components/Item';

class SessionOne extends Component {
    constructor(props) {
        super(props);
    }

    _onScrollEndDrag = e => {
        console.log(e.nativeEvent.velocity.y);
        // let velocity = e.nativeEvent.velocity.y;
        // if(velocity == 0 || (isAndroid() && Math.abs(Math.round(velocity)) <= 2)) {
        //   this.props.animation.handleIntermediateState(this.scrollToOffset);
        // }
    };

    render() {
        return (
            <ScrollView 
                onScrollEndDrag={ this._onScrollEndDrag }
            >
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
                <View style={{
                    height: 500,
                    backgroundColor: 'yellow',
                }}></View>
            </ScrollView>
        );
    }
}

export default SessionOne;

const styles = StyleSheet.create({
	statusBar: {
		backgroundColor: '#ffffff',
	},

	bk: {
		backgroundColor: 'red',
	}
});