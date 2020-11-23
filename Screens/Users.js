import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';

import {useNav} from '@@Hooks';

const UserLineItem = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item?.name}</Text>
    <Text style={styles.email}>{item?.email}</Text>
  </TouchableOpacity>
);

export default function (props = {}) {
  const {push} = useNav();
  const [selectedId, setSelectedId] = useState(null);
  const users = useSelector((state) => state?.users);

  const renderUser = ({item}) => {
    const backgroundColor = item?.username === selectedId ? '#f9c2ff' : 'white';

    return (
      <UserLineItem
        onPress={() => {
          setSelectedId(item?.username);
          push('User', item);
        }}
        style={{backgroundColor}}
        {...{item}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Object.values(users)}
        renderItem={renderUser}
        keyExtractor={(user) => user?.username}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  email: {
    fontSize: 11.7,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    opacity: 0.57,
  },
});
