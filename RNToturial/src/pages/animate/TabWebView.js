//  Created by Artem Bogoslavskiy on 7/5/18.

import React from 'react';
import { View, StyleSheet } from 'react-native'; 
import { ScrollView } from '../../components/animate';

export default class TabWebView extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView
                style={styles.wrapper}
                tabRoute={this.props.route.key}
            />
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        height: 500,
    },
})