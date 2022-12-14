import {Spacer} from '@components/atom';
import SelectStockCardContainer from '@components/container/SelectStockCardContainer';
import {useAppSelector} from '@hooks/useAppSelector';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {GetCoinList} from '@store/index';
import React, {useEffect} from 'react';
import {Dimensions, View} from 'react-native';
import {useDispatch} from 'react-redux';

// get screen width
const screenWidth = Dimensions.get('screen').width;

interface IListViewSelectStockCardProps {}

export const ListViewSelectStockCard: React.FC<
  IListViewSelectStockCardProps
> = () => {
  const dispatch = useDispatch();
  const CryptoState = useAppSelector(state => state.crypto.allIds);
  const offset = useAppSelector(state => state.crypto.offset);
  const search = useAppSelector(state => state.crypto.search);

  useEffect(() => {
    dispatch(GetCoinList({limit: 10, offset: 0, search: ''}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        onEndReached={() => {
          dispatch(
            GetCoinList({
              limit: 10,
              offset: offset + 10,
              search: search,
            }),
          );
        }}
      />
    </View>
  );
};

export default ListViewSelectStockCard;
