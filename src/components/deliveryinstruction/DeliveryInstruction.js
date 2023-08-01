import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './DeliveryInstructionCss';

export default function DeliveryInstruction() {
  const data = [
    {
      id: 1,
      icon: 'microphone',
      name: 'Record',
      instruction: 'Press here and  hold.',
    },
    {
      id: 2,
      icon: 'phone-off',
      instruction: 'Avoid Calling',
    },
    {
      id: 3,
      icon: 'bell-off',
      instruction: 'Dont t Ring The Bell.',
    },
  ];
  const Delivery = () => {
    return data.map(item => {
      return (
        <View style={styles.container}>
          <View style={styles.firstboxrow}>
            <View style={styles.firstrow}>
              <Icons name={item.icon} size={24} />
              <Text style={styles.boxtext1}>{item.name}</Text>
            </View>
            <View style={styles.boxtext}>
              <Text>{item.instruction}</Text>
            </View>

            <Text></Text>
          </View>
        </View>
      );
    });
  };

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {Delivery()}
      </ScrollView>
    </View>
  );
}


