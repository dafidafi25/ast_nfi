import {SvgWrapper} from '@components/atom';
import {colors} from '@theme/colors';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {GeneralIconProps} from './GeneralIconProps';

export const UpIcon: React.FC<GeneralIconProps> = ({
  color = colors.black,
  size = 24,
}) => {
  return (
    <SvgWrapper
      aspectRatio={24 / 24}
      width={size}
      height={size}
      children={
        <Svg width="100%" height="100%" fill="none" viewBox="0 0 24 24">
          <Path
            d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"
            fill={color}
          />
        </Svg>
      }
    />
  );
};

export default UpIcon;
