import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {colors} from '@theme/colors';

interface IASTTextProps {
  type?: 'header' | 'normal' | 'cardTitle' | 'bigLabel' | 'button';
  color?: string;
  children?: React.ReactNode;
  fontSize?: number;
}

export const ASTText: React.FC<IASTTextProps> = ({
  type = 'normal',
  color = colors.black,
  children,
  fontSize,
}) => {
  let presetStyle: TextStyle = {};

  presetStyle = styles[type];

  presetStyle = {...presetStyle, color: color};

  if (fontSize) presetStyle = {...presetStyle, fontSize: fontSize};

  return <Text style={presetStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  header: {fontSize: 22, fontWeight: '600'},
  normal: {fontSize: 14},
  cardTitle: {fontSize: 16, fontWeight: '600'},
  bigLabel: {fontSize: 24, fontWeight: '800'},
  button: {fontSize: 16, fontWeight: '600', color: colors.blue},
});

export default ASTText;
