import React, {FC, memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import StepProgress from './StepProgress';

interface HeaderProps {
  label?: string;
  user?: boolean;
  chat?: boolean;
  back?: boolean;
  step?: number;
}

const Header: FC<HeaderProps> = ({label, user, chat, back, step}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (back) {
      navigation.goBack();
    } else {
    }
  };

  const handlePressRight = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        {(back || user) && (
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={
                back
                  ? require('../../assets/back.png')
                  : require('../../assets/user.png')
              }
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
        {label && <Text style={styles.label}>{label}</Text>}
      </View>

      {step && <StepProgress step={step} />}

      {chat && (
        <TouchableOpacity onPress={handlePressRight}>
          <Image
            source={require('../../assets/chat.png')}
            style={styles.chatIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  chatIcon: {
    width: 24,
    height: 24,
  },
});

export default memo(Header);
