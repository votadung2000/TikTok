import React, {useState, useCallback} from 'react';
import {StyleSheet, View, FlatList, Dimensions} from 'react-native';

import {PostVideo} from '@components';

import {dataPost} from '../../actions/Data';

const HomeScreen = () => {
  const [curIndex, setCurIndex] = useState(0);

  const onScroll = useCallback(
    event => {
      const offsetY = event.nativeEvent.contentOffset.y;
      const windowHeight = Dimensions.get('window').height;
      const index = Math.round(offsetY / windowHeight);

      if (index !== curIndex) {
        setCurIndex(index);
      }
    },
    [curIndex],
  );

  const keyExtractor = item => item?.id?.toString();

  const renderItem = ({item, index}) => {
    const isSelected = index === curIndex;
    return <PostVideo isPlay={isSelected} data={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dataPost}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        onScroll={onScroll}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  vwPager: {
    flex: 1,
  },
});

export default HomeScreen;
