import {colors} from '@theme/colors';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import ASTText from './ASTText';

interface IAppBarProps {
  title: string;
}

export const AppBar: React.FC<IAppBarProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <ASTText color="white" type="header" fontSize={28}>
        {title}
      </ASTText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue1,
    paddingHorizontal: 16,
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 20,
  },
});

export default AppBar;
