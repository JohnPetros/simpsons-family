import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    width: '85%',
    paddingVertical: 5,
    flexWrap: 'wrap',
  },
  label: {
    fontSize: 18,
  },
  value: {
    fontSize: 16,
    textAlign: 'justify',
  },
  valueMale: {
    backgroundColor: '#0060BA',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
  },
  valueFemale: {
    backgroundColor: '#ED1C24',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
  },
});
