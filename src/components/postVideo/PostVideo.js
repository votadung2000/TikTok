import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Video from 'react-native-video';

import Info from './Info';
import Actions from './Actions';
import {colors} from '@constant';

const {height} = Dimensions.get('window');

const PostVideo = ({isPlay, data}) => {
  const [isPause, setPause] = useState(true);

  useEffect(() => {
    setPause(!isPlay);
  }, [isPlay]);

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
              uri: data?.videoUri,
            }}
            repeat={true}
            style={styles.video}
            // resizeMode='cover'
            paused={isPause}
            onError={onError}

            // Turn off the future pause background
            // rotate={90}
            // playInBackground={false}
            // playWhenInactive={false}

            // Open video 360
            // sphericalEnabled={true}

            // Turn off the future for VR devices
            // stereoPanorama={false}

            // Disable features that come with 360 . video
            // enableFullscreenButton={false}
            // enableCardboardButton={false}
            // enableTouchTracking={false}
            // enableScrollTracking={false}
          />
          <View style={styles.uiContainer}>
            <Actions {...data} />
            <Info {...data} />
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
    backgroundColor: colors.black,
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
    bottom: 30,
  },
});

export default PostVideo;
