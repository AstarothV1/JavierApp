import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonAlert from './src/components/CustomBotton/customBotton';
import Card from './src/common/cardCustom';

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Card/>
      </View>
      <View>
        <ButtonAlert/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App; 