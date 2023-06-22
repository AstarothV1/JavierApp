import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pelicula</Text>
      <Image source='./src/images/interestellar.jpg' style={styles.image}></Image>
      <Text style={styles.description}>Interestellar</Text>
    </View>
  );
};

export default Card;
