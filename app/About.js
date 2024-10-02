import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';

const VERSION_CODE = "Beta 0.0.5";

export default function About() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Text style={{marginTop: 25, marginLeft: 15, marginRight: 15, fontSize: 16, lineHeight: 25}}>Daily Wiki Challenge is a ML driven trivia game based on the vast amount of public data available through Wikipedia. The goal of the game is to determine what article the question is referencing. The answer will always be a title of a Wikipedia article. The objective of this game is to have a new and fun way to learn from Wikipedia.</Text>
        <Text style={{marginTop: 25, marginLeft: 15, marginRight: 15, fontSize: 16, lineHeight: 25}}>This mode displays a new trivia question everyday based on current world events and popular Wikipedia articles. You have unlimited guesses to try to figure out what the answer article is. A new hint is released at  <Text style={{ fontWeight: 'bold' }}>11:00</Text>, <Text style={{ fontWeight: 'bold' }}>14:00</Text>, and <Text style={{ fontWeight: 'bold' }}>21:00</Text> each day. However, with each hint there will be a reduction in the number of stars you can win: no hints = 5x⭐, 1 hint = 3x⭐, 2 hints = 2x⭐, and 3 hints = 1x⭐. So try to answer early. Build your daily streak (🔥) by answering questions for consecutive days. Take advantage of categories provided in hints to help narrow your research.</Text>
        <Text style={{marginTop: 25, marginLeft: 15, marginRight: 15, fontSize: 16, lineHeight: 25}}>For all game modes you will probably notice the occasional odd wording in the questions. This is typical GPT LLM growing pains. I’m hoping it will improve as time goes on, and I improve my prompts! My best tip for new players – think from the perspective of browsing Wikipedia. All the answers are actual Wikipedia article titles, so they may not be what you expect!</Text>
        <Text style={{ marginTop: 25, marginLeft: 15, marginRight: 15, fontSize: 16, lineHeight: 25 }}>
        Daily Wiki Challenge was designed and engineered by 
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/eric-klassen-551616205/')}>
          <Text style={{ color: '#2F80ED', textDecorationLine: 'none', fontSize: 16 }}> Eric Klassen </Text>
        </TouchableOpacity>
        using Python Flask, OpenAI GPT-4, and Next.js. Feel free to send me a message if you have any suggestions: 
        <Text style={{ fontWeight: 'bold' }}> eaklassen8 [at] gmail.com</Text>. 
        Follow along with the daily challenges on Instagram - 
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/dailywikichallenge?igsh=MWwxNWJ1N21jb2JoNw%3D%3D&utm_source=qr')}>
          <Text style={{ color: '#2F80ED', textDecorationLine: 'none', fontSize: 16 }}> @dailywikichallenge </Text>
        </TouchableOpacity>
      </Text>
      <View style={{ width: '100%', alignItems: 'center', marginTop: 25, marginBottom: 25 }}>
      <Text style={{ fontWeight: 'bold' }}>
        DWC Version: {VERSION_CODE}
      </Text>
    </View>
    </ScrollView>
  );
}