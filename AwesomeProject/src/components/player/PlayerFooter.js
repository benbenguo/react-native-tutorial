/**
 * @flow
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Body,
  Thumbnail,
  Container, Content,
  List, ListItem, Icon,
} from 'native-base';
import { connect } from 'react-redux';
import StyleSheet from '../../utils/StyleSheet';
import { playMusicList, pausedChange } from '../../actions/playerAction';

class PlayerFooter extends Component {
    constructor(props) {
        super(props)
        this.state = {
          visible: false,
        }
    }

    render() {
        const { currentMusicInfo, status } = this.props.player

        const navigation = this.props.navigation

        return (
        <Container>
            <Content style={{ backgroundColor: '#B72712' }}>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('MusicPlayer')}>
                    <View style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center',
                            height: 55,
                            marginHorizontal: 5 }} >
                        <Thumbnail
                            square
                            style={{ width: 48, height: 48 }}
                            source={{ uri: currentMusicInfo.album.picUrl }} />
                        <View style={{ marginLeft: 5, flex: 1 }}>
                            <Text>{currentMusicInfo.artists[0].name}</Text>
                            <Text
                            style={{ fontSize: 13, color: 'white', paddingTop: 5 }}
                            >{currentMusicInfo.name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                marginRight: 15,
                                borderWidth: StyleSheet.hairlineWidth,
                                overflow: 'hidden',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={this.props.pausedChange}
                            >
                            <Icon name={status.paused ? 'play' : 'pause'} style={{fontSize: 26, paddingTop: 2, paddingLeft: 3}}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                            style={{ paddingRight: 10 }}
                            onPress={() => {
                                this.setState({
                                visible: !this.state.visible,
                                })
                            }}
                            >
                            <Icon name="list" style={{fontSize: 40, paddingTop: 4}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Content>
        </Container>
        )
    }
}

function mapProps(store) {
    const { player } = store || {}
    return {
      player,
    }
}
  
function mapAction(dispatch) {
    return {
      pausedChange: () => dispatch(pausedChange()),
      playMusicList: v => dispatch(playMusicList(v)),
    }
}
  
export default connect(mapProps, mapAction)(PlayerFooter)