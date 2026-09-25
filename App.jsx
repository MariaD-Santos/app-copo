import { useState } from 'react';
import { StyleSheet, View, Text, StatusBar,  } from 'react-native';
import { Header } from './src/components/Header';
import { ActionButtons } from './src/components/ActionButtons';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { WaterProgress } from './src/components/WaterProgress';

export default function App() {
  const GOAL = 2000
  const consumed = 1000

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle={'auto'}/>
          <View>
          <Header GOAL={GOAL} />
          <WaterProgress consumed={consumed} goal={GOAL}/>
          <ActionButtons/>
          </View>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}