/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';

class DetailItemOtherList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [
                'theother',
                'theother',
                'theother',
                'theother',
                'theother',
                'theother',
                'theother',
                'theother',
                'theother',
                'theother',
                'theother',
                'theother',
                'theother',
                'theother',
                'theother',
                'theother',
                'theother',
                'theother',
                'theother',
                'theother',
            ],
        };
    }
    render() {
        const { changedOffset } = this.props;

        return (
            <FlatList 
                style={{
                    marginBottom: 48,
                }}
                onScroll={(event) => {
                    let offset = event.nativeEvent.contentOffset.y;
                    changedOffset(offset);
                }}
                ItemSeparatorComponent={ 
                    () => <View style={{ height: 1, backgroundColor: '#eeeeee', }} 
                /> }
                data={ this.state.data } 
                keyExtractor={ (item, index) => index.toString() }
                renderItem={ ({ item }) => 
                <View style={{
                    height: 75,
                    justifyContent: 'center',
                    marginLeft: 16,    
                }}
                ><Text>{ item }</Text>
                </View>}
            />
        );
    }
}

export default DetailItemOtherList;