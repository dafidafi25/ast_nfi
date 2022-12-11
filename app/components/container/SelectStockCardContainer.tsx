import SelectStockCard from '@components/molecule/SelectStockCard';
import {useAppSelector} from '@hooks/useAppSelector';
import React from 'react';

interface ISelectStockCardContainerProps {
  CoinsId: string;
}

export const SelectStockCardContainer: React.FC<
  ISelectStockCardContainerProps
> = ({CoinsId}) => {
  let CryptoDB = useAppSelector(state => state.crypto.byIds[CoinsId]);

  if (!CryptoDB) return null;

  return (
    <SelectStockCard
      id={CoinsId}
      rank={CryptoDB.rank}
      name={CryptoDB.name}
      symbol={CryptoDB.symbol}
      changePercentage={CryptoDB.changePercent24Hr}
      price={CryptoDB.priceUsd}
    />
  );
};

export default SelectStockCardContainer;
