/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
           <View style={{
                marginLeft: 16,
                marginRight: 16,
                height: 80,
                justifyContent: 'center',
           }}>
                <View style={{
                    height: 48,
                    // width: '100%',
                    flexDirection: 'row',
                }}>
                    <ImageBackground style={{
                        height: 48,
                        width: 48,
                        borderRadius: 24,
                        overflow: 'hidden',
                        borderWidth: 0,
                    }} source={ require('../images/bk.jpg') }>
                        <Image style={{
                            height: 48,
                            width: 48,
                            borderRadius: 24,
                        }} source={ require('../images/bfan_index_listen_start.png') }/>
                    </ImageBackground>

                    <View style={{
                        flex: 1,
                        // width: width - 16 - 48,
                        height: 48,
                        marginLeft: 10,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'flex-end'
                        }}>
                            <Text 
                                numberOfLines={ 1 }
                                style={{
                                    fontSize: 16,
                                    lineHeight: 16,
                                    color: '#333333',
                                }}>
                                将敬酒
                            </Text>
                            <Text 
                                numberOfLines={ 1 }
                                style={{
                                    marginLeft: 16,
                                    fontSize: 12,
                                    color: '#bdbdbd',
                                }}>
                                { '唐·李白' }
                            </Text>
                        </View>

                        <View style={{
                            flex: 1,
                        }}></View>
                        
                        <Text style={{
                            fontSize: 14,
                            lineHeight: 14,
                            // maxWidth: 100,
                            color: '#757575',
                        }}
                            numberOfLines={ 1 }>
                            君不见黄河之水天上来，奔流到海不复回。君不见高堂明镜悲白发
                        </Text>
                    </View>
                </View>
           </View> 
        );
    }
}

export default Item;