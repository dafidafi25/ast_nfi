import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {images} from '@assets/index';
import ASTText from '@components/atom/ASTText';
import {Spacer} from '@components/atom';
import {colors} from '@theme/colors';
import ASTButton from '@components/atom/ASTButton';

interface ISelectStockCardProps {}

export const SelectStockCard: React.FC<ISelectStockCardProps> = () => {
  return (
    <View style={styles.container}>
      <Image source={images.btc_example} style={styles.logo} />
      <Spacer width={16} />
      <View style={{justifyContent: 'center', flexGrow: 1}}>
        <ASTText type="cardTitle" fontSize={18}>
          Bitcoin (BTC)
        </ASTText>
        <Spacer height={8} />
        <View style={{flexDirection: 'row'}}>
          <ASTText color={colors.gray}>Rank: #1</ASTText>
          <Spacer width={16} />
          <ASTText color={colors.gray}>24%</ASTText>
          <Spacer width={16} />
          <ASTText color={colors.gray}>$ 123</ASTText>
        </View>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
        <ASTButton title="Add" />
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
