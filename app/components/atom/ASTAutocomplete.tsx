import {CrossIcon} from '@assets/icons';
import {colors} from '@theme/colors';
import React from 'react';
import {
  AutocompleteDropdown,
  TAutocompleteDropdownItem,
} from 'react-native-autocomplete-dropdown';
import ASTText from './ASTText';

interface IASTAutocompleteProps {
  item: TAutocompleteDropdownItem[];
  value?: number;
  placeholder?: string;
  onChange?: (value: number) => void;
}

export const ASTAutocomplete: React.FC<IASTAutocompleteProps> = ({
  value,
  item,
  placeholder,
  onChange,
}) => {
  const [uiFocus, setUiFocus] = React.useState<boolean>(false);
  const [uiValue, setUiValue] = React.useState<string>('');

  return (
    <AutocompleteDropdown
      onClear={() => setUiValue('')}
      showChevron={false}
      showClear={uiFocus || uiValue !== ''}
      closeOnBlur={true}
      closeOnSubmit={false}
      initialValue={value?.toString()}
      onFocus={() => setUiFocus(true)}
      onSelectItem={selectedItem => {
        console.log('selectedItem', selectedItem);
        onChange && onChange(Number(selectedItem.id));
        selectedItem &&
          setUiValue(selectedItem.title ? selectedItem.title : '');
      }}
      onBlur={() => setUiFocus(false)}
      dataSet={item}
      textInputProps={{
        placeholder: placeholder,
        placeholderTextColor: colors.gray3,
        value: uiValue,
        style: {fontSize: 16},
      }}
      ClearIconComponent={<CrossIcon />}
      containerStyle={{
        borderWidth: 1,
        borderColor: uiFocus ? colors.orange : colors.gray3,
        zIndex: 10,
        borderRadius: 4,
      }}
      inputContainerStyle={{backgroundColor: 'white'}}
      EmptyResultComponent={<ASTText>Item Not Found</ASTText>}
    />
  );
};

export default ASTAutocomplete;
