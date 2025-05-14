import { Text, View, ScrollView, StyleSheet, Button, ImageBackground, TextInput } from 'react-native';
import {useState} from 'react';
import ImagemFundo from '../Imgs/gato.jpg';

import {db} from '../controller';
import {collection, addDoc} from 'firebase/firestore';
import {auth} from "../controller.js";

export default function Signin({navigation}) {
    const [nome,setNome] = useState("");
    const [valor,setValor] = useState("");
    const [imagem,setImagem] = useState("");

    const cadastroProduto = async () =>{
        try{
            await addDoc(collection(db, 'produtos'), {
                nome,
                valor: parseFloat(valor),
                imagem
            });
            setNome('')
            setValor('')
            setImagem('')
        }
        catch(error){
            console.log('erro', error.message);
        };

    }

  return (
    <View style={styles.container}>
      <ImageBackground style={{flex:1, width:'100%',height:'100%', padding: 40, justifyContent: 'space-around'}} source={ImagemFundo}>
        <Text style={[styles.title, styles.textCenter]}>Adicionar Produtos</Text>

        <TextInput
          style={styles.input}
          placeholder='Nome'
          value = {nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder='Valor'
          value = {valor}
          onChangeText={setValor}
        />

        <TextInput
          style={styles.input}
          placeholder='Imagem'
          value = {imagem}
          onChangeText={setImagem}
        />

        {/* Alterado o <input> para <Button> */}
        <Button 
          title="Adicionar" 
          color="#00ff"
          onPress={cadastroProduto}
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
