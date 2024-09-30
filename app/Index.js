import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

import TodayChallenge from './TodayChallenge';
import PastChallenges from './PastChallengeList';
import About from './About';
import Share from './Share';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerMenu() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Today's Challenge" component={TodayChallenge} />
      <Drawer.Screen name="Past Challenges" component={PastChallenges} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Menu"
          component={DrawerMenu}
          options={({ navigation }) => ({
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="menu" color={color} size={size} />
            ),
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={() => {
                  navigation.navigate('Menu'); // Navigate to the Menu tab
                  navigation.openDrawer(); // Open the drawer
                }}
              />
            ),
          })}
        />
        <Tab.Screen
          name="Share"
          component={Share}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="share-social" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
