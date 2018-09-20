//  Created by Artem Bogoslavskiy on 7/5/18.

import React from 'react';
import { Animated, WebView } from 'react-native'; 
import { BarContext } from './BarContext';
import { ifIphoneX, isAndroid } from '../../utils';

// const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class ScrollViewHelper extends React.PureComponent {
    componentDidMount() {
        let { tabRoute, animation, addHandlerScroll } = this.props;

        addHandlerScroll(tabRoute, this.scrollToOffset);

        setTimeout(() => { // Fix bug initialScroll set
            this.scrollToOffset(animation.initialScroll, false)
        }, 250);
    }

    scrollToOffset = (offset, animated = true) => {
        console.log('object');
        // this.scrollView.getNode().scrollToOffset({offset, animated});
    };

    _onMomentumScrollBegin = () =>  this.props._canJumpToTab(false);

    _onMomentumScrollEnd = () => this.props._canJumpToTab(true);

    _onScrollEndDrag = e => {
        let velocity = e.nativeEvent.velocity.y;
        if(velocity == 0 || (isAndroid() && Math.abs(Math.round(velocity)) <= 2)) {
            this.props.animation.handleIntermediateState(this.scrollToOffset);
        }
    };

    render() {
        let { scrollY, fullHeight } = this.props.animation;
        let { contentContainerStyle } = this.props;
        
        return (
            <Animated.ScrollView
                {...this.props}
                scrollEventThrottle={1}  
                onScrollEndDrag={this._onScrollEndDrag}
                onMomentumScrollBegin={this._onMomentumScrollBegin}
                onMomentumScrollEnd={this._onMomentumScrollEnd}
                contentContainerStyle={[
                    {
                        paddingTop: fullHeight + 60,
                    }, 
                    contentContainerStyle
                ]}
                ref={component => { 
                    this.scrollView = component; 
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
            >
                <WebView 
                    style={{
                        height: 500,
                    }}
                    scrollEnabled={false}
                    source={{uri: 'https://dxwd.opennews.com.cn/activity/sharePoemCollect/?id=e703bb9f-5e8e-4c6a-9e07-5651b7f8171f&type=1&device=1'}}
                />
            </Animated.ScrollView>
        );
    }
}

// HOC
const withBarContext = Comp => props => (
    <BarContext.Consumer>
        {
            (context) => 
                <Comp
                    {...context}
                    {...props} 
                />
        }
    </BarContext.Consumer>
);

export default withBarContext(ScrollViewHelper);