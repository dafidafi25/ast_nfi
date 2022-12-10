import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {colors} from '@theme/colors';

interface IASTTextProps {
  type?: 'header' | 'normal' | 'cardTitle';
  color?: string;
  children: React.ReactNode;
}

export const ASTText: React.FC<IASTTextProps> = ({
  type = 'normal',
  color = colors.black,
  children,
}) => {
  let presetStyle: TextStyle = {};

  presetStyle = styles[type];

  presetStyle = {...presetStyle, color: color};

  return <Text style={presetStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  header: {fontSize: 22, fontWeight: '600'},
  normal: {fontSize: 14},
  cardTitle: {fontSize: 16, fontWeight: '600'},
});

export default ASTText;
