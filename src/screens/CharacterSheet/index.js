import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { useRoute, useNavigation } from "@react-navigation/native";


import { Background } from '../../components/Background';
import { Entypo } from "@expo/vector-icons";

import { Info } from './Info/index';

import { styles } from './styles';

export function CharacterSheet() {
  const navigation = useNavigation();

  const route = useRoute();
  const character = route.params

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color="#ffd90f"
              size={30}
            />
          </TouchableOpacity>
          <Text style={styles.name}>{character.name}</Text>
          <View style={styles.right}/>
        </View>

        <Image
          source={{
            uri: character.body
          }}
          style={styles.image}
        />
        <View style={styles.informationContainer}>
          <Text style={styles.informationTitle}>Informações</Text>
          <View style={styles.informationSubContainer}>
            <Info label="Gênero" value={character.gender} />
            <Info label="Idade" value={character.age} />
            <Info label="Ocupação" value={character.ocupation} />
            <Info label="Descrição" value={character.description} />
          </View>
        </View>
      </View>
    </Background>
  );
}
