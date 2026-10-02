import { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, } from 'react-native';
import { Header } from './src/components/Header';
import { ActionButtons } from './src/components/ActionButtons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { WaterProgress } from './src/components/WaterProgress';
import { COLORS } from './src/constants/colors';
import { HealthTip } from './src/components/HealthTip';


export default function App() {
  const GOAL = 2000
  const [consumed, setConsumed] = useState(0)


  const handleAddWater = (amount) => {
    setConsumed((consumed) => consumed + amount);
  }

  const handleReset = () => {
    setConsumed(0);
  }
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <StatusBar barStyle={'auto'} />
        <View style ={styles.content}>
          <Header GOAL={GOAL} />
          <WaterProgress consumed={consumed} goal={GOAL} />
          <ActionButtons onAdd={handleAddWater} onReset={handleReset} />
          <HealthTip/>
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
    alignItems: 'center',
  },
});