/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import SessionTwoItem from '../components/SessionTwoItem';

class SessionTwo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            number: 0,
        };

        console.log('constructor')
    }


    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount = () => {
      console.log('componentDidMount')
    };
    

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
         console.log('shouldComponentUpdate')
         return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    plus = () => {
        const { number } = this.state;

        this.setState({
            number: number + 1,
        })
    }

    subtract = () => {
        const { number } = this.state;

        this.setState({
            number: number - 1,
        })
    }

    render() {
        console.log('render')

        const { number } = this.state;

        return (
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity 
                        style={{
                            height: 60,
                        }}
                        onPress={ this.subtract }>
                        <Text style={{
                            fontSize: 50,
                        }}>-</Text>    
                    </TouchableOpacity>

                    <Text style={{
                        marginLeft: 30,
                        marginRight: 30,
                        fontSize: 50,
                        lineHeight: 60,
                        color: 'red',
                    }}>{ number }</Text>

                    <TouchableOpacity 
                        style={{
                            height: 60,
                        }}
                        onPress={ this.plus }>
                        <Text style={{
                            fontSize: 50,
                        }}>+</Text>    
                    </TouchableOpacity>
                </View>

                <SessionTwoItem 
                    style={{
                        // flex: 1,
                        height: 60,
                    }}
                    showred={ number > 5 ? true : false } />
                
            </View>
            
        );
    }
}

export default SessionTwo;