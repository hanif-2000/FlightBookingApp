import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TouchableWithoutFeedback, Keyboard, View} from 'react-native';

const KeyboardAwareWrapper = ({children}: any) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAwareScrollView
        extraHeight={100}
        enableOnAndroid={true}
        contentContainerStyle={{flexGrow: 1}}
        style={{backgroundColor:'#000000'}}
        keyboardShouldPersistTaps="always">
        <View style={{flex: 1}}>{children}</View>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardAwareWrapper;
