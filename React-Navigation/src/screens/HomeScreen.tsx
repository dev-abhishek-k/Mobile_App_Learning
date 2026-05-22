import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/types/navigation'
type HomeScreenProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>
}
const HomeScreen = ({navigation}: HomeScreenProp) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='Go to Details' onPress={() => navigation.navigate('Details',{
        Id: 45,  
        name: 'Golu'
      })}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})