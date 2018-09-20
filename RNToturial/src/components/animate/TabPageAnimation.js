import { 
    Animated, 
    StatusBar,
} from 'react-native';
import { ifIphoneX, isAndroid } from '../../utils';

export default class TabPageAnimation {
    /**
     * SearchBar Sizes
     *
     * SearchBar height consists of nested components
     * See styles /components/SearchBar.js
     * 
     * arrowHeight = 36
     * inputHeight = 45
     * tabBarHeight = 45
     * inputPaddingBottom = 3
     * containerPaddingTop = 28
     * containerPaddingBottom = 10
     * locationInputPaddingTop = 10
     * 
     * Calculate
     *  
     * containerPaddingTop + inputHeight + inputHeight +
     * containerPaddingBottom + arrowHeight + 
     * inputPaddingBottom + locationInputPaddingTop = 177 (Wrapper Height)
     *
     * 177 + tabBarHeight = 222 (Full height)
     * 
    **/

    /**
     * * HeaderBar Sizes
     *
     * HeaderBar height consists of nested components
     * See styles /components/HeaderBar.js
     * 
     * tabBarHeight = 45
     * containerPaddingTop = ifIphoneX ? 40 : 28 
     * containerPaddingBottom = 10
     * 
     * Calculate
     *  
     * containerPaddingTop + containerPaddingBottom = (Wrapper Height)
     *
     * (Wrapper Height) + tabBarHeight = (Full height)
     * 
    **/
    containerHeight = 200;
    
    statusBarHeight = isAndroid() ? StatusBar.currentHeight : 22;
    topPartHeight = 48 + this.statusBarHeight;

    // containerPaddingTop = ifIphoneX(40, 28);
    tabBarHeight = 45;
    // containerPaddingBottom = 10;
    // wrapperHeight = this.containerHeight; // + this.containerPaddingTop + this.containerPaddingBottom;
    // fullHeight = this.wrapperHeight + this.tabBarHeight;
    fullHeight = this.containerHeight;
    maxClamp = this.fullHeight - this.topPartHeight;
    minClamp = 0;
    diffClamp = this.maxClamp - this.minClamp;
 
    initialScroll = 0;
    maxActionAnimated = this.topPartHeight; // Location input height + padding (Bottom part)
    actionAnimated = new Animated.Value(0);
    scrollY = new Animated.Value(this.initialScroll);
    _clampedScrollValue = 0;
    _scrollValue = 0;
    initialState = null;
    _statusBarStyle = null;
    
    stateBarTypes = { CLAMPED: 1, NORMAL: 2, EXPANDED: 3 };
    stateBar = this.stateBarTypes.NORMAL;

    constructor(initialState) {
        this.initialState = initialState;
        this._createClampedScroll();
        this.scrollY.addListener(this._updateScroll);
        console.log(this.statusBarHeight);
    };

    destroy() {
        this.scrollY.removeAllListeners();
    };

    _createClampedScroll() {
        this.clampedScroll = Animated.diffClamp(
            this.scrollY.interpolate({ // Only positive
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolateLeft: 'clamp',
            }),
            this.minClamp,
            this.maxClamp,
        );
    };

    _updateScroll = ({value, manually}) => {
        console.log(value, this._scrollValue);

        if (value && manually) {
            this._clampedScrollValue = value;
        } else {
            const diff = value - this._scrollValue;
            this._scrollValue = Math.max(value, this.topPartHeight); // Fix normal state
            this._clampedScrollValue = Math.min(
                Math.max(this._clampedScrollValue + diff, this.minClamp), 
                this.maxClamp
            );
        }
    
        this._changeStatusBarStyle();
        this._changeStateBar();
    };

    _setStateBar(state) {
        let toValue = state == 'full' ? this.maxActionAnimated : 0;
        Animated.timing(this.actionAnimated, {
          toValue: toValue,
          duration: 250,
          useNativeDriver: true,
        }).start();
    
        this.stateBar = state;
    };
    
    _changeStateBar() {
        let newState, types = this.stateBarTypes;
        let clampedValue = Math.round(this._clampedScrollValue);

        if (Math.round(this.scrollY._value) < (this.fullHeight - this.topPartHeight)) {
            newState = types.EXPANDED;
        } else {
            newState = types.CLAMPED;
        }
    
        if(newState != undefined && newState != this.stateBar) {
            this.stateBar = newState;
        }
    };
    
    _changeStatusBarStyle() {
        let statusBarStyle = Math.round(this._clampedScrollValue) != this.maxClamp ? 
                            'light-content' : 
                            'dark-content';
        
        if (statusBarStyle != this._statusBarStyle) {
          StatusBar.setBarStyle(statusBarStyle);
          this._statusBarStyle = statusBarStyle;
        }
    };

    onTabPress = (route) => {
        let type = this.stateBarTypes;
        let offset = (this.stateBar == type.CLAMPED) ? 
                        this.fullHeight - this.topPartHeight : 0;
    
        // let offset = this.fullHeight - this.topPartHeight;

        this.initialState.scrollToOffset({
            offset: offset,
            animated: false,
            tab: route.key
        });
    
        this.scrollY.setValue(offset);
        this._createClampedScroll();
        this._updateScroll({value: offset, manually: true});
    };
    
    _handleIntermediateState = (scrollToOffset) => {
        let scrollY = this.scrollY._value;
        if (scrollY < this.containerHeight) { // Full
            scrollToOffset(scrollY > (this.containerHeight / 4) ? this.fullHeight - this.topPartHeight : 0);
        } else { // Clamped
            // if ( this._clampedScrollValue < this.maxClamp && 
            //     this._clampedScrollValue > this.minClamp) {

            //     let scrollTo;
            //     if(this._clampedScrollValue > (this.maxClamp + this.minClamp) / 2) {
            //         scrollTo = scrollY + this._interpolate(
            //             this._clampedScrollValue, 
            //             [this.maxClamp, this.minClamp], 
            //             [0, this.diffClamp]
            //         );
            //     } else {
            //         scrollTo = scrollY - this._interpolate(
            //             this._clampedScrollValue, 
            //             [this.minClamp, this.maxClamp], 
            //             [0, this.diffClamp]
            //         );
            //     }
        
            //     scrollToOffset(scrollTo);
            // }
        }
    };
    
    _interpolate = (x, inputRange, outputRange) => {
        let minX = inputRange[0];
        let maxX = inputRange[1];
        let minY = outputRange[0];
        let maxY = outputRange[1];
    
        return (x - minX) * ((maxY - minY) / (maxX - minX) + minY);
    };
    
    scrollToOffset(offset, animated) {
        if (offset != this.scrollY._value) {
          this.initialState.scrollToOffset({offset, animated});
        }
    };
    
    getTransformWrapper() {
        // let byScroll = Animated.add(
        //     Animated.multiply(this.clampedScroll, -1),
        //     this.scrollY.interpolate({ // Add bottom height part 
        //         inputRange: [-this.topPartHeight, 0],
        //         outputRange: [0, 0],
        //         extrapolate: 'clamp',
        //     })
        // );

        // return {
        //     transform: [{
        //       translateY: Animated.add(byScroll, this.actionAnimated)
        //     }]
        // };

        let byScroll = Animated.multiply(this.clampedScroll, -1);
        
        return {
            transform: [{
                translateY: byScroll,
            }]
        };
    };
    
    getOpacityBar() {
        return {
            opacity: this.actionAnimated.interpolate({
                inputRange: [0, this.maxActionAnimated],
                outputRange: [1, 0],
                extrapolate: 'clamp',
            })
        };
    };

    animationProps = {
        initialScroll: this.initialScroll,
        scrollY: this.scrollY,
        fullHeight: this.fullHeight,
        handleIntermediateState: this._handleIntermediateState,
    };
}