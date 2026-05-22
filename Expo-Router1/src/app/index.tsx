import { Text, View, StyleSheet,Button } from "react-native";
import {useRouter} from 'expo-router'

export default function Index() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Text>Welcome to Expo-Router</Text>
      <Button title="Go to Home" onPress={() => router.push('/')}/>
      <Button title="Go to About" onPress={() => router.push('/about')}/> 
      <Button title="Go to Profile" onPress={() => router.push('/profile')}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
