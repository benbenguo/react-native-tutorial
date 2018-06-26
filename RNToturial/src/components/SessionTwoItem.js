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

class SessionTwoItem extends Component {
    constructor(props) {
        super(props);
    }

    // showred = this.props.showred;

    shouldComponentUpdate = (nextProps, nextState) => {
        const { showred } = this.props;
        if (nextProps.showred != showred) {
            return true;
        } 

        return false;
    };

    render() {
        console.log('SessionTwoItem');
        const { showred, } = this.props;

        return (
            <View style={{
                height: 20,
                backgroundColor: showred ? 'red' : '#ffffff',
                ...this.props.style,
            }}></View>
        );
    }
}

export default SessionTwoItem;