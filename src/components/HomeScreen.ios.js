import React, { Component } from 'react';
import {
  TabBarIOS, 
  Text,
  Alert,
  Vibration,
  StatusBar
} from 'react-native';
import NewsFeedContainer from '../containers/NewsFeedContainer';
import Search from './Search';
import * as globalStyle from '../styles/global';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    StatusBar.setBarStyle('light-content');
    this.state = {
      tab: 'newsFeed'
    };
  }

  showBookmarkAlert() {
    Vibration.vibrate();
    Alert.alert(
      'Coming soon!',
      'We are hard at work on this feature, check back in the near future.',
      [
        { text: 'OK', onPress: () => console.log('User pressed OK') }
      ]
    )
  }

  render() {
    return (
      <TabBarIOS
        barTintColor={globalStyle.BAR_COLOR}
        tintColor={globalStyle.LINK_COLOR}
        translucent={false}
      >
        <TabBarIOS.Item
          badge={4}
          systemIcon="featured"
          selected={this.state.tab === 'newsFeed'}
          onPress={() => this.setState({ tab: 'newsFeed' })}
        >
          <NewsFeedContainer />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="search"
          selected={this.state.tab === 'search'}
          onPress={() => this.setState({ tab: 'search' })}
        >
          <Search />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="bookmarks"
          selected={this.state.tab === 'bookmarks'}
          onPress={() => this.showBookmarkAlert()}
        >
          <Text>Bookmarks</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

export default HomeScreen;
