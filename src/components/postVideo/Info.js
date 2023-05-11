import React from 'react';
import {StyleSheet, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {colors} from '@constant';
import {scale} from 'utils/resolutions';

import Text from '../Text';

const Info = () => {
  return (
    <View style={styles.container}>
      <Text bold style={styles.nameChannel}>
        {'Name Channel'}
      </Text>
      <Text style={styles.desVideo}>{'Description Video'}</Text>
      <View style={styles.music}>
        <FontAwesome name={'music'} size={scale(24)} color={colors.white} />
        <Text>{'Name Music'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  nameChannel: {
    marginBottom: scale(5),
  },
  desVideo: {},
});

export default Info;
