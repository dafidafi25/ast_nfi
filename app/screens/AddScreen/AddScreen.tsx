import {Spacer} from '@components/atom';
import ASTAutocomplete from '@components/atom/ASTAutocomplete';
import ASTButton from '@components/atom/ASTButton';
import ASTText from '@components/atom/ASTText';
import {NavigatorParamList} from '@navigators/app-navigator';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type NavigationParams = NativeStackNavigationProp<
  NavigatorParamList,
  'addScreen'
>;
const {height} = Dimensions.get('window');

interface IAddScreenProps {}

export const AddScreen: React.FC<IAddScreenProps> = () => {
  const navigation = useNavigation<NavigationParams>();

  return (
    <SafeAreaView style={styles.container}>
      <Spacer height={32} />
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => navigation.pop()}>
        <ASTText fontSize={18}>{'< '}</ASTText>
        <ASTText fontSize={18}>{'Back to List'}</ASTText>
      </TouchableOpacity>
      <View style={styles.form}>
        <ASTText type="bigLabel">Add a Crypto Currency</ASTText>
        <Spacer height={32} />
        <ASTAutocomplete
          item={[{id: '1', title: 'waw'}]}
          placeholder="Use a name or ticker symbol..."
        />
        <Spacer height={8} />
        <View style={{alignSelf: 'flex-end', zIndex: 0}}>
          <ASTButton title="Add" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', paddingHorizontal: 16},
  form: {top: 0.25 * height},
});

export default AddScreen;
