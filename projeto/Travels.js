import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import { useCarrinho } from "./ProviderCart.js";

export default function Travels({ isAdmin }) {
  const { adicionarProduto, carrinho, viagens } = useCarrinho();

  const [busca, setBusca] = React.useState("");
  const viagensFiltradas = viagens.filter(v =>
    v.destino.toLowerCase().includes(busca.toLowerCase())
  );

  const salvarAgendamento = (viagem) => {
    const jaExiste = carrinho.some(item => item.id === viagem.id);

    if (!jaExiste) {
      adicionarProduto(viagem);
      alert("Viagem salva no agendamento!");
    } else {
      alert("Esta viagem já está no seu agendamento!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>LISTA DE VIAGENS</Text>
      <TextInput
        placeholder="Pesquisar por cidade..."
        style={styles.searchInput}
        value={busca}
        onChangeText={setBusca}
      />
      {!viagensFiltradas || viagensFiltradas.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhuma viagem disponível</Text>
        </View>
      ) : (
        <FlatList
          data={viagensFiltradas}
          numColumns={2}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.imagem || "https://via.placeholder.com/100" }}
                  style={styles.image}
                />
              </View>
              <View style={styles.info}>
                <Text style={styles.text}>Destino: {item.destino}</Text>
                <Text style={styles.text}>Ida: {item.ida}</Text>
                <Text style={styles.text}>Volta: {item.volta}</Text>
                <Text style={styles.text}>Preço/Pessoa: R$ {item.precoPessoa}</Text>
                <Text style={styles.text}>Tipo: {item.tipoViagem}</Text>
                <Text style={styles.text}>Estadia: {item.estadia}</Text>
                {isAdmin && <Text style={styles.text}>ID: {item.id}</Text>}
              </View>
              {!isAdmin && (
                <TouchableOpacity
                  style={styles.agendarButton}
                  onPress={() => salvarAgendamento(item)}
                >
                  <Text style={styles.agendarButtonText}>Salvar no Agendamento</Text>
                </TouchableOpacity>
              )}
            </View>
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
    paddingTop: 20,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  titleText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
    letterSpacing: 1,
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  flatListContainer: {
    paddingBottom: 20,
    alignItems: "center",
  },
  card: {
    width: (Dimensions.get("window").width / 2) - (10 * 3),
    backgroundColor: "#f7fafd",
    borderRadius: 14,
    margin: 10,
    padding: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.14,
    shadowRadius: 6,
    elevation: 5,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#e0e0e0",
    marginBottom: 4,
    resizeMode: "cover",
  },
  info: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  agendarButton: {
    marginTop: 0,
    marginBottom: 0,
    paddingVertical: 12,
    backgroundColor: "#0066ff",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    alignSelf: "center",
  },
  agendarButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  emptyContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
  },
});
