import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import { NativeStackScreenProps }
from '@react-navigation/native-stack';

import { RootStackParamList }
from '../navigation/types/navigation';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;

const DetailsScreen = ({
  route,
  navigation,
}: Props) => {

  const { Id, name } = route.params;

  return (
    <View style={styles.container}>
      <Text>Id: {Id}</Text>

      <Text>Name: {name}</Text>

      <Button
        title="Go to Contact"
        onPress={() =>
          navigation.navigate('Contact')
        }
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});