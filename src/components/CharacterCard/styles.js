import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F3CE15',
    width: "100%",
    height: 140,
    padding: 12,
    marginTop: 10,
    borderRadius: 6,
    alignItems: 'center',
   borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: 'relative'
  },
  faceContainer: {
    backgroundColor: '#eee',
    width: 110,
    height: 125,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  face: {
    width: 70,
    height: 110,
  },
  text: {
    flex: 2,
    justifyContent: 'center',
    height: '100%',
  },
  name: {
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15
   
  },
  quote: {
    alignSelf: 'flex-end',
    fontSize: 14,
  },
  donut: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: -18,
    right: -8
  }
});
