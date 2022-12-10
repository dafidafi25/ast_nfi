import React from 'react';
import {View, StyleSheet} from 'react-native';
import ASTText from './ASTText';

interface IAppBarProps {
  title: string;
}

export const AppBar: React.FC<IAppBarProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <ASTText color="white" type="header">
        {title}
      </ASTText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#385775',
    paddingHorizontal: 16,
    flexDirection: 'row',
    paddingTop: 32,
    paddingBottom: 40,
  },
});

export default AppBar;
