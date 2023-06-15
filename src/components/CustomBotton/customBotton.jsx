import React from 'react';
import { Button, Alert } from 'react-native';
import styles from './style';

const ButtonAlert = () => {
  const showAlert = () => {
    Alert.alert('INAAM', 'Bienvenidos a nuestra App');
  };

  return (
    <Button title="Hola" onPress={showAlert} style={styles.button} />
  );
};

export default ButtonAlert;