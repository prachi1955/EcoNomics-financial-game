import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Dashboard() {
  const [avatar, setAvatar] = useState(1);
  const [name, setName] = useState('');
  const [spending, setSpending] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const savedAvatar = await AsyncStorage.getItem('selectedAvatar');
        const savedName = await AsyncStorage.getItem('userName');
        const savedSpending = await AsyncStorage.getItem('monthlySpending');

        console.log("Fetched avatar:", savedAvatar);  
        console.log("Fetched name:", savedName);  
        console.log("Fetched spending:", savedSpending);  

        if (savedAvatar !== null) setAvatar(Number(savedAvatar));
        if (savedName !== null) setName(savedName);
        if (savedSpending !== null) setSpending(savedSpending);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  const getAvatarImage = () => {
    const id = Number(avatar);
    if (id === 1) return require('../assets/avatar1.png');
    if (id === 2) return require('../assets/avatar2.png');
    if (id === 3) return require('../assets/avatar3.png');
    return require('../assets/avatar1.png');  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {name || 'Player'} 👋</Text>

      <Image source={getAvatarImage()} style={styles.avatar} />

      <Text style={styles.info}>Monthly Spending: ₹{spending || '0'}</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/screens/screen2')}>
        <Text style={styles.buttonText}>Update Monthly Spending</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/screens/screen3')}>
        <Text style={styles.buttonText}>Change Avatar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/screens/screen4')}>
        <Text style={styles.buttonText}>Play Finance Game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f4f4', padding: 20
  },
  title: {
    fontSize: 22, fontWeight: 'bold', marginBottom: 15
  },
  avatar: {
    width: 120, height: 120, borderRadius: 60, marginVertical: 20
  },
  info: {
    fontSize: 16, color: '#333', marginBottom: 30
  },
  button: {
    backgroundColor: '#008060',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff', fontSize: 16
  }
});
