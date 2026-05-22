import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const ContactScreen = ({navigation}:any) => {
  return (
    <View>
   <Text>ContactScreen</Text>
       <Button title='Go to Gallery' onPress={() => navigation.navigate('Gallery')}/>
    </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({})