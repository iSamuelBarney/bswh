import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useNav} from '@@Hooks';

export default function (props = {}) {
  const {goBack} = useNav();

  console.log({props});

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>User Screen</Text>
      <TouchableOpacity
        onPress={() => {
          goBack();
        }}>
        <Text>Back to Users</Text>
      </TouchableOpacity>
    </View>
  );
}
