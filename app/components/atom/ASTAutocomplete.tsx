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
  const [uiSelectedValue, setUiSelectedValue] = React.useState<string>('');

  return (
    <AutocompleteDropdown
      onClear={() => setUiSelectedValue('')}
      showChevron={false}
      showClear={uiFocus || uiSelectedValue !== ''}
      closeOnBlur={true}
      closeOnSubmit={false}
      initialValue={value?.toString()}
      onFocus={() => setUiFocus(true)}
      onSelectItem={selectedItem => {
        onChange && onChange(Number(selectedItem.id));
        selectedItem && setUiSelectedValue(selectedItem.id);
      }}
      onBlur={() => setUiFocus(false)}
      dataSet={item}
      textInputProps={{
        placeholder: placeholder,
        placeholderTextColor: colors.gray3,
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
