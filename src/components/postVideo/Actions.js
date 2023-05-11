import React from 'react';
import {StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FastImage from 'react-native-fast-image';

import {hScale, scale} from 'utils/resolutions';
import {colors, fontSize} from '@constant';

import Text from '../Text';
import Button from '../Button';

const Actions = ({likes, comments, shares}) => {
  const isLiked = false;

  return (
    <View style={styles.container}>
      <View style={styles.vwCircle}>
        <FastImage
          style={styles.img}
          source={{
            uri: 'https://images7.alphacoders.com/320/320986.jpg',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <Button style={styles.btnActions}>
        <AntDesign
          name={'heart'}
          size={scale(28)}
          color={isLiked ? colors.red : colors.white}
        />
        <Text bold style={styles.statsLabel}>
          {likes || 0}
        </Text>
      </Button>
      <Button style={styles.btnActions}>
        <FontAwesome
          name={'commenting'}
          size={scale(28)}
          color={colors.white}
        />
        <Text bold style={styles.statsLabel}>
          {comments || 0}
        </Text>
      </Button>
      <Button style={styles.btnActions}>
        <Fontisto name={'share-a'} size={scale(25)} color={colors.white} />
        <Text bold style={styles.statsLabel}>
          {shares || 0}
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hScale(260),
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(5),
  },
  vwCircle: {
    width: scale(45),
    height: scale(45),
    borderRadius: scale(45),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: scale(42),
    height: scale(42),
    borderRadius: scale(42),
  },
  btnActions: {
    alignItems: 'center',
  },
  statsLabel: {
    color: colors.white,
    fontSize: fontSize.small,
  },
});

export default Actions;
