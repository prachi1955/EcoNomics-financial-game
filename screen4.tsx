import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const scenarios = [
  {
    question: "You received ₹1000. Will you:",
    options: [
      { text: "Buy new shoes for ₹800", effect: -800 },
      { text: "Save the full ₹1000", effect: 1000 },
    ],
  },
  {
    question: "Your friend is going out for snacks. Will you:",
    options: [
      { text: "Join and spend ₹200", effect: -200 },
      { text: "Skip and save ₹200", effect: 200 },
    ],
  },
  {
    question: "You found ₹500 on the road. Will you:",
    options: [
      { text: "Spend it on games", effect: -500 },
      { text: "Add to your savings", effect: 500 },
    ],
  },
];

export default function Screen4() {
  const [index, setIndex] = useState(0);
  const [wallet, setWallet] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [resultText, setResultText] = useState('');

  const current = scenarios[index];

  const handleChoice = (effect: number, text: string) => {
    const updatedWallet = wallet + effect;
    setWallet(updatedWallet);
    setResultText(effect >= 0 ? "Good choice! 💰" : "Think again next time 💸");
    setShowResult(true);

    setTimeout(() => {
      setShowResult(false);
      if (index + 1 < scenarios.length) {
        setIndex(index + 1);
      } else {
        
        router.push({
          pathname: '/screens/ResultScreen',
          params: { total: updatedWallet.toString() },
        });
      }
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.wallet}>Wallet: ₹{wallet}</Text>
      {index < scenarios.length ? (
        <>
          <Text style={styles.question}>{current.question}</Text>
          {current.options.map((option, i) => (
            <TouchableOpacity
              key={i}
              style={styles.option}
              onPress={() => handleChoice(option.effect, option.text)}
            >
              <Text style={styles.optionText}>{option.text}</Text>
            </TouchableOpacity>
          ))}
          {showResult && <Text style={styles.result}>{resultText}</Text>}
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'
  },
  wallet: {
    fontSize: 20, marginBottom: 20, fontWeight: 'bold', color: '#008060'
  },
  question: {
    fontSize: 18, marginBottom: 15, textAlign: 'center'
  },
  option: {
    backgroundColor: '#008060', padding: 15, borderRadius: 10, marginVertical: 10, width: '80%'
  },
  optionText: {
    color: '#fff', fontSize: 16, textAlign: 'center'
  },
  result: {
    fontSize: 18, marginTop: 20, fontWeight: '600', color: '#007'
  },
});
