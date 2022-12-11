import {NavigationAppBar, Spacer} from '@components/atom';
import SearchBar from '@components/atom/SearchBar';
import ListViewSelectStockCard from '@components/organism/ListViewSelectStockCard';
import {GetCoinList} from '@store/index';
import {colors} from '@theme/colors';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';

const {height} = Dimensions.get('window');

interface IAddScreenProps {}

export const AddScreen: React.FC<IAddScreenProps> = () => {
  const dispatch = useDispatch();

  const onSearchQuery = (query: string) => {
    dispatch(GetCoinList({offset: 0, limit: 10, search: query}));
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavigationAppBar title="Add Crypto" />

      <View style={{paddingHorizontal: 16, backgroundColor: colors.blue1}}>
        <SearchBar onChangeText={onSearchQuery} debounce={1000} />
        <Spacer height={16} />
      </View>
      <View style={{paddingHorizontal: 16}}>
        <ListViewSelectStockCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  form: {top: 0.25 * height},
});

export default AddScreen;
