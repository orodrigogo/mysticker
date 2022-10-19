import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  isSelected: boolean;
}

export function Position({ title, isSelected, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isSelected ? { backgroundColor: '#047C3F' } : { backgroundColor: '#FFF' }
      ]}
      {...rest}
    >
      <Text
        style={[
          styles.title,
          isSelected ? { color: '#FFF' } : { color: '#000' }
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

