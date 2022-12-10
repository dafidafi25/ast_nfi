import React from 'react';
import {View} from 'react-native';

interface ISpacerProps {
  width?: number;
  height?: number;
}

export const Spacer: React.FC<ISpacerProps> = ({width, height}) => {
  return <View style={{width: width, height: height}} />;
};

export default Spacer;
