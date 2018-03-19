/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import {
  Container, Content, Footer,
} from 'native-base';
import { connect } from 'react-redux';
import StyleSheet from '../../utils/StyleSheet';
import PlayerFooter from '../../components/player/PlayerFooter';
import InitMusicList from '../../data/InitMusicList';
import { decrement, increment } from '../../actions/counterAction';

class RecommendPage extends Component {
    render() {
      const { count, decrement, increment} = this.props;
      const testText = 'Test';
      return (
        <Container>
          <Content>
            <View style={styles.container}>
              <Button onPress={ decrement } title='?' />
              <Text style={styles.label}>
                { count }
              </Text>
              <Button onPress={ increment } title='?' />
              <Button onPress={this._onButtonPress}  title='test'/>
            </View>
          </Content>
          <Footer>
          <PlayerFooter 
            musicData={InitMusicList.musicData}
            navigation={this.props.navigation}>
          </PlayerFooter>
          </Footer>
        </Container>
        
      )
    }

    _onButtonPress = () => {
      console.log(this.props);
    }
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  label: {
    width: 40,
    textAlign: 'center',
    color: 'red'
  }
})

function mapProps(store) {
  return {
    count: store.counter.counter.count,
  }
}

function mapAction(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  }
}

export default connect(mapProps, mapAction)(RecommendPage)