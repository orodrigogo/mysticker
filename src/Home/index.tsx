import { useState } from 'react';
import { Image, SafeAreaView, ScrollView, TextInput, View } from 'react-native';

import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { PositionChoice } from '../components/PositionChoice';

import { styles } from './styles';
import { POSITIONS, PositionProps } from '../utils/positions';

export function Home() {
  const [positionSelected, setPositionSelected] = useState<PositionProps>(POSITIONS[0]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View>
          <Header position={positionSelected} />

          <View style={styles.picture}>

            <Image source={{ uri: 'https://github.com/rodrigorgtic.png' }} style={styles.camera} />

            <View style={styles.player}>
              <TextInput
                placeholder="Digite seu nome aqui"
                style={styles.name}
              />
            </View>
          </View>
        </View>

        <PositionChoice
          onChangePosition={setPositionSelected}
          positionSelected={positionSelected}
        />

        <Button title="Compartilhar" />
      </ScrollView>
    </SafeAreaView>
  );
}