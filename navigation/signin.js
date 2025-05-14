import { Text, View, ScrollView, StyleSheet, Button, ImageBackground, TextInput } from 'react-native';
import {useState} from 'react';
import ImagemFundo from '../Imgs/gato.jpg';

import {createUserWithEmailAndPassword} from "firebase/auth";

import {auth} from "../controller.js";

export default function Signin({navigation}) {
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");

    const cadastroUser = () =>{
        createUserWithEmailAndPassword(auth, email, senha).then((userCredential) => {
            console.log('cadastrado!', userCredential.user.email);
            navigation.navigate('Login');
          })
        .catch((error) => {
          console.log('erro', error.message);
        });
    }

  return (
    <View style={styles.container}>
      <ImageBackground style={{flex:1, width:'100%',height:'100%', padding: 40, justifyContent: 'space-around'}} source={ImagemFundo}>
        <Text style={[styles.title, styles.textCenter]}>Sign In</Text>
        <Text style={[styles.text, styles.textCenter]}>Faça seu login abaixo!</Text>

        <TextInput
          style={styles.input}
          placeholder='Email'
          value = {email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder='Senha'
          secureTextEntry={true} // Para esconder a senha
          value = {senha}
          onChangeText={setSenha}
        />

        {/* Alterado o <input> para <Button> */}
        <Button 
          title="Cadastrar" 
          color="#00ff"
          onPress={cadastroUser}
        />
        <Button 
          title="Voltar ao login" 
          onPress={() => navigation.navigate('Login')}
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
