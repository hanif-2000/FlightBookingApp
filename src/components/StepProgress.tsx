import React from 'react';
import {View, StyleSheet} from 'react-native';

const StepProgress = ({step}: any) => {
  const getProgressWidth = () => {
    return `${(step / 3) * 100}%`; // 33%, 66%, 100% based on step
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, {width: getProgressWidth()}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  progressContainer: {
    width: '90%',
    height: 6,
    backgroundColor: '#FFFFFF33',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#10E0F9',
  },
});

export default StepProgress;
