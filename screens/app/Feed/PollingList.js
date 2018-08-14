/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, Text, View, Icon} from 'native-base';

import {styles} from '../../../styles';

class PollingListScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon
        name="poll-box"
        type="MaterialCommunityIcons"
        style={{color: tintColor}}
      />
    ),
  };

  render() {
    const polling = {
      name: 'What language?',
      options: [
        {id: 1, name: 'Node.JS'},
        {id: 2, name: 'PHP'},
        {id: 3, name: 'Django'},
        {id: 4, name: 'Ruby on Rails'},
      ],
    };

    return (
      <View style={styles.centerBox}>
        <Button
          primary
          onPress={() =>
            this.props.navigation.navigate('PollingDetail', {
              polling,
            })
          }>
          <Text>Go to one polling</Text>
        </Button>
      </View>
    );
  }
}

export default PollingListScreen;
