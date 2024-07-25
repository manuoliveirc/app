import { StatusBar } from 'expo-status-bar';
import { Navigation } from './src/components/navigation'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}


