import React from 'react';
import {View, StyleSheet} from 'react-native';

interface INavigationAppBarProps {}

export const NavigationAppBar: React.FC<INavigationAppBarProps> = () => {
  return <View style={styles.container}> </View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default NavigationAppBar;
