import { useState } from 'react';
import { Image, SafeAreaView, ScrollView, TextInput, View } from 'react-native';

import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { PositionChoice } from '../components/PositionChoice';
import { getDocumentAsync } from 'expo-document-picker';
import { styles } from './styles';
import { POSITIONS, PositionProps } from '../utils/positions';

export function Home() {
  const [positionSelected, setPositionSelected] = useState<PositionProps>(
    POSITIONS[0]
  )
  const [pickedImage, setPickedImage] = useState<string>('')

  const handlePickImage = async () => {
    const result = await getDocumentAsync({
      type: 'image/*',
      multiple: false,
    })

    if (result.type === 'cancel') {
      return
    }

    setPickedImage(result.uri)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View>
          <Header position={positionSelected} />

          <View style={styles.picture}>
            {pickedImage ? (
              <Image source={{ uri: pickedImage }} style={styles.camera} />
            ): null}

            <View style={styles.player}>
              <TextInput
                placeholder="Digite seu nome aqui"
                style={styles.name}
              />
            </View>

            <Button title="Selecione sua foto" onPress={handlePickImage} />
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