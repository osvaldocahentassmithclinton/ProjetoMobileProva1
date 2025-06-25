import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { auth, db } from "../controller.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastroUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      await setDoc(doc(db, "usuarios", user.email), {
        email: user.email,
        isAdmin: false,
        uid: user.uid,
      });

      await setDoc(doc(db, "carrinhos", user.uid), {
        produtos: [],
      });

      alert("Usuário cadastrado com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      console.log("Erro ao criar usuário:", error.message);
      alert("Erro ao cadastrar usuário: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>CADASTRO</Text>
      
      <View>
        <Text style={styles.textInput}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: emailtop@gmail.com"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.textInput}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 123456"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={cadastroUser}>
          <Text style={styles.textButtonLogin}>CADASTRAR</Text>
        </TouchableOpacity>

        <Text style={styles.textNaoConta}>
          Já tem conta?
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.textRegister}> Clique aqui!</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 30,
    paddingTop: 70,
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 12,
    opacity: 0.5,
    fontSize: 18,
  },
  textLogin: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
  },
  textInput: {
    fontWeight: '600',
    fontSize: 17,
  },
  button: {
    padding: 20,
    width: 250,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#DADADA',
  },
  buttonView: {
    alignItems: 'center',
  },
  textButtonLogin: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textRegister: {
    color: '#1A73E8',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textNaoConta: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
