import React from 'react';
import {View, StyleSheet} from 'react-native';

interface ISelectStockCardContainerProps {}

export const SelectStockCardContainer: React.FC<
  ISelectStockCardContainerProps
> = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default SelectStockCardContainer;
