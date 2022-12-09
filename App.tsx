import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Basic from './screens/Basic';
import GestureHandlerExample from './screens/GestureHandlerExample';
import ScrollAnimation from './screens/ScrollAnimation';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* <Basic /> */}
        {/* <GestureHandlerExample /> */}
        <ScrollAnimation />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
