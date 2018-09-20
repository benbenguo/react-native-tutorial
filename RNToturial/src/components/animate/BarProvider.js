//  Created by Artem Bogoslavskiy on 7/5/18.

import React, {
    Component,
} from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import TabPageAnimation from './TabPageAnimation';
import { BarContext } from './BarContext';

export default class BarProvider extends Component {
    constructor(props) {
        super(props);

        this.tabPageAnimation = new TabPageAnimation({
            scrollToOffset: (configScroll) => {
                let tab = configScroll.tab ? configScroll.tab : this.props.currentTab;

                let scrollToOffset = this._handlersScroll[tab];
                scrollToOffset && scrollToOffset(configScroll.offset, configScroll.animated);
            }
        });

        this.state = {
            currentTab: null,
            canJumpToTab: true,
            contextProvider: {
                animation: this.tabPageAnimation.animationProps,
                addHandlerScroll: this._addHandlerScroll,
                _canJumpToTab: this._canJumpToTab,
            }
        };
    }

    componentWillUnmount() {
        this.tabPageAnimation.destroy();
    }

    _handlersScroll = {};

    _addHandlerScroll = (tab, handler) => {
        this._handlersScroll[tab] = handler;
    };

    _canJumpToTab = (canJumpToTab) => this.setState({canJumpToTab});

    render() {
        return (
            <BarContext.Provider value={this.state.contextProvider}>
                {
                    this.props.children(this.tabPageAnimation, {
                        canJumpToTab: this.state.canJumpToTab
                    })
                }
            </BarContext.Provider>
        );
    }
}