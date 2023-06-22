import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonAlert from './src/components/CustomBotton/customBotton';
import Card from './src/common/cardCustom';
import MovieComponent from './src/common/description';

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Card/>
      </View>
      {/* <View>
        <ButtonAlert/>
      </View>  */}
      <View>
        <MovieComponent description="Interstellar narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto con el propósito de superar los límites hasta ahora conocidos por la Humanidad y conquistar las vastas distancias a la que abre paso el viaje interestelar." />
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