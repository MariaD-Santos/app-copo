import { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { COLORS } from './src/constants/colors';
import { Header } from './src/components/Header';
import { ActionButtons } from './src/components/ActionButtons';

export default function App() {
  // const GOAL = 2000; // Meta diária em ml
  // const [consumed, setConsumed] = useState(0);

  // // Função para acumular a quantidade ingerida
  // const handleAddWater = (amount) => {
  // };

  // // Função para zerar o contador
  // const handleReset = () => {
  // };

  return (
    <View>
      <Header />
      <ActionButtons/>
    </View>
  );
}