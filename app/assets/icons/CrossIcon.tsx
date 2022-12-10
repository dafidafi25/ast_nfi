import {SvgWrapper} from '@components/atom';
import {colors} from '@theme/colors';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {GeneralIconProps} from './GeneralIconProps';

export const CrossIcon: React.FC<GeneralIconProps> = ({
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
            d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"
            fill={color}
          />
        </Svg>
      }
    />
  );
};

export default CrossIcon;
