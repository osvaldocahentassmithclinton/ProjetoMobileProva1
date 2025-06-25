import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../controller.js";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const VerificaUser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      console.log("Usuário logado!", userCredential.user.email);

      const userDoc = await getDoc(doc(db, "usuarios", email));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log("Dados do usuário:", userData);

        if (userData.isAdmin) {
          navigation.navigate("AdminDashboard");
        } else {
          navigation.navigate("HomeTab");
        }
      } else {
        alert("Usuário não encontrado no banco de dados.");
      }

      setEmail("");
      setSenha("");
    } catch (error) {
      alert("Erro ao logar: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>LOGIN</Text>
      
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
        <TouchableOpacity style={styles.button} onPress={VerificaUser}>
          <Text style={styles.textButtonLogin}>LOGAR</Text>
        </TouchableOpacity>

        <Text style={styles.textNaoConta}>
          Não tem conta?
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")} style={styles.registerButton}>
            <Text style={styles.textRegister}> Clique Aqui!</Text>
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