import React, { useState } from 'react'
import { db } from '../lib/db'
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native'

type User = {
  id: number
  name: string
  email: string
}

export default function UsersScreen() {
  const [users, setUsers] = useState<User[]>([])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  /* =========================
     GET API
  ========================= */

  const getUsers = async () => {
    try {
     

      const data = await db.execute('SELECT * FROM users_data') 

      setUsers(data.rows as unknown as User[])
    } catch (error) {
      console.log(error)
    }
  }

  /* =========================
     POST API
  ========================= */

const addUser = async () => {
  try {
    await db.execute({
      sql: "INSERT INTO users_data (name, email) VALUES (?, ?)",
      args: [name, email],
    });

    setName("");
    setEmail("");

    getUsers();
  } catch (error) {
    console.log(error);
  }
};
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        React Native API
      </Text>

      {/* INPUTS */}

      <TextInput
        placeholder="Enter Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      {/* POST BUTTON */}

      <Button
        title="Add User"
        onPress={addUser}
      />

      {/* GET BUTTON */}

      <View style={{ marginTop: 10 }}>
        <Button
          title="Get Users"
          onPress={getUsers}
        />
      </View>

      {/* DATA LIST */}

      <FlatList
        data={users}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Name: {item.name}</Text>

            <Text>Email: {item.email}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },

  card: {
    backgroundColor: '#ddd',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
})