//  Created by Artem Bogoslavskiy on 7/5/18.

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Animated,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { ifIphoneX, ifAndroid } from '../../utils';
import Separator from '../Separator';


export default class HeaderBar extends Component {
  render() {
    const { animation, renderTabBar } = this.props;

    const transformWrapper = animation.getTransformWrapper();
    // const transformSearchBar = animation.getTransformBar();
    const opacityBar = animation.getOpacityBar();
    // const opacityLocationInput = animation.getOpacityLocationInput();
    // const arrowMinimizeStyle = animation.getArrowMinimizeStyle();
   
    return (
        <Animated.View style={[
            styles.wrapper, 
            transformWrapper
        ]}>
            <Animated.View style={ opacityBar }>
                <View style={styles.searchContainer}>
                    <View style={{
                            height: 200,
                        }}>
                            <View style={{
                                flex: 1,
                                backgroundColor: 'red',
                            }}>
                            </View>
                    </View>
                    <Separator style={{  
                        backgroundColor: '#eeeeee',
                    }} />
                </View>
            </Animated.View>
            {renderTabBar()}
        </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: '#fff',
    },
    searchContainer: {
        zIndex: 99,
        backgroundColor: '#597fab',
        width: '100%',
        overflow: 'hidden',
        // paddingBottom: 10,
        // ...ifIphoneX({
        //     paddingTop: 40
        //     }, {
        //     paddingTop: 28
        // }),
    },
});