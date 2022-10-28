import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373D98',
    paddingTop: 24
  },
  scroll: {
    paddingBottom: 150
  },
  picture: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    margin: 24,
    padding: 5
  },
  camera: {
    width: Dimensions.get("screen").width - 58,
    height: 300,
  },
  preview: {
    width: Dimensions.get("screen").width - 58,
    height: 300,
    borderRadius: 10,
    transform: [{ scaleX: -1 }]
  },
  player: {
    width: '100%',
    backgroundColor: '#FFF',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 22,
    fontWeight: '900',
    color: '#000',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  sticker: {
    backgroundColor: '#373D98',
  },
  retry: {
    color: '#FFF',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 22,
    marginBottom: 10
  }
});