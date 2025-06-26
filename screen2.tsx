import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Screen2() {
  const router = useRouter();
  const { avatar } = useLocalSearchParams();
  const [monthlySpending, setMonthlySpending] = useState('');

  const avatarImages = [
    require('../assets/avatar1.png'),
    require('../assets/avatar2.png'),
    require('../assets/avatar3.png'),
  ];

  const avatarIndex = parseInt((avatar as string) || '1'); 
  const selectedAvatar = avatarImages[avatarIndex - 1];

  const handleContinue = () => {
    
    router.push({
      pathname: '/screens/screen3',
      params: {
        avatar: avatar?.toString() || '1',
        spending: monthlySpending,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Your Monthly Spending</Text>

      {selectedAvatar && (
        <Image source={selectedAvatar} style={styles.avatar} />
      )}

      <TextInput
        style={styles.input}
        placeholder="₹ e.g. 10000"
        keyboardType="numeric"
        value={monthlySpending}
        onChangeText={setMonthlySpending}
      />

      <Button
        title="Continue"
        onPress={handleContinue}
        disabled={!monthlySpending.trim()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20,
  },
  heading: {
    fontSize: 22, fontWeight: 'bold', marginBottom: 20,
  },
  avatar: {
    width: 100, height: 100, marginBottom: 20, borderRadius: 50,
  },
  input: {
    width: '100%', height: 40, borderColor: '#ccc', borderWidth: 1,
    marginBottom: 20, paddingHorizontal: 10, borderRadius: 8,
  },
});
