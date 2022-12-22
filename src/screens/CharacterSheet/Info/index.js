import { Text, View } from 'react-native';

import { styles } from './styles';

export function Info(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}:</Text>
      <Text
        style={[
          styles.value,
          props.value === 'masculino' && styles.valueMale,
          props.value === 'feminino' && styles.valueFemale
        ]}>
        {props.value}
      </Text>
    </View>
  );
}
