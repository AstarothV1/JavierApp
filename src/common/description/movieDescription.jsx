import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from './style';

const MovieComponent = ({ description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default MovieComponent;