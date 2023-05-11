import React from 'react';
import {StyleSheet, View} from 'react-native';

import {PostVideo} from '../../components';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <PostVideo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
