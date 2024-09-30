import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Modal, View, Text, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { SymbolView } from 'expo-symbols';
import * as Font from 'expo-font';

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
      source={require('./assets/DWC_Rec.jpg')} // Replace with your image URL
      style={{ width: 80, height: 24}}
    />
  </View>
);

function CustomDrawerContent({navigation, state}) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{marginTop: 60, marginLeft: 15}}>
        <Text style={{color: 'grey', marginBottom: 15}}>DAILY WIKI CHALLENGE</Text>

        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              key={route.key}
              style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 8, marginBottom: 8}}
              onPress={()=> {
                navigation.navigate(route.name);
                navigation.closeDrawer();
              }}
            >
              <Text style={{width: 12, textAlign: 'center', textAlignVertical: 'center', fontSize: 24, color: '#2F80ED'}}>
                  {isFocused ? "•" : ""}
              </Text>
                <Text style={{ 
                marginLeft: 5,
                fontFamily: 'LinuxLibertine',
                fontSize: 18,
                color: isFocused ? '#2F80ED' : '#333333' // Change color based on focus
              }}>
                {route.name}
              </Text>
            </TouchableOpacity>
          )
        })}
        <TouchableOpacity
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 8, marginBottom: 8, marginLeft: 12}}
        >
            <Text style={{ 
                marginLeft: 5,
                fontFamily: 'LinuxLibertine',
                fontSize: 18,
                color: '#EB5757' // Change color based on focus
              }}>
                Clear Data
              </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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

function PastChallengeStack() {
  return(
  <Stack.Navigator initialRouteName="PastChallengeList" screenOptions={{headerTintColor: 'black'}}>
    <Stack.Screen name="PastChallengeList" component={PastChallengeList} options={{headerTitle: ()=> <CustomHeader/>, headerBackTitle:"Back"}}/>
    <Stack.Screen name="PastChallengeItem" component={PastChallenge} options={{headerTitle: ()=> <CustomHeader/>, headerBackTitle:"Back"}}/>
  </Stack.Navigator>
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

function AboutTabNav({setModalVisible}) {

  return (
      <Tab.Navigator screenOptions={{tabBarShowLabel: false, tabBarActiveTintColor: 'black'}}>
        <Tab.Screen
          name="PastChallenge"
          component={About}
          options={({navigation}) => ({
            headerTitle: ()=> <CustomHeader/>,
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
          name="Open Modal"
          component={About}
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
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'LinuxLibertine': require('./assets/font/LinLibertine_RZ.ttf'), // Adjust the path and file name
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // You can show a loading indicator here
  }

  return (
    <NavigationContainer>
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 300,
        },
      }}
    >
      <Drawer.Screen name="Today's Challenge">
          {() => <MainTabNav setModalVisible={setModalVisible} />}
        </Drawer.Screen>
        <Drawer.Screen name="Past Challenges">
          {() => <PastTabNav setModalVisible={setModalVisible} />}
        </Drawer.Screen>
      <Drawer.Screen name="About">
      {() => <AboutTabNav setModalVisible={setModalVisible} />}
      </Drawer.Screen>
    </Drawer.Navigator>
    <ModalScreen visible={modalVisible} onClose={() => setModalVisible(false)} />
    </NavigationContainer>
  );
}
