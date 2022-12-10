import {SvgWrapper} from '@components/atom';
import {colors} from '@theme/colors';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {GeneralIconProps} from './GeneralIconProps';

export const ChevronLeft: React.FC<GeneralIconProps> = ({
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
            d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
            fill={color}
          />
        </Svg>
      }
    />
  );
};

export default ChevronLeft;
