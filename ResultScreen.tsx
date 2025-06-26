import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ResultScreen() {
  const { total } = useLocalSearchParams();
  const totalSaved = parseInt(total as string) || 0;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🎉 Game Over!</Text>
      <Text style={styles.resultText}>You saved ₹{totalSaved}</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/screens/Dashboard')}>
        <Text style={styles.buttonText}>Back to Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/screens/screen4')}>
        <Text style={styles.buttonText}>Play Again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20,
  },
  heading: {
    fontSize: 26, fontWeight: 'bold', marginBottom: 20,
  },
  resultText: {
    fontSize: 20, marginBottom: 30,
  },
  button: {
    backgroundColor: '#008060', padding: 12, marginVertical: 10, borderRadius: 8, width: '80%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff', fontSize: 16,
  }
});
