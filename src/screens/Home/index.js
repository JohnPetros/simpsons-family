import {
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { CharacterCard } from '../../components/CharacterCard';

import { styles } from './styles';
import logoImg from '../../assets/simpsons-logo.png';
import { characters } from '../../utils/Characters';

export function Home() {
  const navigation = useNavigation();

  function handleCharacterSheet({ name, body, gender, age, ocupation, description }) {
    navigation.navigate('character-sheet', { name, body, gender, age, ocupation, description });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <FlatList
          data={characters}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CharacterCard {...item} pressFunction={() => handleCharacterSheet(item)} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
