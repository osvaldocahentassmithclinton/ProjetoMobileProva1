import { Text, View, StyleSheet, Button, ImageBackground, TextInput } from 'react-native';
import ImagemFundo from '../Imgs/gato.jpg';



export default function Sec2({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground style={{flex:1, width:'100%',height:'100%', padding: 40, justifyContent: 'space-around'}} source={ImagemFundo}>
        <Text style={[styles.title, styles.textCenter]}>ALICE IN WONDERLAND</Text>
        <Text style={[styles.text, styles.textCenter]}>Faça seu login abaixo!</Text>

        <TextInput
          style={styles.input}
          placeholder='Email'
        />
        <TextInput
          style={styles.input}
          placeholder='Senha'
          secureTextEntry={true} // Para esconder a senha
        />

        {/* Alterado o <input> para <Button> */}
        <Button 
          title="Logar" 
          onPress={() => navigation.navigate('Home')}
          color="#00ff"
        />
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
});
