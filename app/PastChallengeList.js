import React from 'react';
import { View, Text, Button } from 'react-native';

const PastChallengeList = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Past Challenge List"
        onPress={() => navigation.navigate('PastChallengeItem')} // Navigate to Detail screen
      />
    </View>
  );
};

export default PastChallengeList;
