import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import {useNav} from '@@Hooks';

export default function (props = {}) {
  const {goBack} = useNav();

  const user = props?.route?.params || {};

  console.log({props});

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContent}>
        <Text style={styles.title}>Details</Text>
        <Text>{user?.name}</Text>
        <Text>{user?.username}</Text>
        <Text>{user?.email}</Text>
        <Text>{user?.website}</Text>
        <Text>{user?.phone}</Text>
        <Text style={styles.title}>Address</Text>
        <Text>{user?.address?.street}</Text>
        <Text>{user?.address?.suite}</Text>
        <Text>{user?.address?.city}</Text>
        <Text>{user?.address?.zipcode}</Text>
        <Text style={styles.title}>Company</Text>
        <Text>{user?.company?.name}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContent: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 11.7,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    opacity: 0.27,
  },
});
