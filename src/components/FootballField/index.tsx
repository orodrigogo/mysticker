import { View, Text } from 'react-native';

import { PositionProps } from '../../utils/positions';

import { styles } from './styles';

type Props = {
  data: PositionProps;
};

export function FootballField({ data }: Props) {

  return (
    <View style={styles.container}>
      <data.Icon />

      <Text style={styles.title}>
        {data.title}
      </Text>
    </View>
  );
}