import { StatusBar } from 'expo-status-bar';
import { Navigation } from './src/navigation'
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './src/context/auth';
import 'react-native-get-random-values';

export default function App() {
  return (
    <>
      <AuthProvider>
        <Navigation />
      </AuthProvider> 
      <StatusBar style="auto" />
    </>
  );
}


