import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Screen3() {
  const { name = '', spending = '', avatar = '1' } = useLocalSearchParams();
  const [selectedAvatar, setSelectedAvatar] = useState<number>(parseInt(avatar as string || '1'));

  const avatarImages = [
    require('../assets/avatar1.png'),
    require('../assets/avatar2.png'),
    require('../assets/avatar3.png'),
  ];

  const handleSelectAvatar = async (avatarNumber: number) => {
    try {
      setSelectedAvatar(avatarNumber);
      await AsyncStorage.setItem('selectedAvatar', avatarNumber.toString());
      await AsyncStorage.setItem('userName', name as string);
      await AsyncStorage.setItem('monthlySpending', spending as string);

      router.push('/screens/Dashboard');
    } catch (error) {
      console.error('Failed to save data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello, {name || 'Player'}!</Text>
      <Text style={styles.subheading}>Monthly Spending: ₹{spending || '0'}</Text>
      <Text style={styles.title}>Choose Your Avatar</Text>

      <View style={styles.avatarContainer}>
        {avatarImages.map((img, index) => (
          <TouchableOpacity key={index} onPress={() => handleSelectAvatar(index + 1)}>
            <Image source={img} style={[styles.avatar, selectedAvatar === index + 1 && styles.selected]} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20, fontWeight: 'bold', marginBottom: 5,
  },
  subheading: {
    fontSize: 16, marginBottom: 20, color: '#555',
  },
  title: {
    fontSize: 18, fontWeight: 'bold', marginBottom: 15,
  },
  avatarContainer: {
    flexDirection: 'row', justifyContent: 'space-around', width: '100%', paddingHorizontal: 30,
  },
  avatar: {
    width: 100, height: 100, marginHorizontal: 10, borderRadius: 50, borderWidth: 2, borderColor: 'transparent',
  },
  selected: {
    borderColor: '#008060',
  },
});
