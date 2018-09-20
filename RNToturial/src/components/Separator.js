/**
 * @flow
 */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import screen from '../utils/screen';
import color from '../utils/color';

class Separator extends Component {
    render() {
        return (
            <View style={[styles.line, this.props.style]} />
        )
    }
}

const styles = StyleSheet.create({
    line: {
        width: screen.width,
        height: 8,
        backgroundColor: color.separatorBackground
    }
});

export default Separator;