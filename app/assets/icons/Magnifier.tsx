import {SvgWrapper} from '@components/atom';
import {colors} from '@theme/colors';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {GeneralIconProps} from './GeneralIconProps';

export const Magnifier: React.FC<GeneralIconProps> = ({
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
            d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            fill={color}
          />
        </Svg>
      }
    />
  );
};

export default Magnifier;
