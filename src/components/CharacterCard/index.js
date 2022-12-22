import { TouchableOpacity, Image, Text, View, } from 'react-native';
import { styles } from './styles';
import donutImg from '../../assets/donut.png'

export function CharacterCard(props) {
  
  return (
    <TouchableOpacity style={styles.container} onPress={props.pressFunction}>
      <View style={styles.faceContainer}>
        <Image
          style={styles.face}
          source={{uri: props.face}}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.quote}>"{props.quote}"</Text>
      </View>
      <Image source={donutImg} style={styles.donut}/>
    </TouchableOpacity>
  );
}
