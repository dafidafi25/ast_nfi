import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import ASTText from '@components/atom/ASTText';
import {Spacer} from '@components/atom';
import {colors} from '@theme/colors';
import ASTButton from '@components/atom/ASTButton';
import UpIcon from '@assets/icons/UpIcon';
import DownIcon from '@assets/icons/DownIcon';
import {images} from '@assets/index';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorParamList} from '@navigators/app-navigator';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '@hooks/useAppDispatch';
import {addId, removeId} from '@store/index';
import {useAppSelector} from '@hooks/useAppSelector';

type NavigationParams = NativeStackNavigationProp<NavigatorParamList>;

interface ISelectStockCardProps {
  id: string;
  rank: string;
  changePercentage: string;
  price: string;
  symbol: string;
  name: string;
}

export const SelectStockCard: React.FC<ISelectStockCardProps> = ({
  rank,
  changePercentage,
  price,
  symbol,
  name,
  id,
}) => {
  changePercentage = parseFloat(changePercentage).toFixed(2);
  price = parseFloat(price).toFixed(2);
  const navigation = useNavigation<NavigationParams>();
  const dispatch = useAppDispatch();
  const SavedCrypto = useAppSelector(state => state.crypto.savedIds);

  // set icon defaul to up if number is positive and down if number is negative
  let icon = <UpIcon color={colors.green} size={16} />;
  if (parseFloat(changePercentage) < 0) {
    icon = <DownIcon color={colors.red} size={16} />;
  } else if (parseFloat(changePercentage) === 0) {
    icon = <View />;
  }

  // if change percentage is not a number, set it to 0
  if (isNaN(parseFloat(changePercentage))) {
    changePercentage = '0';
    icon = <View />;
  }

  const imageUrl = `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`;

  return (
    <View style={styles.container}>
      <Image
        source={{uri: imageUrl}}
        style={styles.logo}
        defaultSource={images.not_found}
      />
      <Spacer width={16} />
      <View style={{justifyContent: 'center'}}>
        <View style={{width: 150}}>
          <ASTText type="cardTitle" fontSize={18}>
            {`${name} (${symbol})`}
          </ASTText>
        </View>
        <ASTText color={colors.gray}>$ {price}</ASTText>
        <View style={{flexDirection: 'row'}}>
          <ASTText color={colors.gray}>Rank: #{rank}</ASTText>
          <Spacer width={16} />
          <View style={{flexDirection: 'row'}}>
            <View style={{alignSelf: 'center'}}>{icon}</View>
            <ASTText color={colors.gray}>{changePercentage}%</ASTText>
          </View>
          <Spacer width={16} />
        </View>
      </View>
      <Spacer width={16} />
      <View style={{flexGrow: 1}}>
        {SavedCrypto.includes(id) && (
          <ASTButton
            title={'Delete'}
            onPress={() => {
              dispatch(removeId({id: id}));
            }}
          />
        )}
        {!SavedCrypto.includes(id) && (
          <ASTButton
            title={'add'}
            onPress={() => {
              dispatch(addId({id: id}));
              navigation.goBack();
            }}
          />
        )}
      </View>

      <Spacer width={16} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray2,
    paddingBottom: 16,
  },
  logo: {width: 52, height: 52},
});

export default SelectStockCard;
