import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function TodayChallenge() {
  const [challenge, setChallenge] = useState({
    question: "Which Apollo mission is famous for its dramatic in-space emergency that led to the lunar landing being canceled and required the crew to loop around the Moon and return to Earth safely?",
    answer: "Apollo 13",
    date: "20240915",
    hint1: "The mission launched in April 1970 and was meant to be the third Moon landing mission.",
    hint2: "An explosion in one of the spacecraft’s oxygen tanks caused a major malfunction, leading the crew to use the lunar module as a lifeboat.",
    hint3: "The mission is widely known for the phrase \"Houston, we have a problem.\"",
    img_w: 352,
    img_h: 600,
    img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Apollo_13_Service_Module_%28lossless_crop%29.jpg/352px-Apollo_13_Service_Module_%28lossless_crop%29.jpg?20231018012056",
    category1: "Category:Apollo program missions",
    category2: "Category:Crewed missions to the Moon",
    category3: "Category:Jim Lovell"
  });
  const [account, setAccount] = useState({
    score: 52,
    streak: 15,
  });

  function formatDate(yyyymmdd) {
    // Ensure the input is a string and has the correct length
    if (typeof yyyymmdd !== 'string' || yyyymmdd.length !== 8) {
        throw new Error('Invalid date format. Expected YYYYMMDD.');
    }

    // Extract year, month, and day from the input string
    const year = yyyymmdd.substring(0, 4);
    const month = parseInt(yyyymmdd.substring(4, 6), 10); // Convert to number
    const day = parseInt(yyyymmdd.substring(6, 8), 10);   // Convert to number

    // Array of month names
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Ensure the month is within the valid range
    if (month < 1 || month > 12) {
        throw new Error('Invalid month value.');
    }

    // Format the date as "Month Day, Year"
    return `${day} ${monthNames[month - 1]} ${year}`;
}

function calculateHeight(originalWidth, originalHeight, newWidth) {
  const ratio = originalHeight / originalWidth;
  const newHeight = newWidth * ratio;
  return newHeight;
}

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={{ flex: 1, marginTop: 70}}>
        <Text
          style={{fontFamily: 'LinuxLibertine', fontSize: 30, marginLeft: 15, marginRight: 15}}
        >Daily Wiki Challenge
        </Text>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View style={{width: '100%', marginTop: 5, height: 1, backgroundColor: '#BdBdBd'}}/>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 7, marginBottom: 7, marginLeft: 15, marginRight: 15}}>
          <Text style={{flex: 1, fontFamily: 'Arial'}}>{formatDate(challenge.date)}</Text>
          <Text style={{fontWeight: 'bold', fontFamily: 'Arial'}}>{`⭐: ${account.score} 🔥: ${account.streak}`}</Text>
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View style={{width: '100%', height: 1, backgroundColor: '#BdBdBd'}}/>
        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1}}> 
          <View style={{marginLeft: 15, marginRight: 15}}>
        <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 50, marginTop: 15, backgroundColor: '#F8F9FA'}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Hints</Text>
        </View>
        <Text style={{marginTop: 15, fontSize: 16, lineHeight: 25, fontFamily:'Arial'}}>
            {challenge.question}
        </Text>
        <View style={{marginTop: 50, flexDirection: 'column', alignItems: "center"}}>
          <Image 
            source={{ uri: challenge.img_src }} // Use the source prop with a URI object
            style={{
              width: 250, // Set width using style
              height: calculateHeight(challenge.img_w, challenge.img_h, 250), // Set height using style
            }}
            resizeMode="contain" // Optional: adjust the resize mode as needed
          />
          <View style={{width: '100%', backgroundColor: 'grey', height: 50, borderRadius: 10, marginTop: 15}}></View>
        </View>
        </View>
        <View style={{width: '100%', backgroundColor: '#F8F9FA', justifyContent: 'center', height: 100, marginTop: 50}}>
          <Text style={{marginLeft: 15, marginRight: 15, fontSize: 12, color: '#828282'}}>Content is available under 
          <TouchableOpacity style={{marginTop: -3}} onPress={() => Linking.openURL('https://creativecommons.org/licenses/by-sa/4.0/deed.en')}>
          <Text style={{ color: '#2F80ED', textDecorationLine: 'none', fontSize: 12 }}> CC BY-SA 4.0 </Text>
        </TouchableOpacity>
        unless otherwise noted.</Text>
        </View>
        </ScrollView>
      </View>
    </View>
  );
}
