import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import StepProgress from './StepProgress';

const Header = ({label, user, chat, back, left, step}: any) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,
        !left && {justifyContent: 'space-between', marginRight: 0},
      ]}>
      {back && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.avatar}
          />
        </TouchableOpacity>
      )}
      {step && <StepProgress step={step} />}
      {user && (
        <Image
          source={require('../../assets/user.png')}
          style={styles.avatar}
        />
      )}
      <Text style={styles.location}>{label}</Text>
      {chat && (
        <Image
          source={require('../../assets/chat.png')}
          style={styles.chatIcon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 20,
    paddingVertical: 15,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  location: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  chatIcon: {
    width: 24,
    height: 24,
  },
});

export default Header;
