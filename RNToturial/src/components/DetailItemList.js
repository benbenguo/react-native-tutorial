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
  Animated,
  ScrollView,
} from 'react-native';

class DetailItemList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            scrollY: 0,
            data: [
                'testtest',
                'testtest',
                'testtest',
                'testtest',
                'testtest',
                'testtest',
                'testtest',
                'testtest',
                'testtest',
                'testtest',
                'testtest',
                'testtest',
                'testtest',
                'testtest',
                'testtest',
                'testtest',
                'testtest',
                'testtest',
                'testtest',
                'testtest',
            ],
        };
    }
    render() {
        const { changedOffset } = this.props;

        return (
           
                <ScrollView 
                    scrollEventThrottle={16}
                    onScroll={
                        Animated.event(
                            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
                            {listener: (event) => {
                                let offset = event.nativeEvent.contentOffset.y;
                                this.setState({
                                    scrollY: offset,
                                });
                                changedOffset(offset);
                            }}
                        )
                    }
                    style={{
                        height: 1000,
                    }}
                    >
                     <View style={{
                        position: 'absolute',
                        backgroundColor: 'red',
                        top: this.state.scrollY,
                    }}>
                    {
                        this.state.data.map((item, index) => 
                            <View
                                key={ index }
                                style={{
                                    height: 75,
                                    justifyContent: 'center',
                                    marginLeft: 16,    
                                }}
                            >
                                <Text>{ item }</Text>
                            </View>
                        )
                    }
                    </View>
                </ScrollView>
                
            
        );
    }
}

export default DetailItemList;


{/* <FlatList 
                    style={{
                        marginBottom: 48,
                    }}
                    onScroll={(event) => {
                        let offset = event.nativeEvent.contentOffset.y;
                        this.setState({
                            scrollY: offset,
                        });
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
                /> */}