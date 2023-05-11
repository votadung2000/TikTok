import React from 'react';
import {StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {scale} from 'utils/resolutions';
import {colors} from '@constant';
import {fontSize16} from 'constant/fontSize';

import Text from '../Text';
import Button from '../Button';

const Actions = () => {
  const isLiked = false;

  return (
    <View>
      <Button style={styles.container}>
        <AntDesign
          name={'heart'}
          size={scale(40)}
          color={isLiked ? colors.red : colors.white}
        />
        <Text bold style={styles.statsLabel}>
          {'123'}
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  statsLabel: {
    color: colors.white,
    fontSize: fontSize16,
    marginTop: scale(5),
  },
});

export default Actions;
