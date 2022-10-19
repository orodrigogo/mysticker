import { Text, View } from 'react-native';

import { FootballField } from '../FootballField';
import { PositionProps } from '../../utils/positions';

import Star from '../../assets/star.svg';
import Flag from '../../assets/bandeira.svg';

import { styles } from './styles';

type Props = {
  position: PositionProps;
}

export function Header({ position }: Props) {
  return (
    <View style={styles.container}>
      <FootballField data={position} />

      <View style={styles.right}>
        <Text style={styles.title}>
          Títulos
        </Text>
        <View style={styles.stars}>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </View>

        <Text style={styles.title}>
          Bandeira
        </Text>

        <Flag style={styles.flag} />
      </View>
    </View>
  );
}