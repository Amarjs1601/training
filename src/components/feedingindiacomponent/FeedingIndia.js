import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './FeedingIndiaCss';
export default function FeedingIndia() {
  return (
    <View style={styles.Container}>
      <View style={styles.icon}>
        <Icons name={'food'} size={24} />
      </View>
      <View style={styles.text}>
        <Text style={styles.heading}>Feeding India Donation</Text>
        <Text numberOfLines={1} style={styles.text2}>
          Working towards a malnutrition free India.Feeding India is a initiate
          to give donation to the NGO's basically help in Working for malnution
          free india...Read More{' '}
        </Text>
      </View>
    </View>
  );
}
