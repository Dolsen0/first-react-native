import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import PhotoList from './.expo-shared/components/PhotoList';
import Login from './screens/Login';
import { loginStyles } from './assets/styles';

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.safeArea}>
    <Login />
    <PhotoList />
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },


});
