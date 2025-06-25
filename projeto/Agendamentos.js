import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions, ActivityIndicator } from "react-native";
import { useCarrinho } from "./ProviderCart.js";

export default function Agendamentos() {
  const { carrinho, removerProduto, carregando } = useCarrinho();

  if (carregando) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>VIAGENS AGENDADAS</Text>
      {carrinho.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhuma viagem agendada</Text>
        </View>
      ) : (
        <FlatList
          data={carrinho}
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
                <TouchableOpacity
                  style={styles.removerButton}
                  onPress={() => removerProduto(item.id)}
                >
                  <Text style={styles.removerButtonText}>Remover</Text>
                </TouchableOpacity>
              </View>
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
  text: {
    fontWeight: "500",
    fontSize: 14,
    color: "#222",
    marginBottom: 2,
  },
  removerButton: {
    marginTop: 10,
    marginBottom: 0,
    paddingVertical: 12,
    backgroundColor: "#ff3b3b",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    alignSelf: "center",
  },
  removerButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  emptyText: {
    fontSize: 17,
    color: "#999",
  },
});
