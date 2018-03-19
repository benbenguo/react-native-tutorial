/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import {
  Icon
} from 'native-base';
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';
import RecommendPage from './RecommendPage';
import SelectionPage from './SelectionPage';
import ArticlePage from './ArticlePage';
import SubjectPage from './SubjectPage';
import AuthorPage from './AuthorPage';
import RhesisPage from './RhesisPage';
import RecommendTheme from '../../styles/RecommendTheme';
import screen from '../../utils/screen';

export default class MainPage extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: '笃学问道',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flexGrow: 1
      },
      headerLeft: <View />,
      headerRight: <TouchableOpacity onPress={() => navigation.navigate('Search', {title: '搜索'})}>
                      <Image style={{
                          height: 18,
                          width: 18,
                          marginRight: 10,
                          resizeMode: 'contain',
                        }} source={require('../../images/all_icon_search_white.png')} />
                   </TouchableOpacity>,
      headerStyle: {
          backgroundColor: RecommendTheme.backgroundColor
      }
    });

    componentDidMount() {
      console.log(this.tabView);
    }

    render() {
      const types = [
        {title: '推荐', component: RecommendPage},
        {title: '精读', component: SelectionPage},
        {title: '诗文', component: ArticlePage},
        {title: '分类', component: SubjectPage},
        {title: '作者', component: AuthorPage},
        {title: '名句', component: RhesisPage}
      ];

      return (
          <ScrollableTabView
                style={{flex: 1, backgroundColor: '#FBFCFE'}}
                initialPage={0}
                tabBarBackgroundColor="#ffffff"
                tabBarActiveTextColor="#D43C33"
                tabBarInactiveTextColor="#000000"
                tabBarUnderlineStyle={{backgroundColor: '#D43C33'}}
                renderTabBar={() => <ScrollableTabBar />}
          >
                { types.map((v, i) => {
                    const CustomCom = v.component;
                    return <CustomCom key={i} tabLabel={v.title} navigation={this.props.navigation} />
                })}
          </ScrollableTabView>
      )
    }
}

const styles = StyleSheet.create({
  titleBar: {
      borderRadius: 30,
      backgroundColor: '#ffffff',
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
  }
});