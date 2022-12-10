import {colors} from '@theme/colors';
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import ASTText from './ASTText';

interface IASTButtonProps {
  title: string;
  onPress?: () => void;
}

export const ASTButton: React.FC<IASTButtonProps> = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onPress && onPress()}
        style={{
          paddingVertical: 12,
          backgroundColor: colors.orange,
          borderRadius: 6,
          paddingHorizontal: 54,
        }}>
        <ASTText type="button">{title}</ASTText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ASTButton;
