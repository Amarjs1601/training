import {Text, View} from 'react-native';
import React from 'react';
import Button from '../Button';
import Colors from '../../../assets/Colors';
import styles from './TipCss';

export default function Tip() {
  return (
    <View>
      <Text style={styles.heading}>Tip your delivery partner</Text>
      <View>
        <Text style={styles.tip}>
          Your kindness means a lot 100% of your tips will go directly to your
          delivery partner
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.row}>&#128512; &#8377;10</Text>
        <Text style={styles.row}>&#128519; &#8377;25</Text>
        <Text style={styles.row}>&#128525; &#8377;50</Text>
        <Text style={styles.row}>&#128293; Custom</Text>
      </View>
      <View style={styles.btncss}>
        <Button
          bgColor={Colors.darkGreen}
          foreColor={Colors.white}
          title={'Add payment method'}
          width={350}
        />
      </View>
    </View>
  );
}
