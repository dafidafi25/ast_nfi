import {Spacer} from '@components/atom';
import SelectStockCardContainer from '@components/container/SelectStockCardContainer';
import {useAppSelector} from '@hooks/useAppSelector';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import React from 'react';
import {Dimensions, View} from 'react-native';

// get screen width
const screenWidth = Dimensions.get('screen').width;

interface IListVIewSavedStockProps {}

export const ListVIewSavedStock: React.FC<IListVIewSavedStockProps> = () => {
  const CryptoState = useAppSelector(state => state.crypto.savedIds);

  const keyExt = (item: string) => item;

  const renderItem: ListRenderItem<string> = ({item}) => {
    return <SelectStockCardContainer CoinsId={item} />;
  };

  const itemSeparator = () => {
    return <Spacer height={16} />;
  };

  return (
    <View style={{width: screenWidth - 32, height: '100%'}}>
      <FlashList
        contentContainerStyle={{paddingBottom: 85, paddingTop: 16}}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExt}
        data={CryptoState}
        estimatedItemSize={60}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparator}
        ListFooterComponent={<Spacer height={85} />}
      />
    </View>
  );
};

export default ListVIewSavedStock;
