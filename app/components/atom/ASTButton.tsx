import {colors} from '@theme/colors';
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import ASTText from './ASTText';

interface IASTButtonProps {
  title: string;
  onPress?: () => void;
  textColor?: string;
}

export const ASTButton: React.FC<IASTButtonProps> = ({
  title,
  onPress,
  textColor,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onPress && onPress()}
        style={{
          paddingVertical: 8,
          backgroundColor: colors.orange,
          borderRadius: 6,
          paddingHorizontal: 32,
        }}>
        <View style={{alignSelf: 'center'}}>
          <ASTText type="button" style={{color: textColor}}>
            {title}
          </ASTText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ASTButton;
