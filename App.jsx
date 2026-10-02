import { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from './src/components/Header';
import { ActionButtons } from './src/components/ActionButtons';
import { WaterProgress } from './src/components/WaterProgress';
import { COLORS } from './src/constants/colors';
import { HealthTip } from './src/components/HealthTip';

export default function App() {
  const GOAL = 2000;
  const [consumed, setConsumed] = useState(0);

  const handleAddWater = (amount) => {
    setConsumed((prev) => prev + amount);
  };

  const handleReset = () => {
    setConsumed(0);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.content}>
          <Header GOAL={GOAL} />
          <WaterProgress consumed={consumed} goal={GOAL} />
          <ActionButtons onAdd={handleAddWater} onReset={handleReset} />
          <HealthTip />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 24,
  },
});