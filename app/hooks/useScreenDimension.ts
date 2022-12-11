// Create Screen Width and Height Hook
import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

export const useScreenDimension = () => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get('window').width,
  );
  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get('window').height,
  );

  useEffect(() => {
    const onChange = ({window}) => {
      setScreenWidth(window.width);
      setScreenHeight(window.height);
    };

    const dimensionHandler = Dimensions.addEventListener('change', onChange);
    return () => dimensionHandler.remove();
  }, []);

  return {screenWidth, screenHeight};
};
