import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import {StyleSheet, SafeAreaView} from 'react-native';

const Stack = createStackNavigator();

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
    backgroundColor: '#000',
  },
});
export default App;
