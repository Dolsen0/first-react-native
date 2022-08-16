import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Hero from './.expo-shared/components/Hero';

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.safeArea}>
    <Hero />
    <View style={styles.container}>
      <Text style={styles.header}>Boca Code IG Clone</Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "blue",
  },

  container: {
    flex: 1,
    backgroundColor: 'darksalmon',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
header: {
  color: "white",
  fontSize: 32,
}


});
