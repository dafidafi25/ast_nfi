import {SvgWrapper} from '@components/atom';
import {colors} from '@theme/colors';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {GeneralIconProps} from './GeneralIconProps';

export const DownIcon: React.FC<GeneralIconProps> = ({
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
            d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z"
            fill={color}
          />
        </Svg>
      }
    />
  );
};

export default DownIcon;
