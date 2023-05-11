import React from 'react';
import {StyleSheet, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {colors, fontSize} from '@constant';
import {scale} from 'utils/resolutions';

import Text from '../Text';

const Info = ({user, description, songName}) => {
  return (
    <View style={styles.container}>
      <Text bold style={styles.nameChannel}>
        {user?.username || ''}
      </Text>
      <Text style={styles.desVideo}>{description || ''}</Text>
      <View style={styles.music}>
        <FontAwesome name={'music'} size={scale(18)} color={colors.white} />
        <Text style={styles.nameMusic}>{songName || ''}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(15),
  },
  nameChannel: {
    color: colors.white,
    marginBottom: scale(5),
  },
  desVideo: {
    color: colors.white,
    fontSize: fontSize.small,
  },
  music: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: scale(10),
  },
  nameMusic: {
    color: colors.white,
    marginLeft: scale(8),
    fontSize: fontSize.fontSize14,
  },
});

export default Info;
