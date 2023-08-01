import React, {useState, useEffect} from 'react';
import Home from '../screens/Home';
import Products from '../screens/Products';
import MyProfile from '../screens/MyProfile';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import FI from 'react-native-vector-icons/FontAwesome5';
import AT from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, Image, Text} from 'react-native';
import AppHeader from '../components/appheader/AppHeader';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Order from '../bottom_navigation/Order';
import UserProfile from '../bottom_navigation/UserProfile';
import Privacy from '../bottom_navigation/Privacy';
import Cart from '../screens/Cart';
import SelectedProduct from '../screens/SelectedProduct';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const tab = createBottomTabNavigator();
export default function RootNavigation() {
  const ProjectDrawer = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        {/* <Drawer.Screen  name="Home" component={Home} options={{headerShown: false,
         
         drawerIcon:()=><MCI name={"home-city"} size={24} />,
         
         }} /> */}

        {/* <Drawer.Screen name="Products" component={Products} options={{headerShown: false,
         drawerIcon:()=><MCI name={"car"} size={24} />,
        }} />
      */}

        <Drawer.Screen
          name="Home"
          component={Bottom}
          options={{
            headerShown: false,
            drawerIcon: () => <MCI name={'car'} size={24} />,
          }}
        />
      </Drawer.Navigator>
    );
  };

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <View
          style={{
            display: 'flex',
            padding: 20,
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Image
            style={{
              marginBottom: 5,
              borderRadius: 50,
              resizeMode: 'contain',
              width: 100,
              height: 100,
            }}
            source={require('../../assets/alice.jpg')}
          />
          <Text style={{fontWeight: 'bold'}}>Alice Kumari</Text>
          <Text>+91301123085)</Text>
          <Text style={{fontSize: 12}}>{'ss@gmail.com'}</Text>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="My Profile"
          onPress={() => props.navigation.navigate('MyProfile')}
          icon={() => <MCI name={'account-box'} size={24} />}
        />

        <DrawerItem
          label="Cart"
          onPress={() => props.navigation.navigate('Cart')}
          icon={() => <MCI name={'account-box'} size={24} />}
        />

<DrawerItem
          label="SelectedProduct"
          onPress={() => props.navigation.navigate('SelectedProduct')}
          icon={() => <MCI name={'account-box'} size={24} />}
        />

        <DrawerItem
          label="Settings"
          icon={() => <MCI name={'account-settings'} size={24} />}
        />

        <DrawerItem
          label="Logout"
          icon={() => <MCI name={'logout'} size={24} />}
        />
      </DrawerContentScrollView>
    );
  }

  const Bottom = () => {
    return (
      <tab.Navigator>
        <tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <AT name="home" size={30} />;
            },
          }}
        />

        <tab.Screen
          name="Order"
          component={Order}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <FI name="gift" size={30} />;
            },
          }}
        />

        <tab.Screen
          name="Delivery Cart"
          component={MyProfile}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return (
                <View style={{bottom: 10}}>
                  <Image
                    style={{
                      marginBottom: 5,
                      borderRadius: 50,
                      resizeMode: 'contain',
                      width: 70,
                      height: 70,
                    }}
                    source={require('../../assets/logo.png')}
                  />
                </View>
              );
            },
          }}
        />

        <tab.Screen
          name="User Profile"
          component={UserProfile}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <AT name="profile" size={30} />;
            },
          }}
        />

        <tab.Screen
          name="Privacy"
          component={Privacy}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="privacy-tip" size={30} />;
            },
          }}
        />
      </tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home1'}>
        <Stack.Screen
          name="Home1"
          component={ProjectDrawer}
          options={{
            header: AppHeader,
          }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            header: AppHeader,
          }}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            header: AppHeader,
          }}
        />
        <Stack.Screen
          name="SelectedProduct"
          component={SelectedProduct}
          options={{
            header: AppHeader,
          }}
        />

        <Stack.Screen
          name="AppHeader"
          component={AppHeader}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
