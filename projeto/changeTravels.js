import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { useCarrinho } from "./ProviderCart.js";
import { db } from "../controller.js";
import { doc, updateDoc } from "firebase/firestore";

export default function alterarViagens() {
  const { viagens } = useCarrinho();
  const [busca, setBusca] = useState("");
  const viagensFiltradas = viagens.filter(v =>
    v.destino.toLowerCase().includes(busca.toLowerCase())
  );

  const [viagemSelecionada, setViagemSelecionada] = useState(null);
  const [destino, setDestino] = useState("");
  const [ida, setIda] = useState("");
  const [volta, setVolta] = useState("");
  const [precoPessoa, setPrecoPessoa] = useState("");
  const [tipoViagem, setTipoViagem] = useState("");
  const [estadia, setEstadia] = useState("");
  const [imagem, setImagem] = useState("");

  const selecionarViagem = (viagem) => {
    setViagemSelecionada(viagem.id);
    setDestino(viagem.destino);
    setIda(viagem.ida);
    setVolta(viagem.volta);
    setPrecoPessoa(String(viagem.precoPessoa));
    setTipoViagem(viagem.tipoViagem);
    setEstadia(viagem.estadia);
    setImagem(viagem.imagem || "");
  };

  const alterarViagem = async () => {
    if (viagemSelecionada) {
      try {
        const docRef = doc(db, "travels", viagemSelecionada);
        await updateDoc(docRef, {
          destino,
          ida,
          volta,
          precoPessoa: parseFloat(precoPessoa),
          tipoViagem,
          estadia,
          imagem,
        });
        alert("Viagem alterada com sucesso!");
        setViagemSelecionada(null);
        setDestino("");
        setIda("");
        setVolta("");
        setPrecoPessoa("");
        setTipoViagem("");
        setEstadia("");
        setImagem("");
      } catch (error) {
        console.error("Erro ao alterar viagem:", error.message);
        alert("Erro ao alterar viagem: " + error.message);
      }
    } else {
      alert("Selecione uma viagem para alterar.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>ALTERAR VIAGENS</Text>
      {!viagemSelecionada && (
        <TextInput
          placeholder="Pesquisar por cidade..."
          style={styles.searchInput}
          value={busca}
          onChangeText={setBusca}
        />
      )}
      {viagemSelecionada ? (
        <View>
          <Text style={styles.text}>Destino</Text>
          <TextInput style={styles.textInput} value={destino} onChangeText={setDestino} />
          <Text style={styles.text}>Ida</Text>
          <TextInput style={styles.textInput} value={ida} onChangeText={setIda} />
          <Text style={styles.text}>Volta</Text>
          <TextInput style={styles.textInput} value={volta} onChangeText={setVolta} />
          <Text style={styles.text}>Preço/Pessoa</Text>
          <TextInput style={styles.textInput} value={precoPessoa} onChangeText={setPrecoPessoa} keyboardType="numeric" />
          <Text style={styles.text}>Tipo de Viagem</Text>
          <TextInput style={styles.textInput} value={tipoViagem} onChangeText={setTipoViagem} />
          <Text style={styles.text}>Estadia</Text>
          <TextInput style={styles.textInput} value={estadia} onChangeText={setEstadia} />
          <Text style={styles.text}>Link da Imagem</Text>
          <TextInput style={styles.textInput} value={imagem} onChangeText={setImagem} />
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.cadastrarButton} onPress={alterarViagem}>
              <Text style={styles.textButton}>SALVAR ALTERAÇÕES</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <FlatList
          data={viagensFiltradas}
          numColumns={2}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => selecionarViagem(item)}>
              <View style={styles.info}>
                <Text style={styles.text}>ID: {item.id}</Text>
                <Text style={styles.text}>Destino: {item.destino}</Text>
                <Text style={styles.text}>Ida: {item.ida}</Text>
                <Text style={styles.text}>Volta: {item.volta}</Text>
                <Text style={styles.text}>Preço/Pessoa: R$ {item.precoPessoa}</Text>
                <Text style={styles.text}>Tipo: {item.tipoViagem}</Text>
                <Text style={styles.text}>Estadia: {item.estadia}</Text>
              </View>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.imagem || "https://via.placeholder.com/100" }} style={styles.image} />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    textAlign: "center",
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  flatListContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginBottom: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  containerButton: {
    alignItems: "center",
    marginTop: 12,
  },
  cadastrarButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    width: 160,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 10,
    margin: 8,
    elevation: 2,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  info: {
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 8,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
    borderRadius: 6,
  },
});
