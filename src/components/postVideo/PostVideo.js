import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Video from 'react-native-video';

import Info from './Info';
import Actions from './Actions';

const {height} = Dimensions.get('window');

const PostVideo = () => {
  const [isPause, setPause] = useState();

  const handlePause = () => {
    setPause(!isPause);
  };

  const onError = e => {
    console.log('Error Video: ', e);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePause}>
        <View>
          <Video
            source={{
              uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            repeat={true}
            style={styles.video}
            // resizeMode='cover'
            paused={isPause}
            onError={onError}
          />
          <View style={styles.uiContainer}>
            <Actions />
            <Info />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    width: '100%',
  },
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
    bottom: 20,
  },
});

export default PostVideo;
