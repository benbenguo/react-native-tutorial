import React, { Component } from 'react';
import {
  View,
  Animated,
  Easing,
  TouchableOpacity,
  Text,
} from 'react-native';

class Interpolate extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            animatedValue: new Animated.Value(0),
         };

        this.rotateAnimated = Animated.timing(
            this.state.animatedValue,
            {
                toValue: 1,
                duration: 3000,
                delay: 0,
                easing: Easing.in,
                useNativeDriver: true,
            }
        );
    }

    _startAnimated() {
        this.state.animatedValue.setValue(0);
        this.rotateAnimated.start(() => this._startAnimated());
    }

    render() {
        const rotateZ = this.state.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });

        const opacity = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0],
        });

        const rotateX = this.state.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });

        const textSize = this.state.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 3],
        });

        const translateX = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 100, 0],
        });

        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Animated.View style={{
                    marginTop: 10,
                    width: 100,
                    height: 100,
                    backgroundColor: 'red',
                    transform: [
                        {
                            rotate: rotateZ,
                        }
                    ]
                }} />

                <Animated.View
                    style={{
                        marginTop: 10,
                        width: 100,
                        height: 100,
                        opacity: opacity,
                        backgroundColor: 'red',
                }} />

                <Animated.Text
                    style={{
                        marginTop: 10,
                        width:100,
                        fontSize: 18,
                        color: 'white',
                        backgroundColor:'red',
                        transform: [
                            {
                                rotateX: rotateX,
                            },
                        ],
                    }}
                >
                    窗外风好大，我没有穿褂。
                </Animated.Text>

                <Animated.Text
                    style={{
                        marginTop: 10,
                        height: 100,
                        lineHeight: 100,
                        fontSize: 18,
                        color: 'red',
                        transform: [
                            {
                                scale: textSize,
                            },
                        ],
                    }}
                >
                    IAMCJ嘿嘿嘿
                </Animated.Text>

                <Animated.View
                    style={{
                        marginTop: 10,
                        width: 100,
                        height: 100,
                        backgroundColor: 'red',
                        transform: [
                            {
                                translateX: translateX,
                            },
                        ],
                }} />

                <TouchableOpacity style={{
                    width: 200,
                    height: 100,
                }} onPress={ this._startAnimated.bind(this) }>
                    <Text style={{
                        width: 200,
                        height: 100,
                        textAlign: 'center',
                        lineHeight: 100,
                        fontSize: 30,
                    }}>Start</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Interpolate;
