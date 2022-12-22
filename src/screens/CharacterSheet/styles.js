import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 15,
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  right: {
    width: 20,
    height: 20
  },
  name: {
    textTransform: 'capitalize',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD107',
  },
  image: {
    width: 180,
    height: 260,
    resizeMode:'contain'
  },
  informationContainer: {
    backgroundColor: '#ffd90f',
    width: '90%',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  informationTitle: {
    textTransform: 'uppercase',
    fontSize: 18,
    marginBottom: 5
  },
  informationSubContainer: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 15,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10
  }
});
