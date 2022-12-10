import {AppBar, Spacer} from '@components/atom';
import ASTText from '@components/atom/ASTText';
import {StockCard} from '@components/molecule';
import {NavigatorParamList} from '@navigators/app-navigator';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type NavigatinoParams = NativeStackNavigationProp<NavigatorParamList, 'home'>;

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = () => {
  const navigation = useNavigation<NavigatinoParams>();

  return (
    <SafeAreaView style={styles.container}>
      <AppBar title="CryptoTrackerPro" />
      <Spacer height={32} />
      <View style={{paddingHorizontal: 16}}>
        <StockCard />
      </View>
      <Spacer height={32} />
      <View style={{paddingHorizontal: 16}}>
        <StockCard />
      </View>
      <Spacer height={32} />
      <View style={{paddingHorizontal: 16}}>
        <StockCard />
      </View>
      <Spacer height={48} />

      <TouchableOpacity
        style={{alignSelf: 'center'}}
        onPress={() => navigation.navigate('addScreen')}>
        <ASTText> + Add a Cryptocurrency</ASTText>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});

export default Home;
