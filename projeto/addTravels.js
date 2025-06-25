import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { db } from "../controller.js";
import { doc, setDoc } from "firebase/firestore";

export default function cadastroViagens() {
  const [id, setId] = useState("");
  const [destino, setDestino] = useState("");
  const [ida, setIda] = useState("");
  const [volta, setVolta] = useState("");
  const [precoPessoa, setPrecoPessoa] = useState("");
  const [tipoViagem, setTipoViagem] = useState("");
  const [estadia, setEstadia] = useState("");
  const [imagem, setImagem] = useState("");

  const adicionarViagem = async () => {
    try {
      const docRef = doc(db, "travels", id);
      await setDoc(docRef, {
        destino,
        ida,
        volta,
        precoPessoa: parseFloat(precoPessoa),
        tipoViagem,
        estadia,
        imagem, 
      });
      alert("Viagem adicionada com sucesso!");
      setId("");
      setDestino("");
      setIda("");
      setVolta("");
      setPrecoPessoa("");
      setTipoViagem("");
      setEstadia("");
      setImagem("");
    } catch (error) {
      console.log("Erro ao adicionar viagem:", error.message);
      alert("Erro ao adicionar viagem: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>CADASTRO DE VIAGENS</Text>
      <View style={styles.card}>
        <View style={styles.info}>
          <Text style={styles.text}>ID</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ex: 12345"
            value={id}
            onChangeText={setId}
          />
          <Text style={styles.text}>Destino</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ex: Rio de Janeiro"
            value={destino}
            onChangeText={setDestino}
          />
          <Text style={styles.text}>Ida</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ex: 05/06/2025"
            value={ida}
            onChangeText={setIda}
          />
          <Text style={styles.text}>Volta</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ex: 15/06/2025"
            value={volta}
            onChangeText={setVolta}
          />
          <Text style={styles.text}>Preço/Pessoa</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ex: R$500,00"
            value={precoPessoa}
            onChangeText={setPrecoPessoa}
            keyboardType="numeric"
          />
          <Text style={styles.text}>Tipo de Viagem</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ex: Primeira Classe"
            value={tipoViagem}
            onChangeText={setTipoViagem}
          />
          <Text style={styles.text}>Estadia</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ex: Incluso ou Não Incluso"
            value={estadia}
            onChangeText={setEstadia}
          />
          <Text style={styles.text}>Link da Imagem</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ex: https://via.placeholder.com/100"
            value={imagem}
            onChangeText={setImagem}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imagem || "https://via.placeholder.com/100" }}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.cadastrarButton} onPress={adicionarViagem}>
          <Text style={styles.textButton}>CADASTRAR</Text>
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
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    backgroundColor: "#f9f9f9",
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    padding: 8,
    marginBottom: 15,
    width:300,
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
    backgroundColor: "black",
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