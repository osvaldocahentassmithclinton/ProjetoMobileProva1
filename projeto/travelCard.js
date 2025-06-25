import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TravelCard({ id, destino, ida, volta, precoPessoa, tipoViagem, estadia, expandido, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.destino}>{destino}</Text>
      <Text style={styles.id}>ID: {id}</Text>
      {expandido && (
        <View style={styles.detalhes}>
          <Text>Ida: {ida}</Text>
          <Text>Volta: {volta}</Text>
          <Text>Preço/Pessoa: R$ {precoPessoa}</Text>
          <Text>Tipo de Viagem: {tipoViagem}</Text>
          <Text>Estadia: {estadia}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  destino: {
    fontSize: 18,
    fontWeight: "bold",
  },
  id: {
    fontSize: 14,
    color: "#555",
  },
  detalhes: {
    marginTop: 10,
  },
});