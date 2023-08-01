import React, {useState, useEffect, useSyncExternalStore} from 'react';
import {Image, Dimensions, View} from 'react-native';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import styles from './AppHeaderCss';

export default function AppHeader(props) {
  var navigation = useNavigation();
  return (
    <View>
      <View style={styles.menu}>
        <MCI
          name="menu"
          size={24}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <Image
          style={styles.image}
          source={require('../../../assets/logo.png')}
        />
        <MCI name="account" size={24} />
      </View>
    </View>
  );
}
