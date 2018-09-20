import React, { Component } from 'react';
import {
  View,
  Animated,
  Easing,
  TouchableOpacity,
  Text,
} from 'react-native';

class Opacity extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fadeOutOpacity: new Animated.Value(1),
        };

        this.fadeOutAnimated = Animated.timing(
            this.state.fadeOutOpacity,
            {
                toValue: 0,
                duration: 1000,
                easing: Easing.bezier(0.15, 0.73, 0.37, 1.2),
                delay: 0,
                useNativeDriver: true,
            }
        );
    }

    _startAnimated() {
        this.fadeOutAnimated.start(() => this.state.fadeOutOpacity.setValue(1));
    }

    render() {
        console.log('object')
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Animated.View style={{
                    backgroundColor: 'red',
                    width: 200,
                    height: 300,
                    opacity: this.state.fadeOutOpacity,
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

export default Opacity;