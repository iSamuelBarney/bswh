import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useNav} from '@@Hooks';

export default function (props = {}) {
  const {push} = useNav();

  console.log({props});

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Users Screen</Text>
      <TouchableOpacity
        onPress={() => {
          push('User', {title: 'Test'});
        }}>
        <Text>Push User</Text>
      </TouchableOpacity>
    </View>
  );
}
