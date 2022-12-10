import Magnifier from '@assets/icons/Magnifier';
import {colors} from '@theme/colors';
import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Spacer from './Spacer';
import {useDebouncedCallback} from 'use-debounce';

interface ISearchBarProps {
  onChangeText?: (text: string) => void;
  debounce?: number;
}

export const SearchBar: React.FC<ISearchBarProps> = ({
  onChangeText,
  debounce,
}) => {
  const debounceListener = useDebouncedCallback((text: string) => {
    onChangeText && onChangeText(text);
  }, debounce);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textContainer}
        placeholder="Try 'BTC' or 'bitcoin'"
        numberOfLines={1}
        onChangeText={debounceListener}
      />
      <View style={{justifyContent: 'center'}}>
        <Magnifier size={32} color={colors.blue1} />
      </View>
      <Spacer width={8} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 4,
    justifyContenta: 'center',
    flexDirection: 'row',
  },
  textContainer: {
    paddingHorizontal: 10,
    fontSize: 18,
    alignItems: 'center',
    flexGrow: 1,
  },
});

export default SearchBar;
