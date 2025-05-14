import { Text, View, ScrollView, StyleSheet, Button, ImageBackground, TextInput, Image, TouchableOpacity } from 'react-native';
import ImagemFundo from '../Imgs/gato.jpg';
import {useState} from 'react';





export default function Counter({navigation}) {
    function aumentar() {
        setContador(contador + 1);
    }

    function diminuir() {
        setContador(contador - 1);
        if (contador <= 0) {
            setContador(0);
        }
    }
    const [contador, setContador] = useState(0);
    const [nome, setNome] = useState(0);
    const [email, setEmail] = useState(0);
    return (
        <View style={styles.container}>
            <ImageBackground style={{flex:1, width:'100%',height:'100%', padding: 40, justifyContent: 'space-around'}} source={ImagemFundo}>
                <Text style={styles.title}>Contador Dos Sigmas</Text>
                <Text style={[styles.text, { alignSelf: 'center' }, { fontSize: 30}]}>Contador: {contador} </Text>
                <View style={[styles.caixa]}>
                    <TouchableOpacity style={styles.botao} onPress={aumentar}>
                        <Text style={[styles.text, { alignSelf: 'center' }]}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={diminuir}>
                        <Text style={[styles.text, { alignSelf: 'center' }]}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputers}>
                    <TextInput placeholder='Nome' style={styles.input} value={nome} onChangeText={setNome}></TextInput>
                    <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={setEmail}></TextInput>
                </View>
                <Text style={{backgroundColor: 'white'}}>Oi {nome} seu email é {email} e o número é {contador}</Text>
                
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
    borderRadius: 10,
  },
  inputers: {
    justifyContent: 'space-between',
    width: '100%',
  },
  caixa: {
    backgroundColor: '#3030ff',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 10,
    alignSelf: 'center',
    width: '50%',
  },
  img: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  botao: {
    backgroundColor: 'black',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2,
    height: '100%',
    borderRadius: 10,
    width: '40%',
    alignSelf: 'center',
  },
});
