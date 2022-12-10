import {NavigationAppBar, Spacer} from '@components/atom';
import SearchBar from '@components/atom/SearchBar';
import SelectStockCard from '@components/molecule/SelectStockCard';
import {NavigatorParamList} from '@navigators/app-navigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CryptoServices} from '@services/index';
import {colors} from '@theme/colors';
import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type NavigationParams = NativeStackNavigationProp<
  NavigatorParamList,
  'addScreen'
>;

const {height} = Dimensions.get('window');

interface IAddScreenProps {}

export const AddScreen: React.FC<IAddScreenProps> = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        CryptoServices.GetCoinList({limit: 10});
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const onSearchQuery = (query: string) => {
    console.log('Retrieve new data', query);
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavigationAppBar title="Add Crypto" />

      <View style={{paddingHorizontal: 16, backgroundColor: colors.blue1}}>
        <SearchBar onChangeText={onSearchQuery} debounce={1000} />
        <Spacer height={16} />
      </View>
      <Spacer height={32} />
      <View style={{paddingHorizontal: 16}}>
        <SelectStockCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  form: {top: 0.25 * height},
});

export default AddScreen;
