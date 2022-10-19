import { FlatList, View, Text } from 'react-native';

import { POSITIONS, PositionProps } from '../../utils/positions';

import { Position } from '../Position';

import { styles } from './styles';

type Props = {
  onChangePosition: (position: PositionProps) => void;
  positionSelected: PositionProps;
}

export function PositionChoice({ onChangePosition, positionSelected }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha a posição
      </Text>
      <FlatList
        data={POSITIONS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Position
            title={item.title}
            onPress={() => onChangePosition(item)}
            isSelected={item.title === positionSelected.title}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
      />
    </View>
  );
}