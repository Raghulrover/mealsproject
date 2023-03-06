import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Ionicons} from "@expo/vector-icons"

import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

export default function App() {

  function DrawerNavigator(){
    return <Drawer.Navigator screenOptions={{
      headerStyle : {backgroundColor : '#351401'},
      headerTintColor : 'white',
      sceneContainerStyle : {backgroundColor : '#3f2f25'},
      drawerContentStyle : {backgroundColor: '#351401'},
      drawerInactiveTintColor : 'white',
      drawerActiveTintColor : '#351401',
      drawerActiveBackgroundColor : '#e4baa1'
    }}>
      <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
        title : "All Categories",
        drawerIcon : ({color, size}) => <Ionicons name="list" color={color} size={size} />
      }}/>
      <Drawer.Screen name='Favorites' component={FavoritesScreen} options={{
        drawerIcon : ({color, size}) => <Ionicons name="star" color={color} size={size} />
      }}/>
    </Drawer.Navigator>
  }


  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{            
          headerStyle : {backgroundColor : '#351401'},
          headerTintColor : 'white',
          contentStyle : {backgroundColor : '#3f2f25'}}}>
          <Stack.Screen name="Drawer" component={DrawerNavigator} options={{
            headerShown : false
          }}/>
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} 
          />
          <Stack.Screen name="MealsDetail" component={MealDetailScreen} options={{
            title : 'About the Meal'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});