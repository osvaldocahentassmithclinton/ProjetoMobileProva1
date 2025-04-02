import { Text, View, ScrollView, StyleSheet, Button, ImageBackground, TextInput, Image } from 'react-native';
import ImagemFundo from '../Imgs/gato.jpg';



export default function Sec3({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground style={{flex:1, width:'100%',height:'100%', padding: 40, justifyContent: 'space-around'}} source={ImagemFundo}>
        <Text style={[styles.title, styles.textCenter]}>ALICE IN WONDERLAND</Text>
        <View style={[styles.caixa]}>
            <Text style={[styles.text, styles.textCenter]}>Veja as mais novas notícias sobre o desenvolvimento do game aqui! Clique no saiba mais para mais informações!</Text>
        </View>
        <Image 
            style={styles.img} 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxzWX2bRIYtpC4qizAd-8mh181pi7Lz02wfw&s'}} 
        />
        <Button color="blue" title="Saiba mais!" onPress={() => {}} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'black',
    flexDirection: 'column',
    padding: 30,
    paddingTop: 70,
  },
  title: {
    fontSize: 35,
    color: 'white',
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
  textCenter: {
    justifyContent: 'flex-start',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    marginVertical: 10,
    paddingLeft: 10,
  },
  caixa: {
    backgroundColor: '#3030ff',
    padding: 10,
    borderRadius: 10
  },
  img: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});
