import asyncStorage from '@react-native-async-storage/async-storage'
import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import {useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context' 
const index = () => {
    const [data, setData] = useState('')   
    // setItem
    const storeData = async () => {
        await asyncStorage.setItem('user', 'suraj')
    }
    // getItem
    const getData = async () => {
        const value = await asyncStorage.getItem('user')
        setData(value || '')
    }
    // removeItem
    const removeData = async () => {
        await asyncStorage.removeItem('user')
        setData('')
    }
    // clear
    const clearData = async () => {
        await asyncStorage.clear()
        setData('')
    }
    // getAllKeys
    const getAllKeys = async () => {
        const keys = await asyncStorage.getAllKeys()
        console.log(keys)
    }
    // multiSet
    const multiSet = async () => {
        await asyncStorage.multiSet([['user', 'suraj'], ['email', 'suraj@example.com']])
    }   

    // save multi data
    const saveMultiData = async () => {
        await asyncStorage.multiSet([
            ['user', 'suraj'],
            ['email', 'suraj@example.com']
        ])
    }
    // get multi data   
    const getMultiData = async () => {
        const values = await asyncStorage.multiGet(['user', 'email'])
        console.log(values)
    }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
<Button title="Store Data" onPress={storeData} />
<Button title="Get Data" onPress={getData} />
<Button title="Remove Data" onPress={removeData} />
<Button title="Clear Data" onPress={clearData} />
<Button title="Get All Keys" onPress={getAllKeys} />
<Button title="Multi Set" onPress={multiSet} />
<Button title="Save Multi Data" onPress={saveMultiData} />
<Button title="Get Multi Data" onPress={getMultiData} />
        <Text>Data: {data}</Text>
      </View>
    </SafeAreaView> 
  )
}

export default index

const styles = StyleSheet.create({
    container: {   
        flex: 1,
        justifyContent: 'center',
        gap: 10,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        },  
})