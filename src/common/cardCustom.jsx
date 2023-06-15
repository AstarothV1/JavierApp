import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INAAM</Text>
      <Text style={styles.description}>Bienvenidos a nuestra App</Text>
    </View>
  );
};

export default Card;
