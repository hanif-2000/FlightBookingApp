import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './Header';

interface ScreenLayoutProps {
  children?: React.ReactNode;
  label?: string;
  user?: boolean;
  chat?: boolean;
  back?: boolean;
  step?: number;
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  label,
  user,
  chat,
  back,
  step,
}) => {
  return (
    <View style={styles.container}>
      <Header
        back={back}
        label={label || ''}
        chat={chat}
        user={user}
        step={step}
      />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
  },
});

export default ScreenLayout;
