import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const { registro } = route.params || {};

  if (!registro) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Nenhum registro selecionado.</Text>
      </View>
    );
  }

  const corValor = registro.valor >= 0 ? '#4caf50' : '#f44336';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Registro</Text>
      <Text style={styles.label}>Descrição:</Text>
      <Text style={styles.value}>{registro.descricao}</Text>
      <Text style={styles.label}>Categoria:</Text>
      <Text style={styles.value}>{registro.categoria}</Text>
      <Text style={styles.label}>Valor:</Text>
      <Text style={[styles.value, { color: corValor }]}>R$ {registro.valor.toFixed(2)}</Text>
      <Text style={styles.label}>Tipo:</Text>
      <Text style={styles.value}>{registro.tipo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    marginTop: 4,
  },
  error: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 50,
  },
});