import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/screens/screen3'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to EcoNomics</Text>
      <Text style={styles.subheading}>Learn Financial Literacy through Gameplay</Text>

      <Image
        source={require('../assets/avatar1.png')}
        style={styles.avatar}
      />

      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>Start Your Journey</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f4f8',
    padding: 20,
  },
  heading: {
    fontSize: 28, fontWeight: 'bold', marginBottom: 10,
  },
  subheading: {
    fontSize: 16, color: '#555', marginBottom: 20, textAlign: 'center',
  },
  avatar: {
    width: 120, height: 120, borderRadius: 60, marginBottom: 30,
  },
  button: {
    backgroundColor: '#008060', paddingVertical: 12, paddingHorizontal: 28,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff', fontSize: 16, fontWeight: 'bold',
  },
});
