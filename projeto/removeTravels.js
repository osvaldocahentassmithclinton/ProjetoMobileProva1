import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { db } from "../controller.js";
import { doc, deleteDoc } from "firebase/firestore";

export default function removerViagens() {
  const [idRemover, setIdRemover] = useState("");

  const removerViagem = async () => {
    try {
      const docRef = doc(db, "travels", idRemover);
      await deleteDoc(docRef);
      alert("Viagem removida com sucesso!");
      setIdRemover("");
    } catch (error) {
      console.error("Erro ao remover viagem:", error.message);
      alert("Erro ao remover viagem: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>REMOVER VIAGENS</Text>
      <View>
        <Text style={styles.text}>ID</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Digite o ID da viagem para remover"
          value={idRemover}
          onChangeText={setIdRemover}
        />
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.cadastrarButton} onPress={removerViagem}>
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
  titleText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    padding: 8,
    marginBottom: 15,
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