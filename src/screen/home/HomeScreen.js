import React from 'react';
import {StyleSheet, View, FlatList, Dimensions} from 'react-native';

import {PostVideo} from '@components';

import {dataPost} from '../../actions/Data';

const HomeScreen = () => {
  const keyExtractor = item => item?.id?.toString();

  const renderItem = ({item}) => {
    return <PostVideo data={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={dataPost}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
