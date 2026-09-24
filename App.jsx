import { useState } from 'react';
import { StyleSheet, View, Text, StatusBar,  } from 'react-native';
import { Header } from './src/components/Header';
import { ActionButtons } from './src/components/ActionButtons';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export default function App() {
  const GOAL = 2000;
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle={'auto'}/>
          <View>
          <Header GOAL = {GOAL}/>
          </View>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}