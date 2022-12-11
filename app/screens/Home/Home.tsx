import {AppBar, Spacer} from '@components/atom';
import ASTButton from '@components/atom/ASTButton';
import ListVIewSavedStock from '@components/organism/ListViewSavedStockCard';
import {NavigatorParamList} from '@navigators/app-navigator';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {colors} from '@theme/colors';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type NavigatinoParams = NativeStackNavigationProp<NavigatorParamList, 'home'>;

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = () => {
  const navigation = useNavigation<NavigatinoParams>();

  return (
    <SafeAreaView style={styles.container}>
      <AppBar title="CryptoTrackerPro" />
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <ListVIewSavedStock />
      </View>
      <View style={{paddingHorizontal: 16, backgroundColor: colors.blue1}}>
        <Spacer height={16} />
        <View style={{alignSelf: 'center', width: '100%'}}>
          <ASTButton
            onPress={() => navigation.navigate('addScreen')}
            title="Add Crypto"
            textColor={colors.black}
          />
        </View>
        <Spacer height={16} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});

export default Home;
