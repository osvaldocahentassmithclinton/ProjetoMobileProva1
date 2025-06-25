import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { db } from "../controller.js";
import { doc, updateDoc, getDoc } from "firebase/firestore";

export default function RemoveAdmin() {
  const [email, setEmail] = useState("");

  const removerAdmin = async () => {
    try {
      const userDoc = doc(db, "usuarios", email);
      const docSnap = await getDoc(userDoc);

      if (docSnap.exists()) {
        await updateDoc(userDoc, {
          isAdmin: false,
        });
        alert(`Usuário ${email} não é mais administrador!`);
        setEmail("");
      } else {
        alert(`Usuário com email ${email} não encontrado no Firestore.`);
      }
    } catch (error) {
      console.log("Erro ao remover administrador:", error.message);
      alert("Erro ao remover administrador: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Remover Administrador</Text>
      <Text style={styles.text}>ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o email do usuário"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.cadastrarButton} onPress={removerAdmin}>
          <Text style={styles.textButton}>REMOVER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    marginVertical: 10,
    paddingLeft: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
  },
  cadastrarButton: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    width: "45%",
    height: 50,
    justifyContent: "center",
    backgroundColor: "red",
  },
  textButton: {
    textAlign: "center",
    fontWeight: "350",
    color: "white",
  },
  containerButton: {
    alignItems: "center",
  },
});