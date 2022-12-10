import {AppBar, Spacer} from '@components/atom';
import ASTText from '@components/atom/ASTText';
import {StockCard} from '@components/molecule';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface IAddScreenProps {}

export const AddScreen: React.FC<IAddScreenProps> = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default AddScreen;
