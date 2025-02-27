import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {StyleSheet, SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';
import  store  from './src/redux/store';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
export default App;
