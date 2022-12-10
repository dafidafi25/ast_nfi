import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {images} from '@assets/index';
import ASTText from '@components/atom/ASTText';
import {Spacer} from '@components/atom';
import {colors} from '@theme/colors';

interface IStockCardProps {}

export const StockCard: React.FC<IStockCardProps> = () => {
  return (
    <View style={styles.container}>
      <Image source={images.btc_example} style={styles.logo} />
      <Spacer width={16} />
      <View style={{justifyContent: 'center', flexGrow: 1}}>
        <ASTText type="cardTitle">Bitcoin</ASTText>
        <ASTText color={colors.gray}>BTC</ASTText>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
        <ASTText type="cardTitle">$7,215.68</ASTText>
        <ASTText color={colors.green}>1,82%</ASTText>
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

export default StockCard;
