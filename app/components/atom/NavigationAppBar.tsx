import {ChevronLeft} from '@assets/icons';
import {NavigatorParamList} from '@navigators/app-navigator';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {colors} from '@theme/colors';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import ASTText from './ASTText';

type NavigatorParams = NativeStackNavigationProp<NavigatorParamList>;

interface INavigationAppBarProps {
  title: string;
}

export const NavigationAppBar: React.FC<INavigationAppBarProps> = ({title}) => {
  const navigation = useNavigation<NavigatorParams>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <ChevronLeft size={36} color="white" />
      </TouchableOpacity>
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          width: '80%',
          alignItems: 'center',
        }}>
        <ASTText color="white" type="header" fontSize={24}>
          {title}
        </ASTText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.blue1,
    paddingTop: 15,
    paddingBottom: 20,
  },
});

export default NavigationAppBar;
