import React, { useState } from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Modal, View, Text, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { SymbolView, SymbolViewProps, SFSymbol } from 'expo-symbols';

import TodayChallenge from './app/TodayChallenge';
import PastChallengeList from './app/PastChallengeList';
import PastChallenge from './app/PastChallenge';
import About from './app/About';
import Share from './app/Share';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const CustomHeader = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Image
      source={require('./assets/DWC_Rect.png')} // Replace with your image URL
      style={{ width: 80, height: 20}}
    />
  </View>
);

function ModalScreen({ visible, onClose }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ width: '100%', padding: 20, backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
          <Text>Change text size.</Text>
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

function MainTabNav({setModalVisible}) {

  return (
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: 'black'}}>
        <Tab.Screen
          name="Menu"
          component={TodayChallenge}
          options={({navigation}) => ({
            tabBarIcon: ({ color, size }) => (
              <SymbolView name="list.bullet" tintColor={color} style={{width: 30, height: 24}} fallback={<View></View>}/>
            ),
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={() => {
                   navigation.navigate("Menu"); // Navigate to the TodayChallenge screen
                   navigation.toggleDrawer();
                   
                }}
              />
            )
          })}
        >
        
        </Tab.Screen>
        <Tab.Screen
          name="Share"
          component={Share}
          options={{
            tabBarIcon: ({ color, size }) => (
              <SymbolView name="square.and.arrow.up" tintColor={color} style={{width: 24, height: 30}} fallback={<View></View>}/>
            ),
          }}
        />
         <Tab.Screen
          name="Open Modal"
          component={TodayChallenge}
          options={{
            tabBarIcon: ({ color, size }) => (
              <SymbolView name="textformat.size" tintColor={color} style={{width: 35, height: 24}} fallback={<View></View>}/>
            ),
            tabBarButton: (props) => (
                <TouchableOpacity
                  {...props}
                  onPress={() => setModalVisible(true)}
                />
            ),
          }}
        />
      </Tab.Navigator>

  );
}

function PastChallengeStack() {
  return(
<Stack.Navigator initialRouteName="PastChallengeList" screenOptions={{headerTintColor: 'black'}}>
  <Stack.Screen name="PastChallengeList" component={PastChallengeList} options={{headerTitle: ()=> <CustomHeader/>, headerBackTitle:"Back"}}/>
  <Stack.Screen name="PastChallengeItem" component={PastChallenge} options={{headerTitle: ()=> <CustomHeader/>, headerBackTitle:"Back"}}/>
</Stack.Navigator>
  );
}

function PastTabNav({setModalVisible}) {

  return (
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: 'black'}}>
        <Tab.Screen
          name="PastChallenge"
          component={PastChallengeStack}
          options={({navigation}) => ({
            tabBarIcon: ({ color, size }) => (
              <SymbolView name="list.bullet" tintColor={color} style={{width: 30, height: 24}} fallback={<View></View>}/>
            ),
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={() => {
                   navigation.navigate("PastChallenge"); // Navigate to the TodayChallenge screen
                   navigation.toggleDrawer();
                   
                }}
              />
            )
          })}
        />
        <Tab.Screen
          name="Share"
          component={Share}
          options={{
            tabBarIcon: ({ color, size }) => (
              <SymbolView name="square.and.arrow.up" tintColor={color} style={{width: 24, height: 30}} fallback={<View></View>}/>
            ),
          }}
        />
         <Tab.Screen
          name="Open Modal"
          component={TodayChallenge}
          options={{
            tabBarIcon: ({ color, size }) => (
              <SymbolView name="textformat.size" tintColor={color} style={{width: 35, height: 24}} fallback={<View></View>}/>
            ),
            tabBarButton: (props) => (
                <TouchableOpacity
                  {...props}
                  onPress={() => setModalVisible(true)}
                />
            ),
          }}
        />
      </Tab.Navigator>

  );
}

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <NavigationContainer>
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="Today's Challenge">
          {() => <MainTabNav setModalVisible={setModalVisible} />}
        </Drawer.Screen>
        <Drawer.Screen name="Past Challenges">
          {() => <PastTabNav setModalVisible={setModalVisible} />}
        </Drawer.Screen>
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
    <ModalScreen visible={modalVisible} onClose={() => setModalVisible(false)} />
    </NavigationContainer>
  );
}
