import React from 'react';
import {StyleSheet, Platform, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Layout = ({children}) => {
  return (
    <SafeAreaProvider style={styles.safeArea}>
      {Platform.OS === 'ios' && <StatusBar animated barStyle="light-content" />}
      {children}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default Layout;
